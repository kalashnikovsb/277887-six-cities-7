const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
};

const CardTypes = {
  MAIN: {
    articleClassName: 'cities__place-card',
    imgWrapClassName: 'cities__image-wrapper',
    textInfoClassName: '',
    hasPremiumMark: true,
    imgWidth: 260,
    imgHeight: 200,
  },
  FAVORITES: {
    articleClassName: 'favorites__card',
    imgWrapClassName: 'favorites__image-wrapper',
    textInfoClassName: 'favorites__card-info',
    hasPremiumMark: false,
    imgWidth: 150,
    imgHeight: 110,
  },
  OFFER: {
    articleClassName: 'near-places__card',
    imgWrapClassName: 'near-places__image-wrapper',
    textInfoClassName: '',
    hasPremiumMark: false,
    imgWidth: 260,
    imgHeight: 200,
  },
};

const HousingTypes = ['apartment', 'room', 'house', 'hotel'];

const Cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const MapTypes = {
  MAIN: 'main',
  OFFER: 'offer',
};

export {
  AppRoute,
  CardTypes,
  HousingTypes,
  MapTypes,
  Cities
};
