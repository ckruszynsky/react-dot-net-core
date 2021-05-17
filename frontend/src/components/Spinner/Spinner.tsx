import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

export const Spinner = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-around;
      `}
    >
      <div
        css={css`
          margin: 0 auto;
        `}
      >
        <Loader type="Oval" color="#764ABC" height={250} width={80} />
      </div>
    </div>
  );
};
