import React from 'react'
import PropTypes from 'prop-types'

function Dropdown({ onToogle, variant }) {


    const onSelect = (select) => {
        return onToogle(select);
    }


    const toggles = {
        open: 'close',
        close: 'open',
    }




    return (
        <button data-id="toggle" className="btn" onClick={() => onSelect(toggles[variant])}>
            <span>Account Settings</span>
            <i className="material-icons">public</i>
        </button>
    )
}

Dropdown.propTypes = {}

export default Dropdown
