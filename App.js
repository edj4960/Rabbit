

import React from 'react';
import { LogBox } from 'react-native';
import RootNavigator from './src/navigators/RootNavigator';
import { StoreListProvider } from './src/contexts/StoreListContext';

import { MenuProvider } from 'react-native-popup-menu';

// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStore, faShoppingCart, faEllipsisV, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faStore, faShoppingCart, faEllipsisV, faTrash);

LogBox.ignoreLogs([
  "ReactNativeFiberHostComponent: Calling getNode() on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release.",
]);

const App = () => {

  return (
    <StoreListProvider>
      <MenuProvider>
        <RootNavigator />
      </MenuProvider>
    </StoreListProvider>
  );
};

export default App;
