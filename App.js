

import React from 'react';

import RootNavigator from './src/navigators/RootNavigator';

import { StoreListProvider } from './src/contexts/StoreListContext';

// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faStore, faShoppingCart);

const App = () => {

  return (
    <StoreListProvider>
      <RootNavigator />
    </StoreListProvider>
  );
};

export default App;
