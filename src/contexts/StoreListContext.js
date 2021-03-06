import React, { useState, createContext, useEffect, useContext } from 'react';

import { db } from '../firebase';
import { collectIdsAndDocs } from '../utilities';

import { ItemContext } from './ItemContext';

export const StoreListContext = createContext([]);

export const StoreListProvider = props => {
  const items = useContext(ItemContext);
  const [storesRaw, setStoresRaw] = useState([]);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    if (items?.length === 0 || storesRaw?.length === 0) return;

    const storesWithItems = storesRaw.map((store) => {
      if (store.itemIds) {
        store.items = store.itemIds.map((itemId) => items.find((item) => item.id == itemId)).reverse();
      } else {
        store.items = [];
      }
      return store;
    });

    setStores(storesWithItems);
  }, [items, storesRaw]);

  useEffect(() => {
    const unsubscribe = db.collection('stores')
      .onSnapshot(results => {
        const storesRaw = results.docs.map(collectIdsAndDocs).sort((a, b) => a.order > b.order);
        setStoresRaw(storesRaw);
      });

    return () => unsubscribe()
  }, []);
  
  return (
    <StoreListContext.Provider value={stores}>
      {props.children}
    </StoreListContext.Provider>
  );
}