import React, { useContext, useReducer, useEffect } from 'react';
import { useSocket } from './SocketProvider';

const GameContext = React.createContext();

export function useGame() {
  return useContext(GameContext);
}

export function GameProvider({ id, children }) {
  const socket = useSocket();
  const [state, setState] = useReducer(
    (currentState, newState) => ({ ...currentState, ...newState }),
    {
      game: { id: null },
    },
  );
  const { game } = state;

  useEffect(() => {
    if (socket == null) return;

    socket.on('game', game => {
      setState({ game });
    });

    return () => {
      socket.off('game');
    };
  }, [socket, game]);

  const value = {
    game: state.game,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
