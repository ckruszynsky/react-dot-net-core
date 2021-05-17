import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Field } from '../../components/Field/Field';
import { Form, minLength, required, Values, SubmitResult } from '../../components/Form/Form';
import { Page } from '../../components/Page/Page';
import { addNewQuestionAsync,selectCurrentQuestion, clearCurrentQuestion} from './questionsSlice';

export const AskQuestionPage = () => {
  const dispatch = useAppDispatch();
  const postedQuestion = useAppSelector(selectCurrentQuestion);  

  useEffect(() => {    
    return () => {
      dispatch(clearCurrentQuestion())
    }
  }, [dispatch])
  const handleSubmit = (values: Values) => {
    dispatch(
      addNewQuestionAsync({
        title: values.title,
        content: values.content,
        userId: '1',
      }),
    );
  };

  let submitResult: SubmitResult | undefined;
    if(postedQuestion){
        submitResult = { success: postedQuestion !== undefined}
    }
  return (
    <Page title="Ask a Question">
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
        <Field name="title" label="Title" />
        <Field name="content" label="Content" type="TextArea" />
      </Form>
    </Page>
  );
};
