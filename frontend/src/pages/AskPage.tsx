import React from 'react';
import { Page } from './Page';
import { Form } from '../components/Form';
import { Field } from '../components/Field';

export const AskPage = () => (
  <Page title="Ask a question">
    <Form submitCaption="Submit Your Question">
      <Field name="title" label="Title" />
      <Field name="content" label="Content" type="TextArea" />
    </Form>
  </Page>
);
export default AskPage;
