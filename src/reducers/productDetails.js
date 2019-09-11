import { actions } from '../actions';

const defaultState = {
  data: {
    name: 'Audio-Technica ATH-MSR7',
    headline: '2017 Best Headphones of the Year Award Winner',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Consectetur a erat nam at lectus. Quam quisque id diam vel quam. Congue quisque egestas diam in arcu. Phasellus vestibulum lorem sed risus. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Sed faucibus turpis in eu mi bibendum. Nec ultrices dui sapien eget mi proin.',
    details: 'Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Et tortor consequat id porta nibh venenatis cras sed felis. Et ligula ullamcorper malesuada proin libero. Senectus et netus et malesuada fames. Massa sapien faucibus et molestie ac feugiat sed. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Convallis tellus id interdum velit laoreet id donec ultrices. A lacus vestibulum sed arcu non. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.',
    price: '$89.99',
    discountPrice: '$59.99',
    variants: [{
      color: 'Black',
      img: 'ath-msr7-black.jpg',
    }, {
      color: 'Brown',
      img: 'ath-msr7-brown.jpg',
    }]
  },
  selectedTab: 0,
  selectedVariant: 0,
};

export default function productDetails(state = defaultState, action) {
  switch (action.type) {
    case actions.PRODUCT_DETAILS_TAB_CHANGED:
      return {
        ...state,
        selectedTab: action.payload.selectedTab
      };
    case actions.PRODUCT_VARIANT_CHANGED:
      return {
        ...state,
        selectedVariant: action.payload.selectedVariant
      };
    default:
      return state;
  }
};
