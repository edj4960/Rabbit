import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ItemList from '../components/item/ItemList';
import { StoreListContext } from '../contexts/StoreListContext';

const StoreItemList = ({ store }) => {
  const navigation = useNavigation();

  const navigateToStoreScreen = () => {
    navigation.navigate('Store', { ...store });
  }

  return (
    <Box style={styles.storeContainer}>
      <TouchableOpacity onPress={navigateToStoreScreen}>
        <Text>{store.name}</Text>
      </TouchableOpacity>
      <ItemList items={store.items || []} storeId={store.id} />
    </Box>
  )
}

const ItemsScreen = () => {
  const stores = useContext(StoreListContext);

  return (
    <View style={styles.container}>
      {
        stores.map((store) => <StoreItemList key={store.id} store={store} />)
      }
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  storeContainer: {
    flex: 1,
    height: 50,
    backgroundColor: 'grey'
  }
})

export default ItemsScreen;