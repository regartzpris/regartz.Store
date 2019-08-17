import React, { Component } from 'react';


import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import '../sign-in/sign-in.styles.scss'


class SignIn extends Component {
    constructor(props) {
        super(props);


        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
        console.log('has been submit');
        

    }



    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
        console.log(this.state.email);
        console.log(this.state.password);

    }




    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} required 
                    label="email"/>
                   

                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} required
                    label="password" />
                    

                    <CustomButton type='submit' > Sign in</CustomButton>

                </form>
            </div>

        )
    }
}


export default SignIn;