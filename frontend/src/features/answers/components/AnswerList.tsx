import React, { FC } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { AnswerData } from '../model';
import { gray5 } from '../../../assets/styles';
import { AnswerListItem } from './AnswerListItem';


interface IAnswerListProps {
  data: AnswerData[];
}

export const AnswerList: FC<IAnswerListProps> = ({ data }) => (
  <ul
    css={css`
      list-style: none;
      margin: 10px 0 0 0;
      padding: 0;
    `}
  >
    {data.map((answer) => (
      <li
        css={css`
          border-top: 1px solid ${gray5};
        `}
        key={answer.answerId}
      >
        <AnswerListItem data={answer} />
      </li>
    ))}
  </ul>
);
