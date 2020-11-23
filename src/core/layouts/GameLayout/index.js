import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  paper: {
    position: 'relative',
    maxWidth: '860px',
    width: '100%',
    margin: '0 20px',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  children: {
    width: '100%',
    height: '100%',
    padding: '80px 20px 120px',
  },
}));
const GameLayout = props => {
  const classes = useStyles();

  const { children } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.children}>{children}</div>
      </Paper>
    </div>
  );
};

GameLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameLayout;
