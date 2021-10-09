import React, { useEffect, useState, useRef } from 'react';
import { TextInput } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { focusInputWithKeyboard } from '../../utilities';
import Toast from 'react-native-toast-message';

const StoreScreenTitle = ({ store, updateName }) => {
  const [name, setName] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const textInputRef = useRef();

  // If new store begin editting title
  useEffect(() => {
    if (!store?.name) {
      startEdit();
    }
  }, [])

  // Set name everytime the store udpates
  useEffect(() => {
    setName(store.name || '');
  }, [store]);

  const startEdit = () => {
    setIsEdit(true);
    focusInputWithKeyboard(textInputRef);
  }

  const invalidStoreName = () => {
    if (name) return false;
    
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
          <Text>{store.name}</Text>
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
          value={name}
          onChangeText={setName}
          onSubmitEditing={submitTitle}
        />
      </Box>
    </>
  )
}

export default StoreScreenTitle;