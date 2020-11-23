import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import EmptyLayout from 'core/layouts/EmptyLayout';
import { useSelector } from 'react-redux';

const AppRoute = ({
  component: Component,
  layout: Layout = EmptyLayout,
  privateRoute,
  ...rest
}) => {
  // just works on page redirects
  const isAuthenticated = !!useSelector(state => state.user.id);

  const renderLayout = props => (
    <Layout>
      <Component {...props} />
    </Layout>
  );

  return (
    <Route
      {...rest}
      render={props => {
        if (privateRoute && isAuthenticated === false) {
          return <Redirect to='/login' />;
        }
        return renderLayout(props);
      }}
    />
  );
};

export default AppRoute;
