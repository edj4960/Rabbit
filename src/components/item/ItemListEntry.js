import React, { useEffect } from 'react';
import { Box, Text } from 'react-native-design-utility';

const ItemListEntry = ({ item }) => {

  useEffect(() => {
    // TODO: if item has no name then it should be focused on for text input.
    // If the user exits the page or closes the keyboard without any input the item should be deleted.
  }, []);

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