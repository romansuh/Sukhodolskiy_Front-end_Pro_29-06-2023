import './App.css';
import './Form.css';
import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {validateData} from "./validation";

const App = () => (
    <div className="App">
        <h1>User registration form</h1>
        <Formik
            initialValues={{name: '', email: '', phone: ''}}
            validate={values => validateData(values)}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({isSubmitting}) => (
                <Form className="Form">
                    <label className="field-label">Name</label>
                    <Field type="text" name="name" placeholder="Joe Doe"/>
                    <ErrorMessage name="name" component="div"/>


                    <label className="field-label">Email</label>
                    <Field type="email" name="email" placeholder="example@email.com"/>
                    <ErrorMessage name="email" component="div"/>


                    <label className="field-label">Phone number</label>
                    <Field type="text" name="phone" placeholder="099111222333"/>
                    <ErrorMessage name="phone" component="div"/>

                    <button className="submit-button" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default App;