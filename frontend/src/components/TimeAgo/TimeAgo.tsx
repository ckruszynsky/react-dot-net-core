import { formatDistanceToNow, parseISO } from 'date-fns';
import React, { FC } from 'react';

interface Props {
  timestamp: string;
}

export const TimeAgo: FC<Props> = ({ timestamp }) => {
  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};
