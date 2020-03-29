import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import Input from 'components/common/Input';
import Button from 'components/common/Button';
import Error from 'components/common/Error';

import { getLoginError, getIsLoginPending } from 'redux/modules/auth/selectors';
import { LOGIN_REQUEST, LOGIN_DATA_RESET } from 'redux/modules/auth/actions';

import { SIGN_UP } from 'constants/routes';

import styles from './index.module.scss';
interface IForm {
  email: string;
  password: string;
}

const KEYS = {
  EMAIL: 'email',
  PASSWORD: 'password',
};

const INITIAL_VALUES: IForm = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  [KEYS.EMAIL]: Yup.string()
    .email('This email is not valid')
    .required('This field is required'),
  [KEYS.PASSWORD]: Yup.string().required('This field is required'),
});

const LoginForm: FunctionComponent = () => {
  const loginError = useSelector(getLoginError);
  const isLoginPending = useSelector(getIsLoginPending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LOGIN_DATA_RESET({}));
  }, [dispatch]);

  const handleFormSubmit = ({ email, password }: IForm) => {
    dispatch(LOGIN_REQUEST({ email, password }));
  };

  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, errors, touched }) => {
          const emailError: string | undefined = errors.email;
          const emailTouched: boolean | undefined = touched.email;
          const passwordError: string | undefined = errors.email;
          const passwordTouched: boolean | undefined = touched.email;

          return (
            <Form>
              <Input
                label="Email"
                value={values.email}
                onChange={handleChange}
                error={emailError}
                touched={emailTouched}
                name={KEYS.EMAIL}
              />
              <Input
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                error={passwordError}
                touched={passwordTouched}
                name={KEYS.PASSWORD}
              />
              <Button
                type="submit"
                disabled={isLoginPending}
                pending={isLoginPending}
              >
                Log in
              </Button>
              {loginError && (
                <Error
                  text={'Login ar password is incorrect.Please try again'}
                />
              )}
              <div className={styles.gotoSignupText}>
                <Link to={SIGN_UP}>sign up</Link>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
