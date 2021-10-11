import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Alert } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { db } from '../../firebase';
import appColors from '../../styles/appColors';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const StoreScreenMenu = ({ storeId }) => {
  const navigation = useNavigation();

  const deleteStore = async () => {
    await db.collection('stores')
      .doc(storeId)
      .delete();
    
    const itemsQuery = db.collection('items').where('storeId', '==', storeId);
    itemsQuery.get().then((docRefs) => {
      docRefs.forEach((doc) => {
        doc.ref.delete();
      });
    });
    
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
    !!storeId &&
    <Box mr={15}>
      <Menu renderer={renderers.ContextMenu}>
        <MenuTrigger>
          <FontAwesomeIcon icon="ellipsis-v" color={appColors.primary} />
        </MenuTrigger>
        <MenuOptions
          optionsContainerStyle={{
            marginTop: 20,
            backgroundColor: appColors.background
          }}
          style={{
            padding: 5,
          }}
        >
          <MenuOption onSelect={confirmDelete}>
            <Text color={appColors.warning}>
              <FontAwesomeIcon icon={faTrashAlt} color={appColors.warning} />{" "}Delete
            </Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </Box>
  )
}

export default StoreScreenMenu;