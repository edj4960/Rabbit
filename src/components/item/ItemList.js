import React, { useEffect, useState } from 'react';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { db } from '../../firebase';
import { Box, Text } from 'react-native-design-utility';

import ItemListEntry from './ItemListEntry';

const ItemList = ({ items, storeId, scrollable = true }) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setData(items);
    setLoaded(true);
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
    <>
      {
        (loaded && items.length == 0) &&
        <Box>
          <Text ml={10} color={appColors.primaryLight}>No Items</Text>
        </Box>
      }
      <DraggableFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onDragEnd={reorderItems}
        scrollEnabled={scrollable}
      />
    </>
  )
}

export default ItemList;