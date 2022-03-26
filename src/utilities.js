import { InteractionManager } from 'react-native';

export const collectIdsAndDocs = doc => {
  if (!doc) return;
  return { id: doc.id ? doc.id : '', ...doc.data() };
};

export const focusInputWithKeyboard = (inputRef, delay) => {
  setTimeout(() => inputRef.current.focus(), delay ?? 100);
}