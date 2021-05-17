import { FC, useEffect } from 'react';
import { fetchQuestionByIdAsync, questionUpdated, selectCurrentQuestion } from './questionsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RouteComponentProps } from 'react-router';
import { required, minLength, Form, Values, SubmitResult } from '../../components/Form/Form';
import { Page } from '../../components/Page/Page';
import { Field } from '../../components/Field/Field';

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
      dispatch(
        questionUpdated({
          questionId: question.questionId,
          created: question.created,
          title: values.title,
          content: values.content,
          userId: '1',
          reactions: question.reactions,
        }),
      );
      submitResult = { success: true };
      history.push(`/questions/${questionId}`);
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
        <Field name="title" label="Title" initialValue={question?.title} />
        <Field name="content" label="Content" type="TextArea" initialValue={question?.content} />
      </Form>
      )}
      
    </Page>
  );
};

