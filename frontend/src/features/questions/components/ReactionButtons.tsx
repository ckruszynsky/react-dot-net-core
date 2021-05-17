import { FC } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { ReactionButton } from '../../../assets/styles';
import { QuestionData, Reaction } from '../model';
import { reactionAdded } from '../questionsSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

interface Props {
  question: QuestionData;
}

export const ReactionButtons: FC<Props> = ({ question }) => {
  const dispatch = useAppDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <ReactionButton
        key={name}
        type="button"
        onClick={() => dispatch(reactionAdded({ questionId: question.questionId, reaction: name }))}
      >
        {emoji} {question.reactions[name as keyof Reaction]}
      </ReactionButton>
    );
  });

  return <div>{reactionButtons}</div>;
};
