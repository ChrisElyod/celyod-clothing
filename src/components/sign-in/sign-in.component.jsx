import React from 'react';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { signInwithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.error(e);
    }
    this.setState({ email: '', password: '' })
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  render () {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput label="EMAIL" handleChange={this.handleChange} name="email" type="email" required value={this.state.email} />
          <FormInput label="PASSWORD" handleChange={this.handleChange} name="password" type="password" required value={this.state.password} />
          <div className='buttons'>
            <Button type="submit">SIGN IN</Button>
            <Button onClick={signInwithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;