import { Field, Form, Formik } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import styles from './contactform.module.css';

interface MyFormValues {
  fullName: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const initialValues: MyFormValues = { fullName: '', email: '', message: '' };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        toast.success('Form have been successfully sent.');
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <label
            htmlFor='fullName'
            className={styles.label}
          >
            Full name
          </label>
          <Field
            id='fullname'
            name='fullName'
            placeholder='Full name'
            className={styles.input}
          />
          {errors.fullName && touched.fullName ? <p className={styles.error}>{errors.fullName}</p> : null}
          <label
            htmlFor='email'
            className={styles.label}
          >
            Email
          </label>
          <Field
            id='email'
            name='email'
            placeholder='Email'
            className={styles.input}
          />
          {errors.email && touched.email ? <p className={styles.error}>{errors.email}</p> : null}
          <label
            htmlFor='message'
            className={styles.label}
          >
            Message
          </label>
          <Field
            as='textarea'
            id='message'
            name='message'
            placeholder='Type your message'
            className={styles.textarea}
          />
          <Button
            title='Submit'
            type='submit'
          />
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;
