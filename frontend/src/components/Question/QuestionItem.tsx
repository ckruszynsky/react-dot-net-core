import { FC } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { QuestionData } from '../../models/QuestionData';
import { gray3, gray2 } from '../../assets/styles';
import { Link } from 'react-router-dom';

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
        font-size: 19px;
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
          font-size: 15px;
          color: ${gray2};
        `}
      >
        {data.content.length > 50
          ? `${data.content.substring(0, 50)}...`
          : data.content}
      </div>
    )}
    <div
      css={css`
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
      `}
    >
      {`Asked by ${data.userName} on ${data.created.toLocaleDateString()}
     ${data.created.toLocaleTimeString()}`}
    </div>
  </div>
);
