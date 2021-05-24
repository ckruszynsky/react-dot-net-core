import { nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import { NewQuestion, QuestionData } from './model';

import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/'
});

const responseBody = (response:AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url:string,body:{}) => instance.post(url,body).then(responseBody),
  put: (url:string, body:{}) => instance.put(url,body).then(responseBody),
  delete: (url:string) => instance.delete(url).then(responseBody)
};

export const fetchQuestions = async (showAnsweredQuestions: boolean):Promise<QuestionData[]> => {  
  if (!showAnsweredQuestions) {
    return requests.get('questions/unanswered');
  }
  return requests.get('questions');
};

export const fetchQuestionById = async (questionId: string) => {
  return requests.get(`questions/${questionId}`);
};

export const addNewQuestion = async (newQuestion: NewQuestion) => {
    return requests.post(`questions`, newQuestion);
};

export const UpdateQuestion = async (questionId:string, question: QuestionData) => {
  return requests.put(`questions/${questionId}`,question);
}
