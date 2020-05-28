import { STARTER } from './actionType';

const initialState = {
  started: false,
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case STARTER: {
      return state;
    }
    default:
      return state;
  }
};

export default appReducer;
