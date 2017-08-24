import React, { Component } from 'react';
import InputField from "../components/InputField";
import FooterFormButton from "../components/FooterFormButton";
import SimpleBox from "../components/SimpleBox";
import { createAccount } from '../actions/userActions';
import {connect} from "react-redux";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  submitAccount(event) {
    event.preventDefault();
    this.props.createAccount(this.state.email, this.state.password).then(() => {
      this.props.history.replace('/');
    }).catch(err => console.log(err))
  }

  renderBody() {
    return (
      <div>
        <form onSubmit={event => this.submitAccount(event)}>
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
        </form>
      </div>
    )
  }

  render() {
    return (
      <SimpleBox title="Create Account" body={this.renderBody()} />
    )
  }
}

export default connect(null, { createAccount })(CreateAccount);