import { FC } from "react";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";

interface Props {
    userId:string
};

export const AnswerAuthor: FC<Props> = ({userId}) => {
    const author = useAppSelector(
        (state:RootState) => state.users.users.find(u=> u.id === userId)
    );

    return <span>Anserwered by {author ? author.name : 'Unknown author'}</span>    
}