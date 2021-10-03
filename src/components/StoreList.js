import React, { useContext } from 'react';
import { Text, Box } from 'react-native-design-utility';
import { TouchableOpacity } from 'react-native-gesture-handler';

import StoreListEntry from './StoreListEntry';
import { StoreListContext } from '../contexts/StoreListContext';

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