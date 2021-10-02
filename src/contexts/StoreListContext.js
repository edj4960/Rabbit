import React, { useState, createContext, useEffect } from 'react';

import { db } from '../firebase';
import { collectIdsAndDocs } from '../utilities';

export const StoreListContext = createContext([]);

export const StoreListProvider = props => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    db.collection('stores').get()
      .then(results => {
        const stores = results.docs.map(collectIdsAndDocs).sort((a, b) => a > b);
        setStores(stores);
      });
  }, []);
  
  return (
    <StoreListContext.Provider value={stores}>
      {props.children}
    </StoreListContext.Provider>
  );
}
  
