import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard'

function CardsView({switchClass, products}) {




  return (
    <div className="wrapper">
         <div className={`store__cards  ${switchClass}`}>
            {products.map((product) => {
                return <ShopCard product={product} key={product.id}/>
            })}
         </div>
    </div>
  )
}

CardsView.propTypes = {}

export default CardsView
