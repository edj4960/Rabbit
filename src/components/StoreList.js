import React, { useContext } from 'react';
import { Text, Box } from 'react-native-design-utility';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { StoreListContext } from '../contexts/StoreListContext';

const StoreListEntry = ({ store }) => {
  const { name } = { ...store };

  return (
    <TouchableOpacity>
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

const StoreList = () => {
  const stores = useContext(StoreListContext);

  return (
    <Box>
      {
        stores.map((store) => {
          return <StoreListEntry key={store.id} store={store} />
        })
      }
    </Box>
  )
}

export default StoreList;