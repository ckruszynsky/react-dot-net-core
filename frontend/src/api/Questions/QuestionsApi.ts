import { QuestionData } from "./QuestionData";
import { questionsMock} from '../mocks/questions';

const wait = (ms:number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve,ms));
}

export const getUnansweredQuestions = async () : Promise<QuestionData[]> => {
    await wait(500);
    return questionsMock.filter(q => q.answers.length === 0);
}

export const getQuestion = async (questionId:number):Promise<QuestionData | null> => {
    await wait(500);
    const results = questionsMock.filter(q => q.questionId === questionId);
    return results.length === 0 ? null : results[0];
}