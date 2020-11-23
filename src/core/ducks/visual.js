export const initialState = {
  theme: localStorage.getItem('theme') || 'light',
};

export const actions = {
  TOGGLE_THEME: 'TOGGLE_THEME',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_THEME:
      const theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      return {
        ...state,
        theme,
      };
    default:
      return state;
  }
};

export default reducer;
