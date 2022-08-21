import React from 'react';
import makeStore from './makeStore';

const DEFAULT_STATE = {
  active: false,
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'set-active':
      return {
        ...state,
        active: action.payload,
      };
    case 'reset-context':
      return {
        ...DEFAULT_STATE,
      };
    default:
      throw new Error();
  }
};

const [GlobalProvider, useGlobalDispatch, useGlobalStore] = makeStore(
  globalReducer,
  DEFAULT_STATE
);

export { GlobalProvider, useGlobalDispatch, useGlobalStore };
