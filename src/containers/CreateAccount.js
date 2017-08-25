import React, { Component } from 'react';
import InputField from "../components/InputField";
import FooterFormButton from "../components/FooterFormButton";
import SimpleBox from "../components/SimpleBox";
import { createAccount } from '../actions/userActions';
import {connect} from "react-redux";
import ErrorAlert from "../components/ErrorAlert";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  isValid() {
    const { email, password, confirmPassword } = this.state;

    if (email === '' || password === '' || confirmPassword === '') {
      this.setState({
        error: "Please enter in all fields"
      });
      return false;
    } else if (password !== confirmPassword) {
      this.setState({
        error: "Please make sure your passwords match"
      });
      return false;
    }
    return true;
  }

  submitAccount(event) {
    event.preventDefault();
    if (!this.isValid()) {
      return;
    }
    this.props.createAccount(this.state.email, this.state.password).then(() => {
      this.props.history.replace('/');
    }).catch(err => {
      this.setState({
        error: err.message
      })
    })
  }

  renderBody() {
    const errStyle = {
      borderColor: "red"
    };
    return (
      <div>
        <form onSubmit={event => this.submitAccount(event)}>
          <InputField id="email"
                      type="text"
                      label="Email"
                      inputAction={(event) => this.setState({email: event.target.value})}
                      style={this.state.error ? errStyle : {}}/>
          <InputField id="password"
                      type="password"
                      label="Password"
                      inputAction={(event) => this.setState({password: event.target.value})}
                      style={this.state.error ? errStyle : {}}/>
          <InputField id="confirm-password"
                      type="password"
                      label="Confirm Password"
                      inputAction={(event) => this.setState({confirmPassword: event.target.value})}
                      style={this.state.error ? errStyle : {}}/>
          {this.state.error && <ErrorAlert>{this.state.error}</ErrorAlert>}
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