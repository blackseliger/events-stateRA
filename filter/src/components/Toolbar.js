import React from 'react'
import PropTypes from 'prop-types'



function Toolbar({ filters, selected, onSelectFilter }) {

    const onFilter = (category) => {
        console.log(1);
        onSelectFilter(category)
    }

    return (
        <div className='buttons'>
            {filters.map((filter) => {
                return <button className="button" key={filter} onClick={() => onFilter(filter)}>{filter}</button>
            })}
        </div>
    )
}

Toolbar.propTypes = {}

export default Toolbar
