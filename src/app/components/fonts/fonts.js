import React from 'react'
import customStyles from '../../styles/abstracts/_index.module.scss'

const M4Bold = ({ title, color }) => {
    return (
      <div className={customStyles.M48bold } style={{ color: color }}>
        {title}
      </div>
    );
  };
  
  export default M4Bold;