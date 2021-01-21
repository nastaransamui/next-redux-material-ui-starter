import { createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const reducer = (state = {themeName: 'cloud', themeType: 'dark'}, action) =>{
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    case 'themeName':
      return {...state, themeName: action.payload};
    case 'themeType':
      return {...state, themeType: action.payload};
    default:
      return state;
  }
};

const makeStore = context => createStore(reducer);

export const wrapper = createWrapper(makeStore, {debug: true});