import { FC } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { AnswerData } from '../model';
import { AnswerAuthor } from './AnswerAuthor';
import { TimeAgo } from '../../../components/TimeAgo/TimeAgo';
import { gray3 } from '../../../assets/styles';


interface IAnswerProps {
  data: AnswerData;
}

export const AnswerListItem: FC<IAnswerProps> = ({ data }) => (
  <div
    css={css`
      padding: 10px 0px;
    `}
  >
    <div
      css={css`
        padding: 10px 0px;        
      `}
    >
      {data.content}
    </div>
    <div
      css={css`        
        font-style: italic;
        color: ${gray3};
      `}
    >
        <AnswerAuthor userId={data.userId} />
      <TimeAgo timestamp={data.created} />    
    </div>
  </div>
);
