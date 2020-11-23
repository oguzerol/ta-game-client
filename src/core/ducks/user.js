import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  id: null,
  username: null,
};

export const actions = {
  SET_USER: 'SET_USER',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USER:
      return {
        ...state,
        id: uuidv4(),
        username: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
