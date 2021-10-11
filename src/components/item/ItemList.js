import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { db } from '../../firebase';

import ItemListEntry from './ItemListEntry';

const ItemList = ({ items, storeId, scrollable = true }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(items);
  }, [items]);

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ItemListEntry item={item} drag={drag} storeId={storeId} />
    )
  }

  const reorderItems = async ({ data }) => {
    setData(data);

    const batch = db.batch();

    data.forEach((item, idx) => {
      if (item.order !== idx) {
        const docRef = db.collection('items').doc(item.id);
        batch.update(docRef, { order: idx });
      }
    });

    await batch.commit();
  }

  return (
    <DraggableFlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      onDragEnd={reorderItems}
      scrollEnabled={scrollable}
      // style={{height: '100%'}}
    />
  )
}

export default ItemList;