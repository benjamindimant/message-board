import React, { Component } from 'react';
import '../styles/ListPosts.css';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getPosts, savePost, deletePost } from '../actions/postActions';
import { Field, reduxForm, reset } from 'redux-form';
import PostCard from "../components/PostCard";
import {getUser, logout} from "../actions/userActions";

class ListPosts extends Component {
  componentWillMount() {
    this.props.getPosts();
    this.props.getUser();
    if (this.props.user.loading === false && this.props.user.email === undefined) {
      this.props.history.replace('/login');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.loading === false && nextProps.user.email === undefined) {
      this.props.history.replace('/login');
    }
  }

  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <PostCard key={key}>
          <h3 className="card-title">{post.title}</h3>
          <p className="card-text">{post.body}</p>
          <button className="btn btn-danger" onClick={() => { this.props.deletePost(key) }}>Delete</button>
        </PostCard>
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
    const { handleSubmit, logout } = this.props;
    return (
      <div>
        <div className="navbar">
          <button className="btn btn-danger" onClick={() => { logout() }}>Logout</button>
        </div>
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
})(ListPosts);

/* mapStateToProps */
form = connect((state, ownProps) => ({
  posts: state.posts,
  user: state.user
}), { getPosts, savePost, deletePost, getUser, logout })(form);

export default form;
