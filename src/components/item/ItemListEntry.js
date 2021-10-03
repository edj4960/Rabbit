import React from 'react';
import { Box, Text } from 'react-native-design-utility';

const ItemListEntry = ({ item }) => {

  return (
    <Box
      p={10}
      w="100%"
      h={50}
    >
      <Text>{item.name}</Text>
    </Box>
  )
}

export default ItemListEntry;