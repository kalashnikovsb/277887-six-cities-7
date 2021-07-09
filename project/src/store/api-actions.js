import {ActionCreator} from './actions.js';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const.js';
import {adaptOfferToClient, adaptReviewToClient, adaptUserToClient} from '../adapter/adapter.js';


const fetchOferrsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => adaptOfferToClient(offer));
      return offers;
    })
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)))
);


const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => {
      const reviews = data.map((review) => adaptReviewToClient(review));
      return reviews;
    })
    .then((reviews) => dispatch(ActionCreator.loadReviews(reviews)))
);


const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);


const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.loadUserData(adaptUserToClient(data)));
    })
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.FAVORITES)))
);


const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);


export {
  fetchOferrsList,
  fetchReviewsList,
  checkAuth,
  login,
  logout
};
