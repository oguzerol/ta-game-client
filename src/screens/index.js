import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import GameLayout from 'core/layouts/GameLayout';
import AppRoute from 'core/utils/route';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'core/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

import Loading from 'components/Loading';
import NotFound from 'screens/NotFound';
import Login from 'screens/Login';

import { URL_HOMEPAGE, URL_LOGIN, URL_GAME } from 'core/utils/constants/routes';
import { SocketProvider } from 'core/contexts/SocketProvider';
import { GameProvider } from 'core/contexts/GameProvider';
import EmptyLayout from 'core/layouts/EmptyLayout';

const HomePage = lazy(() => import('./HomePage'));
const Game = lazy(() => import('./Game'));

export default function App() {
  const themeMode = useSelector(state => state.visual.theme);

  return (
    <Router>
      <SocketProvider>
        <GameProvider>
          <ThemeProvider theme={theme(themeMode)}>
            <CssBaseline />
            <Suspense fallback={<Loading />}>
              <Switch>
                <AppRoute
                  exact
                  path={URL_HOMEPAGE}
                  component={HomePage}
                  layout={EmptyLayout}
                  privateRoute
                />
                <AppRoute
                  exact
                  path={URL_LOGIN}
                  component={Login}
                  layout={EmptyLayout}
                />
                <AppRoute
                  exact
                  path={URL_GAME}
                  component={Game}
                  layout={GameLayout}
                  privateRoute
                />
                <AppRoute path={`*`} component={NotFound} />
              </Switch>
            </Suspense>
          </ThemeProvider>
        </GameProvider>
      </SocketProvider>
    </Router>
  );
}
