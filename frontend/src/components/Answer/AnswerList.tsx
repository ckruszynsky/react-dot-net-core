import { FC } from 'react';
import { AnswerData } from '../../services/Answers';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { AnswerItem } from './AnswerItem';
import { gray5 } from '../../assets/styles';

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
        <AnswerItem data={answer} />
      </li>
    ))}
  </ul>
);
