import React from 'react';

const CheckBoxInput = ({ onChange, checked, label }) => {
  return (
    <div className='input_wrapper'>
      <div style={{display: 'flex'}}>
        <input className='check_box'
               type="checkbox"
               onChange={onChange}
               checked={checked}/>
        <label>{label}</label>
      </div>
    </div>
  )
}

export default CheckBoxInput;
