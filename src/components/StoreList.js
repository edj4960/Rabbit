import React, { useContext } from 'react';
import { Text, Box } from 'react-native-design-utility';

import { StoreListContext } from '../contexts/StoreListContext';

const StoreListEntry = ({ store }) => {
  const { name, order } = { ...store };

  return (
    <Box width={50} height={50}>
      <Text>{name} {order}</Text>
    </Box>
  )
}

const StoreList = () => {
  const stores = useContext(StoreListContext);

  return (
    <>
      {
        stores.map((store) => {
          return <StoreListEntry key={store.id} store={store} />
        })
      }
    </>
  )
}

export default StoreList;