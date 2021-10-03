import React, { useEffect, useState, useRef } from 'react';
import { TextInput } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { db } from '../firebase';

const StoreScreenTitle = ({ store }) => {
  const [name, setName] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const textInputRef = useRef();

  useEffect(() => {
    setName(store.name || '');
  }, [store]);

  const startEdit = () => {
    setIsEdit(true);

    textInputRef.current.focus();
  }

  const submitTitle = async () => {
    if (!store.id) {
      console.log("Store has no id");
      return;
    }

    await db.collection('stores')
      .doc(store.id)
      .update({ name: name });

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
          value={name}
          onChangeText={setName}
          onEndEditing={submitTitle}
          onSubmitEditing={submitTitle}
        />
      </Box>
    </>
  )
}

export default StoreScreenTitle;