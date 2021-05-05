export interface AnswerData {
  answerId: number;
  content: string;
  userName: string;
  created: Date;
}

export interface PostAnswerData {
  questionId: number;
  content: string;
  userName: string;
  created: Date;
}
