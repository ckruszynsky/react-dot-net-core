import { QuestionData } from './Question/QuestionData';

interface QuestionsState {
    readonly loading:boolean;
    readonly unanswered:QuestionData[] | null;
    readonly postedResult?:QuestionData;
}

const initialQuestionState: QuestionsState = {
    loading: false,
    unanswered: null
};

export interface AppState {
    readonly questions: QuestionsState;
}