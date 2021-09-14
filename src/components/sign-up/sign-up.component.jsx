import React from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { createUserWithEmailAndPassword, getAuth, updateProfile } from '@firebase/auth';
import { createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return;
    }

    try {
      const auth = getAuth();
      let { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, {
        displayName
      })

      await createUserProfileDocument(user);

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

    } catch (e) {
      console.error(e);
    }
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <Button type='submit'> SIGN UP </Button>
        </form>
      </div>
    )
  }
}

export default SignUp;