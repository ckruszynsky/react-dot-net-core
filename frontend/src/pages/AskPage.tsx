import React from 'react';
import { Page } from './Page';
import { Form, required, minLength, Values, SubmitResult } from '../components/Form';
import { Field } from '../components/Field';
import { postQuestion } from '../api/Questions';

export const AskPage = () => {
  const handleSubmit = async (values:Values):Promise<SubmitResult> => {
    const question = await postQuestion({
      title: values.title,
      content: values.content,
      userName: 'Fred',
      created: new Date()
    });
    return {success: question ? true: false, errors: {}};
  }
  return (
    <Page title="Ask a question">
      <Form        
        submitCaption="Submit Your Question"
        validationRules={{
          title: [{ validator: required }, { validator: minLength, arg: 10 }],
          content: [{ validator: required }, { validator: minLength, arg: 50 }],
        }}
        onSubmit={handleSubmit}
        failureMessage="There was a problem saving your question"
        successMessage="Your question was successfully submitted"
      >
        <Field name="title" label="Title" />
        <Field name="content" label="Content" type="TextArea" />
      </Form>
    </Page>
  );
};
export default AskPage;
