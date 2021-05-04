/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useEffect, useState, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PrimaryButton } from '../assets/styles';
import { QuestionList } from '../components/Question/QuestionList';
import { getUnansweredQuestions, QuestionData } from '../services/Questions';
import { Page } from '../components/Page/Page';
import { PageTitle } from '../components/PageTitle/PageTitle';

export const HomePage: FC<RouteComponentProps> = ({ history }) => {
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);
  const [questionsLoading, setQuestionsLoading] = useState(true);

  useEffect(() => {
    const fetchUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
    };
    fetchUnansweredQuestions();
  }, []);

  const handleAskQuestionClick = () => {
    history.push('/ask');
  };

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
        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a question
        </PrimaryButton>
      </div>
      {questionsLoading ? (
        <div
          css={css`
            font-size: 16px;
            font-style: italic;
          `}
        >
          Loading...
        </div>
      ) : (
        <QuestionList data={questions || []} />
      )}
    </Page>
  );
};
