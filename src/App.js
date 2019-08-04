import React,{ Component } from 'react';
import './App.css';
import {Button ,Form,FormGroup,Label,Input}
from 'reactstrap';
import{ FacebookLoginButton} from 'react-social-login-buttons';

class App extends Component {
  
  render(){
    return (
     
    <Form className="Login-form">
    
      <h1><span className="font-weight-bold">Cool-Guy</span>.com</h1>
      <h2>Welcome To Aman's Page</h2>
      <FormGroup>

      <Label><h6>Email</h6></Label>
      <Input type="email" placeholder="Email"/>
      <br/>
         <Label><h6>Password</h6></Label>
      <Input type="password" placeholder="Password"/>
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">Log In</Button>
      <div className="text-center pt-3">
      Or continue with your social account
      </div>
      <FacebookLoginButton className="mt-3 mb-3 "/>
      <div className="text-center">
      <a href="/Sign-up" >Sign-up</a><span> </span>
      <span className="p2">|</span><span> </span>
      <a href="/Forgot-password">Forgot Password</a>
      </div>
    </Form>
  );
  }
}

export default App;
