import { createStore } from 'redux';
import {counterActionTypes} from "./store-helper";

const counterInitialState = {
  value: 0,
};

// eslint-disable-next-line default-param-last
function counterReducer(state = counterInitialState, action) {
  switch (action.type) {
    case counterActionTypes.incremented: {
      return { ...state, value: state.value + 1 };
    }
    case counterActionTypes.decremented: {
      return { ...state, value: state.value - 1 };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(counterReducer);

export default store;
