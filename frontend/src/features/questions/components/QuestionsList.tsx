/** @jsxRuntime classic */
/** @jsx jsx */
import { css,jsx } from '@emotion/react';
import { gray5, accent2 } from '../../../assets/styles';
import { FC, useEffect, useState } from 'react';

import { QuestionData } from '../model';
import { QuestionItem } from './QuestionListItem';

interface QuestionListProps {
   questions: QuestionData[];
}
export const QuestionList: FC<QuestionListProps> = ({ questions }) => {
  const [orderedQuestions,setOrderedQuestions] = useState([] as QuestionData[]);
  useEffect(() => {    
    const sortedQuestions = questions.slice().sort((a, b) => b.created.localeCompare(a.created))
    setOrderedQuestions(sortedQuestions);    
  }, [questions])
  

  const renderedQuestions = orderedQuestions.map((question) => {
    return (
      <li 
      css={css`
      border-top: 1px solid ${gray5};
      margin:10px;      
      :first-of-type {
        border-top: none;
      }
    `}
      key={question.title}>
        <QuestionItem data={question} />
      </li>
    );
  });

  return (                
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
  >{renderedQuestions}</ul>
  )
};
