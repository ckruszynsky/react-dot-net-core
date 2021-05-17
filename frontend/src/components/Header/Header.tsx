/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { ChangeEvent, FC, FormEvent } from 'react';
import { Link} from 'react-router-dom';
import { UserIcon } from '../Icons/Icons';
import { fontFamily, fontSize, gray1, gray2, gray5 } from '../../assets/styles';
import logo from '../../logo.svg';

interface HeaderProps{
  onSearchSubmit : (e:FormEvent<HTMLFormElement>) => void;
  onSearchInputChanged: (e:ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
}
export const Header: FC<HeaderProps> = ({ onSearchSubmit,onSearchInputChanged, searchTerm="" }) => {
  return (
    <div
      css={css`
        position: fixed;
        box-sizing: border-box;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #fff;
        border-bottom: 1px solid ${gray5};
        box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
      `}
    >
      <Link
        to="/"
        css={css`
          font-size: 24px;
          font-weight: bold;
          color: ${gray1};
          text-decoration: none;
        `}
      >
        <div css={css` display:flex; align-items: center; justify-content: center;`}>
          <div
            css={css`
              flex-basis: 40%;
            `}
          >
            <img src={logo} alt="logo" height="50" />
          </div>
          <div>
            Q&A
          </div>
        </div>
      </Link>
      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={onSearchInputChanged}
          value={searchTerm}
          css={css`
            box-sizing: border-box;
            font-family: ${fontFamily};
            font-size: ${fontSize};
            padding: 8px 10px;
            border: 1px solid ${gray5};
            border-radius: 3px;
            color: ${gray2};
            background-color: white;
            width: 500px;
            height: 30px;
            :focus {
              outline-color: ${gray5};
            }
          `}
        />
      </form>
      <Link
        to="/signin"
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          padding: 5px 10px;
          background-color: transparent;
          color: ${gray2};
          text-decoration: none;
          cursor: pointer;
          span {
            margin-left: 10px;
          }
          :focus {
            outline-color: ${gray5};
          }
        `}
      >
        <UserIcon />
        <span>Sign In</span>
      </Link>
    </div>
  );
};

