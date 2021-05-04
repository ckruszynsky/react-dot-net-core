import { PageTitle } from '../PageTitle/PageTitle';
import { FC } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

interface IPageProps {
  title?: string;
}

export const Page: FC<IPageProps> = ({ title,children }) => (
  <div
    css={css`
      margin: 50px auto 20px auto;
      padding: 30px 20px;
      max-width: 600px;
    `}
  >
    {title && <PageTitle>{title}</PageTitle>}
    {children}
  </div>
);
