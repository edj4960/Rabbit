

import React from 'react';
import { LogBox } from 'react-native';
import RootNavigator from './src/navigators/RootNavigator';
import Toast from 'react-native-toast-message';

import { StoreListProvider } from './src/contexts/StoreListContext';
import { MenuProvider } from 'react-native-popup-menu';
import { ItemProvider } from './src/contexts/ItemContext';

// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStore, faShoppingCart, faEllipsisV, faTrash, faCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faStore, faShoppingCart, faEllipsisV, faTrash, faCircle);

LogBox.ignoreLogs([
  "ReactNativeFiberHostComponent: Calling getNode() on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release.",
]);

const App = () => {

  return (
    <>
      <ItemProvider>
        <StoreListProvider>
          <MenuProvider>
            <RootNavigator />
          </MenuProvider>
        </StoreListProvider>
      </ItemProvider>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};

export default App;
