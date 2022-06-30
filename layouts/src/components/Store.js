import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView'
import products from '../data';
import shortid from 'shortid';

function Store(props) {
    const [selected, setSelected] = useState('list');
    
    const data = [...products].map((element) => {
        return {id: shortid.generate(), ...element}
      })

    const onSelectedSwitch = selected => {
        return setSelected(selected);
    }

    const switches = {
        list: 'store__cards_list',
        module: 'store__cards_module',
    }




    return (
        <div className='store'>
            <IconSwitch icon={selected} onSwitch={onSelectedSwitch}/>
            <CardsView switchClass={switches[selected]} products={data}/>
        </div>
    )
}

Store.propTypes = {}

export default Store
