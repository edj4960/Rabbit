
export const collectIdsAndDocs = doc => {
  if (!doc) return;
  return { id: doc.id ? doc.id : '', ...doc.data() };
};