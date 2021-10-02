

import React from 'react';

import RootNavigator from './src/navigators/RootNavigator';

// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faStore, faShoppingCart);

const App = () => {

  return (
    <RootNavigator />
  );
};

export default App;
