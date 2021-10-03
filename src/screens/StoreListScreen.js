import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import StoreList from '../components/StoreList';
import AddStore from '../components/AddStore';

const StoreListScreen = () => {

  return (
    <Box mx={30} my={30} h="100%">
      <StoreList />
      <AddStore />
    </Box>
  )
}

export default StoreListScreen;