
import { UserLogInReq, UserRegisterReq, UserResetPasswordReq } from 'types';



export const generateQueryString = (params: any): string => {
  const qs = new URLSearchParams(params);
  return `${qs}`.replace(/\+/g, '%20');
}

export interface UserRegisterForm extends UserRegisterReq {
  password2: string
}

export const messagesValidation = {
  name__incorect: 'Names should have at least 3 characters long and not longer than 25 characters',
  email__incorect: 'Invalid e-mail',
  password__incorect: 'The password must be at least 8 characters, not more than 15 characters and must contain at least one digit, one letter and one special character.',
  password2__incorect: 'Passwords do not match.',
  terms__incorect: 'Don\'t accepted terms of service'
}

export const singinFunctionFormValidation = (form: UserLogInReq | UserResetPasswordReq) => {

  let email = false;

  if (
    typeof form.email === 'string' &&
    form.email.indexOf(' ') === -1 &&
    form.email.indexOf('@') !== -1 &&
    form.email.lastIndexOf('@') !== -1 &&
    form.email.lastIndexOf('.') !== -1 &&
    form.email.indexOf('@@') === -1 &&
    form.email.length > 2 &&
    form.email.length < 26 &&
    form.email.match(
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
  ) {
    email = true;
  }

  return { email }
}

export const singupFunctionFormValidation = (form: UserRegisterForm) => {
  let name = false;
  let email = false;
  let password = false;
  let password2 = false;
  let terms = false;
  let correct = false;

  if (
    typeof form.name === 'string' &&
    form.name.match(/^[a-zA-Z]+$/) &&
    form.name.length > 2 &&
    form.name.length < 26
  ) {
    name = true;
  }

  if (
    typeof form.email === 'string' &&
    form.email.indexOf(' ') === -1 &&
    form.email.indexOf('@') !== -1 &&
    form.email.lastIndexOf('@') !== -1 &&
    form.email.lastIndexOf('.') !== -1 &&
    form.email.indexOf('@@') === -1 &&
    form.email.length > 2 &&
    form.email.length < 26 &&
    form.email.match(
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
  ) {
    email = true;
  }

  if (
    typeof form.password === 'string' &&
    form.password.indexOf(' ') === -1 &&
    form.password.length > 7 &&
    form.password.length < 15 &&
    form.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/)
  ) {
    password = true;
  }
  if (
    typeof form.password2 === 'string' &&
    form.password === form.password2
  ) {
    password2 = true;
  }

  if (form.terms) {
    terms = true;
  }

  if (name && email && password && password2 && terms) {
    correct = true;
  }

  return ({ correct, name, email, password, password2, terms })
}