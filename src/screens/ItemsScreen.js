import React, { useContext, useRef } from 'react';
import { StyleSheet, View, SectionList } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ItemListEntry from '../components/item/ItemListEntry';
import ItemList from '../components/item/ItemList';
import { StoreListContext } from '../contexts/StoreListContext';
import appStyles from '../styles/appStyles';
import appColors from '../styles/appColors';

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
    <View style={appStyles.background}>
      <Text style={appStyles.pageTitle}>Shopping Cart</Text>
      <SectionList
        keyExtractor={(item, index) => item.name + index}
        sections={sections}
        renderItem={({ item, section }) => {
          return <ItemListEntry item={item} storeId={section.id} />
        }}
        renderSectionHeader={({ section: { title, id } }) => (
          <Box style={styles.storeHeader}>
            <TouchableOpacity onPress={() => navigateToStoreScreen(id)}>
              <Text style={styles.storeHeaderText}>{title}</Text>
            </TouchableOpacity>
          </Box>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  storeHeader: {
    backgroundColor: appColors.primaryDark,
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    height: 50,
    justifyContent: 'flex-end'
  },
  storeHeaderText: {
    color: appColors.light,
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default ItemsScreen;