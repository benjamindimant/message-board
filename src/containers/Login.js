import React, { Component } from 'react';
import SimpleBox from "../components/SimpleBox";
import InputField from '../components/InputField';
import FooterFormButton from "../components/FooterFormButton";
import { getUser, login } from "../actions/userActions";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillMount() {
    this.props.getUser();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.email !== undefined) {
      this.props.history.push('/');
    }
  }

  submitLogin(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password).catch(err => console.log(err));
  }

  renderBody() {
    return (
      <form onSubmit={event => { this.submitLogin(event)}}>
        <InputField id="email"
                    type="text"
                    label="Email"
                    inputAction={(event) => this.setState({email: event.target.value})} />
        <InputField id="password"
                    type="password"
                    label="Password"
                    inputAction={(event) => this.setState({password: event.target.value})} />
        <FooterFormButton submitLabel="Login" otherLabel="Create Account" goToLink="/createaccount" {...this.props} />
      </form>
    )
  }

  render() {
    console.log(this.state);
    return (
      <SimpleBox title="Sign in" body={this.renderBody()}/>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { login, getUser })(Login);