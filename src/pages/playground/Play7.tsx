import {
  Field, Form,
  Formik
} from 'formik';
import { FC } from 'react';

interface MyFormValues {
  firstName: string;
}

const Play7: FC = () => {
  const initialValues: MyFormValues = { firstName: '' };
  return (
    <div>
      <h1>My Example</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default Play7;
