import React, { useEffect, useContext, useState } from 'react';
import { Text } from 'react-native-design-utility';
import { useNavigation } from '@react-navigation/core';

import { StoreListContext } from '../contexts/StoreListContext';
import StoreScreenTitle from '../components/store/StoreScreenTitle';
import StoreScreenMenu from '../components/store/StoreScreenMenu';

import ItemList from '../components/item/ItemList';
import AddItem from '../components/item/AddItem';

const StoreScreen = ({ route }) => {
  const navigation = useNavigation();
  const { id } = { ...route.params }
  const stores = useContext(StoreListContext);
  const [store, setStore] = useState({});

  // Get store from stores list
  useEffect(() => {
    setStore(stores.filter(store => store.id === id)[0] || {});
  }, [stores]);

  // Assign store name to title
  useEffect(() => {
    navigation.setOptions({
      title: <StoreScreenTitle store={store || route.params} />,
      headerRight: () => {
        return <StoreScreenMenu storeId={id} />
      } 
    });
  }, [store]);

  return (
    <>
      <ItemList items={store.items || []} storeId={store.id} />
      <AddItem storeId={store.id} nextPos={store.items.length} />
    </>
  )
}

export default StoreScreen;