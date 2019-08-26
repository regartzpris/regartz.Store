import React, { Component } from 'react';


import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import '../sign-in/sign-in.styles.scss'


class SignIn extends Component {
    constructor(props) {
        super(props);


        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });

        } catch (error) {
            console.log(error)

        }
    };



    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
        // console.log(this.state.email);
        // console.log(this.state.password);

    }




    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} required
                        label="email" />


                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} required
                        label="password" />


                    <div className='buttons'>
                        <CustomButton type='submit' > Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {''}Sign in with Google {''}
                        </CustomButton>
                    </div>

                </form>
            </div>

        )
    }
}


export default SignIn;