import React from 'react';
import { Field } from '../../../components/Field/Field';
import { Form } from '../../../components/Form/Form';

export const AnswerForm = () => {
  return (
    <Form
      submitCaption="Submit your Answer"
      failureMessage="There was a issue submitting your answer"
      successMessage="Your answer has been submitted"
      onSubmit={() => console.log('Submitting Answer')}
    >
      <Field name="content" label="Your Answer" type="TextArea" />
    </Form>
  );
};
