import React, { Component } from 'react';
import SimpleBox from "../components/SimpleBox";
import InputField from '../components/InputField';
import FooterFormButton from "../components/FooterFormButton";

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
        <FooterFormButton submitLabel="Login" otherLabel="Create Account" goToLink="/createaccount" {...this.props} />
      </div>
    )
  }

  render() {
    console.log(this.state);
    return (
      <SimpleBox title="Sign in" body={this.renderBody()}/>
    );
  }
}

export default Login;