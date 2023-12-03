import './dropdown.css'
import React, { useState } from 'react'

function Dropdown({selected, setSelected}) {
  const [isActive, setIsActive] = useState(false)
  const options = ['Yes', 'Probably not']

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };


  return (
    <div className='dropdown' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h4>Should you use a dropdown</h4>
      <div className='dropdown-btn'  >{selected} <i class="fa fa-angle-down"></i></div>
      {isActive && (<div className='dropdown-content'>
        {options.map(option => (
          <div onClick={e => {
            setSelected(option)
            setIsActive(false)
          } 
        }
        className='dropdown-item'>
          {option}
        </div>
        ))}
        
      </div>)}
      
    </div>
  )
}

export default Dropdown