import React from 'react';
import { Text, Box } from 'react-native-design-utility';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { ScaleDecorator } from 'react-native-draggable-flatlist';

const StoreListEntry = ({ store, drag }) => {
  const navigation = useNavigation();
  const { name } = { ...store };

  const navigateToStoreScreen = () => {
    navigation.navigate('Store', {...store});
  }

  return (
    <TouchableOpacity
      onPress={navigateToStoreScreen}
      onLongPress={drag}
      delayLongPress={100}
    >
      <Box
        height={50}
        backgroundColor="grey"
        borderRadius={5}
        justifyContent="center"
        px={15}
        mb={15}
      >
        <Text
          fontSize={20}
        >
          {name}
        </Text>
      </Box>
    </TouchableOpacity>
  )
}

export default StoreListEntry;