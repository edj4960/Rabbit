import React, { useEffect, useContext, useState } from 'react';
import { Text } from 'react-native-design-utility';
import { StoreListContext } from '../contexts/StoreListContext';

import { useNavigation } from '@react-navigation/core';

const StoreScreen = ({ route }) => {
  const navigation = useNavigation();
  const { id } = { ...route.params }
  const stores = useContext(StoreListContext);
  const [store, setStore] = useState({});

  useEffect(() => {
    setStore(stores.filter(store => store.id === id)[0] || {});
  }, [stores]);

  useEffect(() => {
    navigation.setOptions({ title: store?.name || '' });
  }, [store]);

  return (
    <>
      <Text>{id}</Text>
    </>
  )
}

export default StoreScreen;