import React from 'react'
import PropTypes from 'prop-types'

function ProjectList({ projects }) {
    return (
        <div className="columns-gallery">
            {projects.map((project) => {
                return (
                    <div className='columns-gallery__gallery-img' key={project.id}>
                        <img className='gallery-img__image' src={project.img} alt={project.category}></img>
                    </div>
                )
            })}
        </div>
    )
}

ProjectList.propTypes = {}

export default ProjectList
