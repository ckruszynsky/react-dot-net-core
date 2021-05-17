/** @jsxRuntime classic */
/** @jsx jsx */
import { css,jsx } from '@emotion/react';
import { FC, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { PrimaryButton } from '../../assets/styles';
import { Page } from '../../components/Page/Page';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Spinner } from '../../components/Spinner/Spinner';
import { QuestionList } from './components/QuestionsList';
import { fetchQuestionsAsync, selectAllQuestions } from './questionsSlice';

interface QuestionPageProps {
  showAnsweredQuestions?: boolean;
}
export const QuestionsPage: FC<QuestionPageProps> = ({ showAnsweredQuestions = false }) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const questions = useAppSelector(selectAllQuestions);
  const status = useAppSelector((state: RootState) => state.questions.status);

  useEffect(() => {
    dispatch(fetchQuestionsAsync(showAnsweredQuestions));
  }, [dispatch, showAnsweredQuestions]);
  
  const handleAskQuestionClicked = () => {
    history.push('/ask');
  }
  return (
    <Page>
    <div
    css={css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  >
    <PageTitle>Unanswered Questions</PageTitle>
    <PrimaryButton onClick={handleAskQuestionClicked}>
      Ask a question
    </PrimaryButton>
  </div>
      {status === 'loading' && (<Spinner />)}
      {questions && status === 'idle' && <QuestionList questions={questions} />}
    </Page>
  );
};
