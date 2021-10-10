import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Box, Text } from 'react-native-design-utility';
import { useNavigation } from '@react-navigation/core';

import appStyles from '../../styles/appStyles';
import appColors from '../../styles/appColors';

const AddStore = () => {
  const navigation = useNavigation();

  const onPress = async () => {
    navigation.navigate('Store');
  }

  return (
    <View style={appStyles.bottomRightContainer}>
      <TouchableOpacity onPress={onPress}>
        <Box style={appStyles.addButton}>
          <Text center bold color={appColors.primaryLight}>Add Store</Text>
        </Box>
      </TouchableOpacity>
    </View>
  )
}

export default AddStore;