import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import StoreList from '../components/store/StoreList';
import AddStore from '../components/store/AddStore';
import appStyles from '../styles/appStyles';

const StoreListScreen = () => {

  return (
    <Box style={appStyles.background}>
      <Text style={appStyles.pageTitle}>Stores</Text>
      <StoreList />
      <AddStore />
    </Box>
  )
}

export default StoreListScreen;