/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FC, lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { SearchPage } from './pages/SearchPage';
import { SignInPage } from './pages/SignInPage';
import { PageNotFound } from './pages/PageNotFound';
import HomePage from './pages/HomePage';
import { HeaderWithRouter as Header } from './components/Header/Header';
import { fontFamily, fontSize, gray2 } from './assets/styles';
import { QuestionPage } from './pages/QuestionPage';

const AskPage = lazy(() => import('./pages/AskPage'));

const store = configureStore();

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div
          css={css`
            font-family: ${fontFamily};
            font-size: ${fontSize};
            color: ${gray2};
          `}
        >
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/ask">
              <Suspense
                fallback={
                  <div
                    css={css`
                      margin-top: 100px;
                      text-align: center;
                    `}
                  >
                    Loading....
                  </div>
                }
              >
                <AskPage />
              </Suspense>
            </Route>
            <Route path="/signin" component={SignInPage} />
            <Route path="/questions/:questionId" component={QuestionPage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
