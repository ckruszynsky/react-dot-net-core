import { FC, useEffect } from 'react';
import { clearCurrentQuestion, fetchQuestionByIdAsync, selectCurrentQuestion, updateQuestionAsync } from './questionsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RouteComponentProps } from 'react-router';
import { Form } from '../../components/Form/Form';
import { SubmitResult } from "../../components/Form/SubmitResult";
import { Values } from "../../components/Form/Values";
import { Page } from '../../components/Page/Page';
import { Field } from '../../components/Field/Field';
import { minLength, required } from '../../components/Form/Validator';

interface IEditQuestionFormProps {
  questionId: string;
}

export const EditQuestionPage: FC<RouteComponentProps<IEditQuestionFormProps>> = ({ match,history }) => {
  const { questionId } = match.params;
  const question = useAppSelector(selectCurrentQuestion);
  const dispatch = useAppDispatch();
  let submitResult: SubmitResult | undefined;

  useEffect(() => {
    dispatch(fetchQuestionByIdAsync(questionId));    
  }, [dispatch, questionId]);

  const handleSubmit = (values: Values) => {
    if (question) {
     return dispatch(
        updateQuestionAsync({
          questionId: question.questionId,
          created: question.created,
          title: values.title,
          content: values.content,
          userId: '1',
          reactions: question.reactions,
        })
      ).then( () => {
        
        dispatch(clearCurrentQuestion())
        history.push(`/questions/${questionId}`);    
        return { success: true };       
      });                        
    }
  };
  return (
    <Page title="Edit Your Question">
      {question && (
        <Form
        submitCaption="Submit Your Question"
        validationRules={{
          title: [{ validator: required }, { validator: minLength, arg: 10 }],
          content: [{ validator: required }, { validator: minLength, arg: 50 }],
        }}
        onSubmit={handleSubmit}
        submitResult={submitResult}
        failureMessage="There was a problem saving your question"
        successMessage="Your question was successfully submitted"
      >
        <Field name="title" label="Title" initialValue={question.title} />
        <Field name="content" label="Content" type="TextArea" initialValue={question.content} />
      </Form>
      )}
      
    </Page>
  );
};

