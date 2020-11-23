import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'core/ducks/visual';

import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(theme => {
  return {
    root: {
      position: 'absolute',
      top: 20,
      right: 20,
    },

    themeChanger: {
      marginLeft: 'auto',
    },
  };
});

export default function Header() {
  const classes = useStyles();
  const themeMode = useSelector(state => state.visual.theme);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch({ type: actions.TOGGLE_THEME });
  };

  return (
    <div className={classes.root}>
      <Switch
        className={classes.themeChanger}
        checked={themeMode !== 'light'}
        onChange={handleThemeChange}
        color='secondary'
        name='themeSwitch'
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}
