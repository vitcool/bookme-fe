import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from 'components/common/Input';
import Button from 'components/common/Button';
import Error from 'components/common/Error';
import Checkbox from 'components/common/Checkbox';
import Logo from 'components/common/Logo';

import { LOGIN } from 'constants/routes';

import {
  getSignUpError,
  getIsSignUpPending,
} from 'redux/modules/auth/selectors';
import { SIGNUP_REQUEST, SIGNUP_DATA_RESET } from 'redux/modules/auth/actions';

import styles from './index.module.scss';

interface IForm {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  isTasker: boolean;
}

const INITIAL_VALUES: IForm = {
  firstName: '',
  secondName: '',
  email: '',
  password: '',
  isTasker: false,
};

const KEYS = {
  EMAIL: 'email',
  PASSWORD: 'password',
  FIRST_NAME: 'firstName',
  SECOND_NAME: 'secondName',
  IS_TASKER: 'isTasker',
};

const validationSchema = Yup.object().shape({
  [KEYS.EMAIL]: Yup.string()
    .email('This email is not valid')
    .required('This field is required'),
  [KEYS.PASSWORD]: Yup.string().required('This field is required'),
  [KEYS.FIRST_NAME]: Yup.string().required('This field is required'),
  [KEYS.SECOND_NAME]: Yup.string().required('This field is required'),
  [KEYS.IS_TASKER]: Yup.boolean(),
});

const SignUpForm: FunctionComponent = () => {
  const dispatch = useDispatch();
  const signupError = useSelector(getSignUpError);
  const isSignupPending = useSelector(getIsSignUpPending);

  useEffect(() => {
    dispatch(SIGNUP_DATA_RESET({}));
  }, [dispatch]);

  const handleFormSubmit = ({
    firstName,
    secondName,
    email,
    password,
    isTasker,
  }: IForm) => {
    dispatch(
      SIGNUP_REQUEST({ firstName, secondName, email, password, isTasker })
    );
  };

  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, errors, touched }) => {
          const firstNameError: string | undefined = errors.firstName;
          const firstNameTouched: boolean | undefined = touched.firstName;
          const secondNameError: string | undefined = errors.secondName;
          const secondNameTouched: boolean | undefined = touched.secondName;

          const emailError: string | undefined = errors.email;
          const emailTouched: boolean | undefined = touched.email;
          const passwordError: string | undefined = errors.password;
          const passwordTouched: boolean | undefined = touched.password;

          return (
            <Form>
              <div className={styles.header}>
                <Logo />
                <p className={styles.signInText}>
                  Please create a new account here
                </p>
              </div>
              <Input
                placeholder="First name"
                value={values.firstName}
                onChange={handleChange}
                error={firstNameError}
                touched={firstNameTouched}
                name={KEYS.FIRST_NAME}
              />
              <Input
                placeholder="Second name"
                value={values.secondName}
                onChange={handleChange}
                error={secondNameError}
                touched={secondNameTouched}
                name={KEYS.SECOND_NAME}
              />
              <Input
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                error={emailError}
                touched={emailTouched}
                name={KEYS.EMAIL}
              />
              <Input
                placeholder="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                error={passwordError}
                touched={passwordTouched}
                name={KEYS.PASSWORD}
              />
              <Checkbox
                label="I would like to perform tasks"
                checked={values.isTasker}
                onChange={handleChange}
                name={KEYS.IS_TASKER}
              />
              <div className={styles.gotoLoginText}>
                Already have an account? <Link to={LOGIN}>Sign in</Link>
              </div>
              <Button
                type="submit"
                disabled={isSignupPending}
                pending={isSignupPending}
              >
                Sign up
              </Button>
              {signupError && <Error text={'Please try again'} />}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUpForm;
