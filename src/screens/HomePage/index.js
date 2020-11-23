import React from 'react';
import { useSocket } from 'core/contexts/SocketProvider';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { URL_GAME } from 'core/utils/constants/routes';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  button: {
    height: '50px',
    width: '250px',
    fontSize: '24px',
    margin: '20px 0',
    fontWeight: 'bold',
  },
}));

const HomePage = () => {
  const socket = useSocket();
  const history = useHistory();
  const user = useSelector(state => state.user);
  const classes = useStyles();

  const startGame = isSingleUser => {
    socket.emit('create-game', { user, isSingleUser });
    history.push(URL_GAME);
  };

  return (
    <div>
      <div>
        <Button
          variant='outlined'
          onClick={() => startGame(true)}
          color='secondary'
          className={classes.button}
        >
          Single Player
        </Button>
      </div>
      <div>
        <Button
          variant='outlined'
          onClick={() => startGame(false)}
          color='secondary'
          className={classes.button}
        >
          Multi Player
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
