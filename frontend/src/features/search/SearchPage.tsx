/** @jsxRuntime classic */
/** @jsx jsx */
import { css,jsx } from '@emotion/react';
import { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { Page } from '../../components/Page/Page';
import { Spinner } from '../../components/Spinner/Spinner';
import { QuestionList } from '../questions/components/QuestionsList';
import { searchAsync, selectSearchResults, clearSearch } from './searchSlice';

export const SearchPage: FC<RouteComponentProps> = ({ location }) => {
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('criteria') || '';
  const dispatch = useAppDispatch();
  const status = useAppSelector((state: RootState) => state.search.status);
  const searchResults = useAppSelector(selectSearchResults);

  useEffect(() => {
    dispatch(searchAsync(searchTerm));
    return() => {
        dispatch(clearSearch)
    }
  }, [dispatch, searchTerm]);

  return (
    <Page title="Search Results">
      {searchTerm && (
        <p
          css={css`
            font-size: 1em;
            font-style: italic;
            margin-top: 0px;
          `}
        >
          for "{searchTerm}"
        </p>
      )}
      {status === 'idle' && searchResults && <QuestionList questions={searchResults} />}
      {status === 'loading' && <Spinner />}
    </Page>
  );
};
