import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { actions as userActions } from 'core/ducks/user';
import { URL_HOMEPAGE } from 'core/utils/constants/routes';

const useStyles = makeStyles(() => ({
  textField: {
    width: '100%',
    marginBottom: '30px',
  },
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitHandler = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get('username');

    dispatch({ type: userActions.SET_USER, payload: username });
    history.push(URL_HOMEPAGE);

    return false;
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <form className={classes.form} onSubmit={onSubmitHandler}>
          <TextField
            className={classes.textField}
            label='Username'
            name='username'
            type='text'
            variant='outlined'
            required
          />

          <Button
            className={classes.signInButton}
            color='secondary'
            fullWidth
            size='large'
            type='submit'
            variant='contained'
          >
            Continue
          </Button>
        </form>
      </Grid>
    </div>
  );
};

export default Login;
