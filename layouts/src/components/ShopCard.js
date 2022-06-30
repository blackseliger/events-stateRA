import React from 'react'
import PropTypes from 'prop-types'

function ShopCard({product}) {
  const {id, name, price, color, img} = product;
  const currency = (price) =>  `$${price}`
  return (
    <div class="card card_list card_module" key={id}>
    <div class="card__header">
        <span class="card__name">{name}</span>
        <span class="card__description">{color}</span>
    </div>
    <div class="card__picture">
        <img class="card__img"
            src={img}
            alt={`${name}_${color}`}/>
    </div>
    <div class="card__footer">
        <div class="card__price">{currency(price)}</div>
        <button class="button card__button">
            Add to Card
        </button>
    </div>
</div>
  )
}

ShopCard.propTypes = {}

export default ShopCard
