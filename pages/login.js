import React from 'react'
import TextInput from '../components/textinput'
import PasswordInput from '../components/passwordInput'
import styles from './styles/login.module.scss'
import utilStyles from '../styles/util.module.scss'
import { auth } from '../config/firebase.ts';
import Router from 'next/router'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: ''
    }

    this.setEmail = this.setEmail.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.login = this.login.bind(this)
  }

  setEmail(event){
    this.setState({email : event.target.value})
  }

  setPassword(event){
    this.setState({password: event.target.value})
  }
  login () {
    console.log("logged in!");
    console.info("Logged user in");

    return auth
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((response) => {
            Router.push('/dashboard');
        setUser(response.user);

        return response.user;
        })
        .catch((error) => {
        return { error };
        });
  }
  render() {
    return (
      <div className={styles.box}>
      <div className={styles.form}>
        <p className={utilStyles.headingXl}> LOGIN TO CONTINUE YOUR FITNESS JOURNEY</p>
       <div className={styles.innerBox}>
        <TextInput 
          labelName={"Email"}
          type={"text"}
          value={this.state.email}
          onChange={this.setEmail}
        />

        <PasswordInput 
          labelName={"Password"}
          type={"text"}
          value={this.state.password}
          onChange={this.setPassword}
        />
        </div>
        <div>
        <button className={utilStyles.button} onClick={this.login}>
          <p className={utilStyles.text}>
            LOG IN
          </p>
        </button>
        </div>
       
      </div>
      </div>
    )
  }
}

export default Login