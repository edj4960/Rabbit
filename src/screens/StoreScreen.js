import React, { useEffect, useContext, useState, useRef } from 'react';
import { Box } from 'react-native-design-utility';
import { useNavigation } from '@react-navigation/core';

import { StoreListContext } from '../contexts/StoreListContext';
import StoreScreenTitle from '../components/store/StoreScreenTitle';
import StoreScreenMenu from '../components/store/StoreScreenMenu';

import ItemList from '../components/item/ItemList';
import AddItem from '../components/item/AddItem';
import { db } from '../firebase';
import appStyles from '../styles/appStyles';

const StoreScreen = ({ route }) => {
  const navigation = useNavigation();
  const [id, setId] = useState(route.params?.id || '');
  const stores = useContext(StoreListContext);
  const [store, setStore] = useState({});

  // Get store from stores list
  useEffect(() => {
    if (!id) return;
    setStore(stores.filter(store => store.id === id)[0] || {});
  }, [stores, id]);

  // Assign store name to title
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <StoreScreenMenu storeId={id} />
      } 
    });
  }, [store]);

  const updateName = async (name) => {
    if (!id) {
      const storeRef = await db.collection('stores').add({ name: name, order: stores?.length || 0 });
      setId(storeRef.id);
    } else {
      await db.collection('stores')
        .doc(store.id)
        .update({ name: name });
    }
  }

  return (
    <Box style={appStyles.background}>
      <StoreScreenTitle isNew={!id} store={store} updateName={updateName} />
      <ItemList items={store?.items || []} storeId={store.id} />
      {
        store?.name &&
        <AddItem
          storeId={store.id}
          nextPos={store?.items?.length || 0}
        />
      }
    </Box>
  )
}

export default StoreScreen;