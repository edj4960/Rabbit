import React, { useEffect, useState, useRef } from 'react';
import { TextInput } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { focusInputWithKeyboard } from '../../utilities';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/core';

const StoreScreenTitle = ({ isNew, store, updateName }) => {
  const [name, setName] = useState('');
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const [goingBack, setGoingBack] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const textInputRef = useRef();
  const navigation = useNavigation();

  // If new store begin editting title
  useEffect(() => {
    if (isNew) {
      startEdit();
    }
  }, []);

  // Save if navigating back to prevent error toast from appearing
  useEffect(() => {
    navigation.addListener('beforeRemove', () => {
      setGoingBack(true);
    });

    return () => navigation.removeListener('beforeRemove');
  }, [navigation]);

  // Set name everytime the store udpates
  useEffect(() => {
    setName(store.name || '');
    setSelection({ start: store?.name?.length || 0, end: store?.name?.length || 0 });
  }, [store]);

  const startEdit = () => {
    setIsEdit(true);
    focusInputWithKeyboard(textInputRef);
  }

  const invalidStoreName = () => {
    if (name) return false;
    if (goingBack) return true;

    focusInputWithKeyboard(textInputRef);
    setTimeout(() => {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Store name cannot be blank',
        visibilityTime: 4000
      });
    }, 100);

    return true;
  }

  const submitTitle = async () => {
    if (invalidStoreName()) return;
    updateName(name);
    setIsEdit(false);
  }

  return (
    <>
      {
        !isEdit &&
        <TouchableOpacity
          onPress={startEdit}
        >
          <Text>{name}</Text>
        </TouchableOpacity>
      }
      <Box>
        <TextInput
          ref={textInputRef}
          style={{
            width: 200,
            textAlign: 'center',
            display: !isEdit ? 'none' : 'flex'
          }}
          placeholder="Enter Store Name"
          onFocus={() => {
            setSelection({ start: name.length || 0, end: name.length || 0 })
          }}
          selection={selection}
          onSelectionChange={setSelection}
          value={name}
          onChangeText={setName}
          onSubmitEditing={submitTitle}
          onEndEditing={submitTitle}
        />
      </Box>
    </>
  )
}

export default StoreScreenTitle;