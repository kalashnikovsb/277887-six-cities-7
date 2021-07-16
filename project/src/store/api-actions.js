import {loadOffers, loadReviews, loadUserData, requiredAuthorization, redirectToRoute, logout, loadRoom, setIsRoomDataLoaded, loadOffersNearby, setIsOffersNearbyLoaded} from './actions.js';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const.js';
import {adaptOfferToClient, adaptReviewToClient, adaptUserToClient} from '../adapter/adapter.js';


const fetchOferrsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => adaptOfferToClient(offer));
      return offers;
    })
    .then((offers) => dispatch(loadOffers(offers)))
);


const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => {
      const reviews = data.map((review) => adaptReviewToClient(review));
      return reviews;
    })
    .then((reviews) => dispatch(loadReviews(reviews)))
);


const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => {
      dispatch(loadUserData(adaptUserToClient(response.data)));
      dispatch(requiredAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {})
);


const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(loadUserData(adaptUserToClient(data)));
    })
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.FAVORITES)))
);


const APIlogout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logout()))
    .then(() => dispatch(loadUserData({})))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);


const fetchRoom = (id) => (dispatch, _getState, api) => {
  dispatch(setIsRoomDataLoaded(false));
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadRoom(adaptOfferToClient(data))))
    .then(() => dispatch(setIsRoomDataLoaded(true)))
    .catch(() => {
      dispatch(redirectToRoute(AppRoute.NOT_FOUND));
    });
};


const fetchOffersNearby = (id) => (dispatch, _getState, api) => {
  dispatch(setIsOffersNearbyLoaded(false));
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.OFFERS_NEARBY}`)
    .then(({data}) => dispatch(loadOffersNearby(data.map(adaptOfferToClient))))
    .then(() => dispatch(setIsOffersNearbyLoaded(true)));
};


const postReview = ({id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`,
    {comment, rating},
    {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    })
    .then(({data}) => dispatch(loadReviews(data.map(adaptReviewToClient))))
);


export {
  fetchOferrsList,
  fetchReviewsList,
  checkAuth,
  login,
  APIlogout,
  fetchRoom,
  fetchOffersNearby,
  postReview
};
