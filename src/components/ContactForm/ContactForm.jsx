// import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactForm = () => {
  return (
    <>
      <Formik>
        <Form>
          <Field></Field>
          <ErrorMessage></ErrorMessage>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
