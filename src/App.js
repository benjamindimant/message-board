import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getPosts, savePost, deletePost } from './actions/postActions';
import { Field, reduxForm, reset } from 'redux-form';

class App extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <div key={key} className="card post">
          <div className="card-block" style={{padding: "20px"}}>
            <h3 className="card-title">{post.title}</h3>
            <p className="card-text">{post.body}</p>
            <button className="btn btn-danger" onClick={() => { this.props.deletePost(key)}}>Delete</button>
          </div>
        </div>
      );
    });
  }

  renderField(field) {
    return (
      <input type="text" {...field.input} placeholder={`Please enter a ${field.label}`} className={field.class}/>
    )
  }

  onSubmit(values) {
    this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="container">
          {this.renderPosts()}
        </div>
        <div className=" fixed-bottom">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              name="title"
              component={this.renderField}
              label="Title"
              class="footer-title"
            />
            <Field
              name="body"
              component={this.renderField}
              label="Body"
              class="footer-body"
            />
            <button className="btn footer-button" type="submit">Post</button>
          </form>
        </div>
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
}), { getPosts, savePost, deletePost })(form);

export default form;
