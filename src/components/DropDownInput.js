import React from 'react';

const DropDownInput = ({ licenses, label, value, onChange }) => {
  const items = licenses.map(l =>
    <option key={l.key} value={l.key}>
      {l.name}
    </option>
  )
  return (
    <div className='input_wrapper'>
      <label>{label}</label>
      <select className="dropdown_input"
              value={value}
              onChange={onChange}>
        <option value=''>Any</option>
        {items}
      </select>
    </div>
  )
}

export default DropDownInput;
