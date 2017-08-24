import React, { Component } from 'react';

class PostCard extends Component {
  render() {
    return (
      <div className="card post">
        <div className="card-block" style={{padding: "20px"}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default PostCard;