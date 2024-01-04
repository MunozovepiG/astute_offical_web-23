'use client'

import { useState } from 'react';

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    // You can perform any other actions when the value changes
  };

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      style={{
        width: '209px',
        height: '30px',
        padding: '5px',
        fontSize: '16px',
      }}
    >
      <option value="south-africa">South Africa website</option>
      <option value="united-states">United States website</option>
      <option value="global">Global website</option>
    </select>
  );
};

export default Dropdown;
