import { db } from '../firebase';
import { addItemToStore, removeItemFromStore } from './StoreDao';

export async function addItem(name, storeId) {
  const item = await db.collection('items')
    .add({
      createdAt: new Date(),
      storeId,
      name
    });
  
  await addItemToStore(storeId, item.id);
}

export async function deleteItem(itemId, storeId) {
  if (await removeItemFromStore(storeId, itemId)) {
    await db.collection('items')
      .doc(itemId)
      .delete();
  }
}