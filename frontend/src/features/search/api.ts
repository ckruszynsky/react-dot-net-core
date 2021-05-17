import { sub } from "date-fns";
import { QuestionData } from "../questions/model";

const questionsMock: QuestionData[] = [
    {
      questionId: '1',
      title: 'Why should I learn TypeScript?',
      content:
        'TypeScript seems to be getting popular so I wondered whether it is worth my time learning it? What benefits does it give over JavaScript?',
      userId: '1',
      created: sub(new Date(), { minutes: 10 }).toISOString(),
      answers: [
        {
          answerId: 1,
          content: 'To catch problems earlier speeding up your developments',
          userId: '2',
          created: new Date().toISOString(),
        },
        {
          answerId: 2,
          content: 'So, that you can use the JavaScript features of tomorrow,today',
          userId: '3',
          created: new Date().toISOString(),
        },
      ],
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    },
    {
      questionId: '2',
      title: 'Which state management tool should I use?',
      content:
        'There seem to be a fair few state management tools around for React - React, Unstated, ... Which one should I use?',
      userId: '0',
      created: sub(new Date(), { minutes: 5 }).toISOString(),
      answers: [],
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    },
    {
      questionId: '3',
      title: 'What is the best UI Library to use with React?',
      content:
        'Considering all of the different libraries available for UI... Which one should I use?',
      userId: '2',
      created: sub(new Date(), { minutes: 1 }).toISOString(),
      answers: [],
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    },
  ];

  const wait = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  
  export const search = async (searchTerm:string) => {
    await wait(1000);
    return questionsMock.filter(
        (q) => q.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 || 
        q.content.toLowerCase().indexOf(searchTerm.toLowerCase()) >=0 );    
  };