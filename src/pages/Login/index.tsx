import React,  { Component } from 'react'
import Header from '../../components/Header'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

//const Login: React.FC = () => {
export class Login extends Component {
  constructor (props: any) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
  }
  render() {
  return (
    <>
      <Header/>
      <section className="login">
        <section className="login-fields">
        <TextField
          id = "email"
          label = "Email"
          variant = "outlined" />
        <TextField
          type = "password"
          id = "outlined-basic"
          label = "Senha"
          variant = "outlined" />
          <a href="#" className="recover-password">
            Esqueci minha senha
          </a>
          <Button
            className="btn-login"
            variant="outlined"
            color="primary">Logar</Button>
        </section>
      </section>
    </>
  );
  }
}

export default Login