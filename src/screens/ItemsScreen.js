import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import ItemList from '../components/item/ItemList';

import { StoreListContext } from '../contexts/StoreListContext';

const ItemsScreen = () => {
  const stores = useContext(StoreListContext);

  return (
    <View style={styles.container}>
      {
        stores.map((store) => {
          return (
            <Box key={store.id} style={styles.storeContainer}>
              <Text>{store.name}</Text>
              <ItemList items={store.items || []} storeId={store.id} />
            </Box>
          )
        })
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