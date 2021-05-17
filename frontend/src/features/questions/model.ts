import { AnswerData } from "../answers/model";

export interface Reaction {
    thumbsUp: number;
    hooray: number;
    heart: number;
    rocket: number;
    eyes: number;
}

export interface QuestionData {
    questionId: string;
    title:string;
    content:string;
    userId:string;
    created: string;
    answers?: AnswerData[];
    reactions:Reaction
}

export interface NewQuestion {
    title:string;
    content: string;
    userId: string;    
}