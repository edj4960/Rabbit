import React from 'react';
import { Text } from 'react-native-design-utility';

const StoreScreen = ({ route }) => {
  const { id } = { ...route.params }

  return (
    <>
      <Text>{id}</Text>
    </>
  )
}

export default StoreScreen;