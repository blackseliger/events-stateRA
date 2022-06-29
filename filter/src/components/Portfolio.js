import React, { useState } from 'react'
import PropTypes from 'prop-types'
import data from '../data';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import shortid from 'shortid';
// https://freefrontend.com/css-gallery/

function Portfolio(props) {
  const listImage = [...data].map((element) => {
    return {id: shortid.generate(), ...element}
  })
  const [selected, setSelected ] = useState('All');

  const filters= ["All", "Websites", "Flayers", "Business Cards"];
  const filterData = [...listImage].filter((item) => item.category === selected)

  const onSelectedFilter = category => {
    return setSelected(category);
  }

  return (
    <>
    <Toolbar filters={filters}
    selected = {selected}
    onSelectFilter={onSelectedFilter}/>
    <ProjectList projects={filterData.length ? filterData : listImage}/>
    </>
  )
}

Portfolio.propTypes = {}

export default Portfolio


