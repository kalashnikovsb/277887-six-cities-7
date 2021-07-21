import {
  loadOffers,
  loadReviews,
  loadUserData,
  requiredAuthorization,
  redirectToRoute,
  logout,
  loadRoom,
  setIsRoomDataLoaded,
  loadOffersNearby,
  setIsOffersNearbyLoaded,
  loadFavorites,
  setReviewSendingError,
  setReviewFormDisabled,
  setFavoriteLoadedStatus
} from './actions.js';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const.js';
import {adaptOfferToClient, adaptReviewToClient, adaptUserToClient} from '../adapter/adapter.js';
import {findAndDeleteOffer, findAndReplaceOffer} from '../utils.js';


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


const postReview = ({id, comment, rating}) => (dispatch, _getState, api) => {
  dispatch(setReviewFormDisabled(true));

  api.post(`${APIRoute.REVIEWS}/${id}`,
    {comment, rating},
    {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    })
    .then(({data}) => dispatch(loadReviews(data.map(adaptReviewToClient))))
    .then(() => {
      dispatch(setReviewSendingError(false));
      dispatch(setReviewFormDisabled(false));
    })
    .catch(() => {
      dispatch(setReviewSendingError(true));
      dispatch(setReviewFormDisabled(false));
    });
};


const fetchFavorites = () => (dispatch, _getState, api) => {
  dispatch(setFavoriteLoadedStatus(false));

  api.get(APIRoute.FAVORITES)
    .then(({data}) => {
      const favorites = data.map((offer) => adaptOfferToClient(offer));
      return favorites;
    })
    .then((favorites) => dispatch(loadFavorites(favorites)))
    .then(() => dispatch(setFavoriteLoadedStatus(true)));
};


const postToFavorites = (offers, favorites, offer) => (dispatch, _getState, api) => {
  dispatch(setFavoriteLoadedStatus(false));
  const status = offer.isFavorite ? 0 : 1;
  let copyData = null;

  api.post(`${APIRoute.FAVORITES}/${offer.id}/${status}`)
    .then(({data}) => {
      const adaptedData = adaptOfferToClient(data);
      return adaptedData;
    })
    .then(({data}) => {
      copyData = Object.assign(data);

      let favoritesCopy = favorites.slice();
      if (status) {
        favoritesCopy.push(data);
      } else {
        favoritesCopy = findAndDeleteOffer(favoritesCopy, data);
      }

      return favoritesCopy;
    })
    .then((favoritesCopy) => dispatch(loadFavorites(favoritesCopy)))
    .then(() => {
      let offersCopy = offers.slice();
      offersCopy = findAndReplaceOffer(offersCopy, copyData);
      return offersCopy;
    })
    .then((offersCopy) => dispatch(loadOffers(offersCopy)))
    .then(() => dispatch(setFavoriteLoadedStatus(true)))
    .catch(() => {});
};


export {
  fetchOferrsList,
  fetchReviewsList,
  checkAuth,
  login,
  APIlogout,
  fetchRoom,
  fetchOffersNearby,
  postReview,
  fetchFavorites,
  postToFavorites
};
