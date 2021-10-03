import React, { useContext, useEffect, useState } from 'react';
import DraggableFlatList from "react-native-draggable-flatlist";

import StoreListEntry from './StoreListEntry';
import { StoreListContext } from '../../contexts/StoreListContext';
import { db } from '../../firebase';

const StoreList = () => {
  const stores = useContext(StoreListContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(stores);
  }, [stores]);

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <StoreListEntry store={item} drag={drag} />
    )
  }

  const reorderStores = async ({ data }) => {
    setData(data);

    const batch = db.batch();

    data.forEach((store, idx) => {
      if (store.order !== idx) {
        const docRef = db.collection('stores').doc(store.id);
        batch.update(docRef, { order: idx });
      }
    });
    
    await batch.commit();
  }

  return (
    <DraggableFlatList
      data={data}
      keyExtractor={(store) => store.id}
      renderItem={renderItem}
      onDragEnd={reorderStores}
    />
  )
}

export default StoreList;