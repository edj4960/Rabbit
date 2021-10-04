import { InteractionManager } from 'react-native';

export const collectIdsAndDocs = doc => {
  if (!doc) return;
  return { id: doc.id ? doc.id : '', ...doc.data() };
};

export const focusInputWithKeyboard = (inputRef) => {
  setTimeout(() => inputRef.current.focus(), 100);
}