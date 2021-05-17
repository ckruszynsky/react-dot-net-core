import React, { FC } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { gray3, gray2 } from '../../../assets/styles';
import { Link } from 'react-router-dom';
import { QuestionData } from '../model';
import { QuestionAuthor } from './QuestionAuthor';
import { TimeAgo } from '../../../components/TimeAgo/TimeAgo';
import { ReactionButtons } from './ReactionButtons';

interface IQuestionProps {
  data: QuestionData;
  showContent?: boolean;
}

export const QuestionItem: FC<IQuestionProps> = ({ data, showContent = true }) => (
  <div
    css={css`
      padding: 10px 0px;
    `}
  >
    <div
      css={css`
        padding: 10px 0px;
        font-size: 1.5em;
      `}
    >
      <Link
        css={css`
          text-decoration: none;
          color: ${gray2};
        `}
        to={`questions/${data.questionId}`}
      >
        {data.title}
      </Link>
    </div>
    {showContent && (
      <div
        css={css`
          padding-bottom: 10px;          
          color: ${gray2};
        `}
      >
        {data.content.length > 50 ? `${data.content.substring(0, 50)}...` : data.content}
      </div>
    )}
    <div
      css={css`
        font-size: .8em;
        font-style: italic;
        color: ${gray3};
      `}
    >
      <QuestionAuthor userId={data.userId} />
      <TimeAgo timestamp={data.created} />
    </div>
    <div>
      <ReactionButtons question={data} />
    </div>
  </div>
);
