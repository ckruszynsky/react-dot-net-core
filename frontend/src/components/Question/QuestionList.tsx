/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FC } from 'react';
import { gray5, accent2 } from '../../assets/styles';
import { QuestionData } from '../../store/Question/QuestionData';
import {QuestionItem} from './QuestionItem';

interface IQuestionListProps {
  data: QuestionData[];
  renderItem?: (item: QuestionData) => JSX.Element;
}

export const QuestionList: FC<IQuestionListProps> = ({ data, renderItem }) => (
  <ul
    css={css`
      list-style: none;
      margin: 10px 0 0 0;
      padding: 0px 20px;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 3px solid ${accent2};
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
    `}    
  >
    {data.map(question => (
    <li
      key={question.questionId}
      css={css`
        border-top: 1px solid ${gray5};
        :first-of-type {
          border-top: none;
        }
      `}
    >
        {renderItem ? renderItem(question) : <QuestionItem data={question} />}
    </li>
    ))}
  </ul>
);