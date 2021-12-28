import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    // formErros which will be an object with the input field names
    // as keys and any validation errors as their values
    // i.e. email : 'This field is required'
    // i.e. email : 'Please enter valid email address'
    
    this.state = {
      email : '',
      password : '',
      formErrors: {email : '', password : ''},
      emailValid : false,
      passwordValid : false,
      formValid : false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(event) {
    console.log('i am called');

    // name for 'email' , 'password'
    // value for actual value of the code
    // so that we don't have to write different code for email & password
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name] : value});
  }

  handleSubmit(event) {
    // So that page doesn't reloads automatically.
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={(event) => this.handleUserInput(event)}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={(event) => this.handleUserInput(event)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;
