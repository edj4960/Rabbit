import React, { useEffect, useContext, useState } from 'react';
import { Text } from 'react-native-design-utility';

import { useNavigation } from '@react-navigation/core';

import { StoreListContext } from '../contexts/StoreListContext';
import StoreScreenTitle from '../components/StoreScreenTitle';
import StoreScreenMenu from '../components/StoreScreenMenu';

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
      <Text>{id}</Text>
    </>
  )
}

export default StoreScreen;