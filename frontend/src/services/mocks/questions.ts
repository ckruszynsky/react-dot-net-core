import { QuestionData } from "../../store/Question/QuestionData";

export const questionsMock: QuestionData[] = [
    {
        questionId: 1,
        title: 'Why should I learn TypeScript?',
        content: 'TypeScript seems to be getting popular so I wondered whether it is worth my time learning it? What benefits does it give over JavaScript?',
        userName: 'Bob',
        created: new Date(),
        answers: [
            {
                 answerId: 1,
                 content: 'To catch problems earlier speeding up your developments',
                 userName: 'Jane',
                 created: new Date(),
            },
            {
                answerId: 2,
                content:
                'So, that you can use the JavaScript features of tomorrow,today',
                userName: 'Fred',
                created: new Date(),
            },
        ],
    },
    {
        questionId: 2,
        title: 'Which state management tool should I use?',
        content:'There seem to be a fair few state management tools around for React - React, Unstated, ... Which one should I use?',
        userName: 'Bob',
        created: new Date(),
        answers:[]
    },
    {
        questionId: 3,
        title: 'What is the best UI Library to use with React?',
        content:'Considering all of the different libraries available for UI... Which one should I use?',
        userName: 'Bob',
        created: new Date(),
        answers:[]
    }
]