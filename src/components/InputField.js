import React from 'react';

function isVowel(char) {
  return /^[aeiou]$/.test(char.toLowerCase());
}

const InputField = (props) => {
  return (
    <div className="form-group">
      <div className="row">
        <div className="col-sm-2">
          <label htmlFor={props.id} className="col-form-label">{props.label}</label>
        </div>
        <div className="col-sm-10">
          <input onChange={props.inputAction}
                 type={props.type}
                 className="form-control" placeholder={`Please enter ${isVowel(props.label[0]) ? "an" : "a"} ${props.label}`}/>
        </div>
      </div>
    </div>
  )
};

export default InputField;