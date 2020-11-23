import palette from '../palette';

export default {
  input: {
    '&:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0px 1000px ${palette} inset`,
      //undefined pallette works.
    },
  },
};
