import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Definicja schematu walidacji
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const RegisterPage = () => {
  const handleSubmit = (values) => {
    console.log("Form submitted with values: ", values);
    // Możesz tu wysłać dane do API rejestracji
    // Na przykład:
    // fetch('/api/register', { method: 'POST', body: JSON.stringify(values) });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field
                id="username"
                name="username"
                className="input"
                placeholder="Enter your username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="input"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting} // Wyłączenie przycisku podczas wysyłania formularza
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterPage;
