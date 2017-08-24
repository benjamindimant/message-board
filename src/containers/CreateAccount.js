import React, { Component } from 'react';
import InputField from "../components/InputField";
import FooterFormButton from "../components/FooterFormButton";
import SimpleBox from "../components/SimpleBox";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
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
        <InputField id="confirm-password"
                    type="password"
                    label="Confirm Password"
                    inputAction={(event) => this.setState({confirmPassword: event.target.value})} />
        <FooterFormButton submitLabel="Create Account" otherLabel="Go back" goToLink="/login" {...this.props} />
      </div>
    )
  }

  render() {
    return (
      <SimpleBox title="Create Account" body={this.renderBody()} />
    )
  }
}

export default CreateAccount;