import React from 'react';

import ItemListEntry from './ItemListEntry';

const ItemList = ({ items, storeId }) => {

  return (
    items.map((item) => <ItemListEntry item={item} />)
  )
}

export default ItemList;