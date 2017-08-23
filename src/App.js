import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getPosts } from './actions/postActions';
import { Field, reduxForm, reset } from 'redux-form';

class App extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <div key={key}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
}

let form = reduxForm({
  form: 'NewPost'
})(App);

/* mapStateToProps */
form = connect(state => ({
  posts: state.posts
}), { getPosts })(form);

export default form;
