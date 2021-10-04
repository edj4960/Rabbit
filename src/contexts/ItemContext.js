import React, { useState, createContext, useEffect } from 'react';

import { db } from '../firebase';
import { collectIdsAndDocs } from '../utilities';

export const ItemContext = createContext([]);

export const ItemProvider = props => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('items')
      .onSnapshot(results => {
        const items = results.docs.map(collectIdsAndDocs);
        setItems(items);
      });
    return () => unsubscribe()
  }, []);

  return (
    <ItemContext.Provider value={items}>
      {props.children}
    </ItemContext.Provider>
  );
}

