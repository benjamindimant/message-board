import React from 'react';

const SimpleBox = (props) => {
  const { title, body, footer } = props;
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-self-center">
        <div className="card col-sm-6">
          <div className="card-block">
            <div className="card-title text-center">
              {title}
            </div>
            <div className="card-body">
              {body}
            </div>
            {footer && <div className="card-footer">
              {footer}
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
};

export default SimpleBox;