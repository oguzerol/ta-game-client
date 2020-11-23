import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Paper } from '@material-ui/core';

import Header from './Header';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'relative',
    maxWidth: '860px',
    width: '100%',
    height: '80vh',
    margin: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const EmptyLayout = props => {
  const classes = useStyles();

  const { children } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Header />
        <div className={classes.children}>{children}</div>
      </Paper>
    </div>
  );
};

EmptyLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EmptyLayout;
