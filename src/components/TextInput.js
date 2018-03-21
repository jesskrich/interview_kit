import React from 'react';

const TextInput = ({ label, onChange, value, onBlur }) => {
  return (
    <div className='input_wrapper'>
      <label>{label}</label>
      <input type="text"
             onChange={onChange}
             onBlur={onBlur}
             value={value || ''} />
    </div>
  )
}

export default TextInput;
