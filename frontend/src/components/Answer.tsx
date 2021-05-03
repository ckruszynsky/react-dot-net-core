import { FC } from 'react';
import { AnswerData } from '../api/Answers';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { gray3 } from '../styles';

interface IAnswerProps {
  data: AnswerData;
}

export const Answer: FC<IAnswerProps> = ({ data }) => (
  <div
    css={css`
      padding: 10px 0px;
    `}
  >
    <div
      css={css`
        padding: 10px 0px;
        font-size: 13px;
      `}
    >
      {data.content}
    </div>
    <div
      css={css`
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
      `}
    >
      {`Answered by ${data.userName} on
    ${data.created.toLocaleDateString()}
    ${data.created.toLocaleTimeString()}`}
    </div>
  </div>
);
