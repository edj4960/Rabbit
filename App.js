

import React from 'react';
import { LogBox } from 'react-native';
import RootNavigator from './src/navigators/RootNavigator';
import { StoreListProvider } from './src/contexts/StoreListContext';

// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faStore, faShoppingCart);

LogBox.ignoreLogs([
  "ReactNativeFiberHostComponent: Calling getNode() on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release.",
]);

const App = () => {

  return (
    <StoreListProvider>
      <RootNavigator />
    </StoreListProvider>
  );
};

export default App;
