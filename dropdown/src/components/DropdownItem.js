import React from 'react'
import PropTypes from 'prop-types'

function DropdownItem({ element, onHighLight, elementHL}) {

    const { name, id, active } = element

    const onActive = (id) => {
       return onHighLight(id);
    }

    return (
        <li className={ elementHL === 'active' ? 'active' : '#'} key={id} onClick={() => onActive(id)}><a href="#">{name}</a></li>
    )
}

DropdownItem.propTypes = {}

export default DropdownItem
