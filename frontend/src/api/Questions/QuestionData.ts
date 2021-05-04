import { AnswerData } from "../Answers/AnswerData";

export interface QuestionData {
    questionId: number;
    title:string;
    content:string;
    userName:string;
    created: Date;
    answers: AnswerData[]
}

export interface PostQuestionData {
    title:string;
    content: string;
    userName: string;
    created: Date;
}