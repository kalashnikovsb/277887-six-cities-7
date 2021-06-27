const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
};

const CardsTypes = {
  MAIN: {
    listClassNames: 'cities__places-list places__list tabs__content',
    articleClassName: 'cities__place-card',
    imgWrapClassName: 'cities__image-wrapper',
    textInfoClassName: '',
    hasPremiumMark: true,
    imgWidth: 260,
    imgHeight: 200,
  },
  NEARBY: {
    listClassNames: 'near-places__list places__list',
    articleClassName: 'near-places__card',
    imgWrapClassName: 'near-places__image-wrapper',
    textInfoClassName: '',
    hasPremiumMark: false,
    imgWidth: 260,
    imgHeight: 200,
  },
  FAVORITES: {
    listClassNames: 'favorites__places',
    articleClassName: 'favorites__card',
    imgWrapClassName: 'favorites__image-wrapper',
    textInfoClassName: 'favorites__card-info',
    hasPremiumMark: false,
    imgWidth: 150,
    imgHeight: 110,
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
  CardsTypes,
  HousingTypes,
  MapTypes,
  Cities
};
