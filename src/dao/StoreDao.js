import firestore from '@react-native-firebase/firestore';
import { db } from '../firebase';

function storeDoc(storeId) {
  return db.collection('stores').doc(storeId);
}

export async function addItemToStore(storeId, itemId) {
  await storeDoc(storeId)
    .update({
      itemIds: firestore.FieldValue.arrayUnion(itemId)
    });
}

export async function removeItemFromStore(storeId, itemId) {
  try {
    await storeDoc(storeId)
      .update({
        itemIds: firestore.FieldValue.arrayRemove(itemId)
      });
    return true;
  } catch (err) {
    console.error('removeItemFromStore', err);
    return false;
  }
}

export async function reorderStoreItems(storeId, itemIds) {
  await storeDoc(storeId)
    .update({
      itemIds: itemIds.reverse()
    });
}