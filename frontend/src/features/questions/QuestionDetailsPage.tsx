import React, { FC, Fragment, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { AccentButton, gray6 } from '../../assets/styles';
import { Page } from '../../components/Page/Page';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Spinner } from '../../components/Spinner/Spinner';
import { QuestionAuthor } from './components/QuestionAuthor';
import { fetchQuestionByIdAsync, selectCurrentQuestion } from './questionsSlice';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { TimeAgo } from '../../components/TimeAgo/TimeAgo';
import { AnswerForm } from '../answers/components/AnswerForm';
import { AnswerList } from '../answers/components/AnswerList';

interface IQuestionDetailsPageProps {
  questionId: string;
}

export const QuestionDetailsPage: FC<RouteComponentProps<IQuestionDetailsPageProps>> = ({
  match,
}) => {
  const { questionId } = match.params;
  const question = useAppSelector(selectCurrentQuestion);
  const status = useAppSelector((state: RootState) => state.questions.status);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchQuestionByIdAsync(questionId));
  }, [dispatch, questionId]);

  return (
    <Page>
      <div
        css={css`
          background-color: white;
          padding: 15px 20px 20px 20px;
          border-radius: 4px;
          border: 1px solid ${gray6};
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        {status === 'loading' && <Spinner />}
        {question && status === 'idle' && (
          <Fragment>
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: space-between;
              `}
            >
              <PageTitle>{question.title}</PageTitle>
              <AccentButton>Edit</AccentButton>
            </div>

            <p
              css={css`
                margin-top: 0px;
                background: white;
              `}
            >
              {question.content}
            </p>
            <QuestionAuthor userId={question.userId} />
            <TimeAgo timestamp={question.created} />
            <Link to={`/questions/edit/${questionId}`}></Link>
            {question.answers && <AnswerList data={question.answers} />}
            <AnswerForm />
          </Fragment>
        )}
      </div>
      {!question && status === 'idle' && <h2>Question not found!</h2>}
    </Page>
  );
};
