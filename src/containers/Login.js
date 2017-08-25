import React, { Component } from 'react';
import SimpleBox from "../components/SimpleBox";
import InputField from '../components/InputField';
import FooterFormButton from "../components/FooterFormButton";
import { getUser, login } from "../actions/userActions";
import { connect } from "react-redux";
import ErrorAlert from "../components/ErrorAlert";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null
    }
  }

  componentWillMount() {
    if (this.props.user !== null) {
      this.props.history.push('/');
    }
  }

  submitLogin(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password).catch(err => {
      this.setState({
        error: err
      })
    });
  }

  renderBody() {
    const errorStyle= {
      borderColor: "red"
    };
    return (
      <form onSubmit={event => { this.submitLogin(event)}}>
        <div>
          <InputField id="email"
                      type="text"
                      label="Email"
                      inputAction={(event) => this.setState({email: event.target.value})}
                      style={this.state.error ? errorStyle : {}} />
          <InputField id="password"
                      type="password"
                      label="Password"
                      inputAction={(event) => this.setState({password: event.target.value})}
                      style={this.state.error ? errorStyle : {}} />
          {this.state.error && <ErrorAlert>Your username/password is incorrect</ErrorAlert>}
          <FooterFormButton submitLabel="Login" otherLabel="Create Account" goToLink="/createaccount" {...this.props} />
        </div>
      </form>
    )
  }

  render() {
    return (
      <SimpleBox title="Sign in" body={this.renderBody()}/>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { login, getUser })(Login);