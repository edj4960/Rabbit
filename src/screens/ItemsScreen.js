import React, { useContext, useRef } from 'react';
import { StyleSheet, View, SectionList } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ItemListEntry from '../components/item/ItemListEntry';
import ItemList from '../components/item/ItemList';
import { StoreListContext } from '../contexts/StoreListContext';

const ItemsScreen = () => {
  const navigation = useNavigation();
  const stores = useContext(StoreListContext);
  const sections = stores.map(store => {
    return {
      id: store.id,
      title: store.name,
      data: store.items
    }
  });

  const navigateToStoreScreen = (storeId) => {
    navigation.navigate('Store', { id: storeId });
  }

  return (
    <SectionList
      keyExtractor={(item, index) => item.name + index}
      sections={sections}
      renderItem={({ item, section }) => {
        return <ItemListEntry item={item} storeId={section.id} />
      }}
      renderSectionHeader={({ section: { title, id } }) => (
        <TouchableOpacity onPress={() => navigateToStoreScreen(id)}>
          <Text>{title}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start'
  },
  storeContainer: {
    flex: 1,
    // height: 150,
    // backgroundColor: 'grey'
  }
})

export default ItemsScreen;