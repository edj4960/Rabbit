import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Alert } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { db } from '../firebase';

const StoreScreenMenu = ({ storeId }) => {
  const navigation = useNavigation();

  const deleteStore = async () => {
    await db.collection('stores')
      .doc(storeId)
      .delete();
    
    navigation.goBack();
  }

  const confirmDelete = () => {
    Alert.alert(
      "Are you sure?",
      "All store items will be deleted.",
      [
        {
          text: 'Delete',
          onPress: deleteStore
        },
        {
          text: "Cancel",
        }
      ]
    )
  }

  return (
    <Box mr={15}>
      <Menu>
        <MenuTrigger>
          <FontAwesomeIcon icon="ellipsis-v" />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption
            onSelect={confirmDelete}
          >
            <Text>
              <FontAwesomeIcon icon="trash" />{" "}Delete
            </Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </Box>
  )
}

export default StoreScreenMenu;