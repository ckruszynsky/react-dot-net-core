import { ChangeEvent, FormEvent, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router';
import { QuestionDetailsPage } from './features/questions/QuestionDetailsPage';
import { EditQuestionPage } from './features/questions/EditQuestionPage';
import { fontFamily, fontSize, gray2 } from './assets/styles';
import { Header } from './components/Header/Header';
import { QuestionsPage } from './features/questions/QuestionsPage';
import { PageNotFound } from './features/notFound/PageNotFound';
import { AskQuestionPage } from './features/questions/AskQuestionPage';
import { SearchPage } from './features/search/SearchPage';

/** @jsxRuntime classic */
/** @jsx jsx */
import { css,jsx } from '@emotion/react';



function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();
  const onSearchSubmit = (e: FormEvent<HTMLFormElement>) => {    
    e.preventDefault();
    history.push(`/search?criteria=${searchTerm}`);
    console.log(history);
  };
  
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  return (    
    <div
      css={css`
      font-family: ${fontFamily};
      font-size: ${fontSize};
      color: ${gray2};
    `}
  >      
      <Header onSearchSubmit={onSearchSubmit} onSearchInputChanged={handleSearchInputChange} searchTerm={searchTerm} />     
        <Switch>
          <Redirect from="/home" to="/" />
          <Route
            exact
            path="/"
            component={QuestionsPage}            
          />
          <Route path="/ask" component={AskQuestionPage} />
          <Route exact path="/questions/:questionId" component={QuestionDetailsPage} />
          <Route exact path="/questions/edit/:questionId" component={EditQuestionPage} />   
           <Route path="/search" component={SearchPage} />
          <Route component={PageNotFound} />
        </Switch>      
    </div>    
  );
}

export default App;
