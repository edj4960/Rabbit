import React from 'react';

import ItemListEntry from './ItemListEntry';

const ItemList = ({ items, storeId }) => {

  return (
    items.map((item) => <ItemListEntry key={item.id} item={item} storeId={storeId} />)
  )
}

export default ItemList;