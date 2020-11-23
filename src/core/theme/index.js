import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';
import breakpoints from './breakpoints';

const theme = type => {
  return createMuiTheme({
    palette: palette(type),
    typography,
    overrides,
    breakpoints,
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
  });
};

export default theme;
