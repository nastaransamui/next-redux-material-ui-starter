import { createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const reducer = (state = {
  themeName: 'cloud',
   themeType: 'dark',
   isLoading: 0,
   [`next-i18next`]: 'en'
}, action) =>{
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    case 'themeName':
      return {...state, themeName: action.payload};
    case 'themeType':
      return {...state, themeType: action.payload};
      case 'isLoading':
      return {...state, chat: action.payload};
      case 'next-i18next':
      return {...state,  [`next-i18next`]: action.payload};
    default:
      return state;
  }
};

const makeStore = context => createStore(reducer);

export const wrapper = createWrapper(makeStore, {debug: false});