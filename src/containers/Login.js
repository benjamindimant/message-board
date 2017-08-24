import React, { Component } from 'react';
import SimpleBox from "../components/SimpleBox";
import InputField from '../components/InputField';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  renderBody() {
    return (
      <div>
        <InputField id="email"
                    type="text"
                    label="Email"
                    inputAction={(event) => this.setState({email: event.target.value})} />
        <InputField id="password"
                    type="password"
                    label="Password"
                    inputAction={(event) => this.setState({password: event.target.value})} />
      </div>
    )
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <SimpleBox title="Sign in" body={this.renderBody()}/>
      </div>
    );
  }
}

export default Login;