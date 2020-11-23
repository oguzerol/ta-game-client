import React, { useEffect, useRef } from 'react';
import { useGame } from 'core/contexts/GameProvider';
import { useSelector } from 'react-redux';
import { useSocket } from 'core/contexts/SocketProvider';
import {
  makeStyles,
  Button,
  Box,
  Chip,
  Modal,
  Typography,
} from '@material-ui/core';

import Header from './Header';
import { useHistory } from 'react-router-dom';
import { URL_HOMEPAGE } from 'core/utils/constants/routes';

const useStyles = makeStyles(() => ({
  buttonWrapper: {
    position: 'absolute',
    bottom: '15px',
    left: 0,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  button: {
    height: '80px',
    width: '80px',
    borderRadius: '43%',
  },
  userChoice: {
    padding: '35px 15px',
    borderRadius: '50%',
    fontSize: '24px',
  },
  userAvatar: {
    padding: '35px 15px',
    borderRadius: '50%',
    fontSize: '24px',
    margin: '15px',
  },
  textRight: {
    textAlign: 'right',
    flexDirection: 'row-reverse',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    outline: 0,
  },

  modalButton: {
    fontSize: '18px',
    padding: '10px 15px',
    marginTop: '30px',
  },
  userAttemptWrapper: {
    margin: '20px 0',
    display: 'flex',
  },
  userAttempt: {
    boxShadow: '0px 5px 14px 1px',
    display: 'inline-block',
    padding: '20px',
    borderRadius: '15px',
  },
  gameContainer: {
    overflowY: 'scroll',
    height: '100%',
  },
  attemptText: {
    marginTop: '10px',
  },
}));

const Game = () => {
  const user = useSelector(state => state.user);
  const socket = useSocket();
  const { game } = useGame();
  const history = useHistory();
  const classes = useStyles();
  const gameContainer = useRef(null);

  const isUserTurn = game && game.turn === user.id;

  const makeAttempt = number => {
    const attempt = {
      gameId: game.id,
      user: user,
      number,
    };
    socket.emit('make-attempt', attempt);
  };

  useEffect(() => {
    return () => {
      socket.emit('page-leave');
    };
  }, [socket]);

  useEffect(() => {
    gameContainer.current.scrollTop = gameContainer.current.scrollHeight;
  }, [game]);

  if (!game.id) {
    return <div>You are not in a game</div>;
  }
  return (
    <>
      <Modal
        open={!!game.winner}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <div className={classes.modal}>
          <Typography variant='h1'>
            You {game.winner === user.id ? 'win!' : 'lose'}
          </Typography>
          <Button
            variant='contained'
            onClick={() => history.push(URL_HOMEPAGE)}
            color='secondary'
            className={classes.modalButton}
          >
            New Game
          </Button>
        </div>
      </Modal>

      <Header />

      <div className={classes.gameContainer} ref={gameContainer}>
        {game.playerTwo !== null && (
          <Chip
            className={classes.startingNumber}
            label={game.startingNumber}
          />
        )}

        {game.attemps.length > 0 &&
          game.attemps.map(attempt => {
            return (
              <div
                // should use classnames library
                className={`${classes.userAttemptWrapper} ${
                  attempt.user.id === user.id ? classes.textRight : ''
                }`}
                key={`${attempt.newValue}_${attempt.user.userId}`}
              >
                <Chip
                  label={attempt.user.username.substring(0, 1).toUpperCase()}
                  className={classes.userAvatar}
                />
                <div className={classes.userAttempt}>
                  <div>
                    <Chip
                      label={attempt.number}
                      className={classes.userChoice}
                    />
                  </div>
                  <div>
                    <Chip
                      label={attempt.text}
                      className={classes.attemptText}
                    />
                  </div>
                  <div>
                    <Chip
                      label={attempt.newValue}
                      className={classes.attemptText}
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {!game.winner && isUserTurn && (
        <div className={classes.buttonWrapper}>
          <Box mr={3}>
            <Button
              variant='contained'
              onClick={() => makeAttempt(-1)}
              color='secondary'
              size='large'
              className={classes.button}
            >
              -1
            </Button>
          </Box>
          <Box mr={3}>
            <Button
              variant='contained'
              onClick={() => makeAttempt(0)}
              color='secondary'
              size='large'
              className={classes.button}
            >
              0
            </Button>
          </Box>

          <Box>
            <Button
              variant='contained'
              onClick={() => makeAttempt(1)}
              color='secondary'
              size='large'
              className={classes.button}
            >
              +1
            </Button>
          </Box>
        </div>
      )}
    </>
  );
};

export default Game;
