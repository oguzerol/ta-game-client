import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'core/ducks/visual';

import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useGame } from 'core/contexts/GameProvider';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    },
    themeChanger: {
      marginLeft: 'auto',
    },
  };
});

export default function Header() {
  const classes = useStyles();
  const themeMode = useSelector(state => state.visual.theme);
  const userId = useSelector(state => state.user.id);

  const dispatch = useDispatch();
  const { game } = useGame();

  const handleThemeChange = () => {
    dispatch({ type: actions.TOGGLE_THEME });
  };

  const opponent =
    userId === game.playerOne.id ? game.playerTwo : game.playerOne;

  return (
    <div className={classes.root}>
      <AppBar position='absolute' color='transparent'>
        <Toolbar>
          <Typography>
            {game.playerTwo === null
              ? 'Opponent is waiting'
              : opponent.username}
          </Typography>

          <Switch
            className={classes.themeChanger}
            checked={themeMode !== 'light'}
            onChange={handleThemeChange}
            color='secondary'
            name='themeSwitch'
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
