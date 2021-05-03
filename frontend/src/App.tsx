/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, {FC} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { AskPage } from './pages/AskPage';
import { SearchPage } from './pages/SearchPage';
import { SignInPage } from './pages/SignInPage';
import {PageNotFound} from './pages/PageNotFound';
import { HomePage } from './pages/HomePage';

import { Header } from './components/Header';
import { fontFamily, fontSize, gray2 } from './styles';
import { QuestionPage } from './pages/QuestionPage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header appName="Q & A" />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/ask" component={AskPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/questions/:questionId" component={QuestionPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
