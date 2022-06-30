import React, { useState } from 'react'
import PropTypes, { element } from 'prop-types'
import Dropdown from './Dropdown'
import shortid from 'shortid'
import DropdownItem from './DropdownItem'
function DropdownList(props) {

  const data = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];

  const list = [...data].map((el) => {
    return { name: el, id: shortid.generate(), active: false }
  })

  const [toggle, setToggle] = useState('open')
  const [indexList, setHighLight] = useState(null);


  const onToogle = (active) => {
    return setToggle(active);
  }

  const onHighLight = (id) => {
    list.forEach((el) => el.active = false);
    const activeEl = list.findIndex((el) => el.id === id);

    return setHighLight(activeEl);
  }


  return (
    <div className="container">
      <div data-id="wrapper" className={`${toggle} dropdown-wrapper`}>
        <Dropdown onToogle={onToogle} variant={toggle} />
        <ul data-id="dropdown" className="dropdown">
          {list.map((element, index) => {
            return <DropdownItem 
            key={element.id} 
            element={element} 
            elementHL={index === indexList ? 'active' : ''} 
            onHighLight={onHighLight} 
            />
          })}
        </ul>
      </div>
    </div>
  )
}

DropdownList.propTypes = {}

export default DropdownList 
