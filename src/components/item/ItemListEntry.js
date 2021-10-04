import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { db } from '../../firebase';

const ItemListEntry = ({ item, storeId }) => {
  const [name, setName] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const textInputRef = useRef();

  useEffect(() => {
    setName(item?.name || '');
  }, [item]);

  const startEdit = () => {
    setIsEdit(true);
    textInputRef.current.focus();
  }

  const deleteItem = async () => {
    await db.collection('items')
      .doc(item.id)
      .delete();
  }

  const submitName = async () => {
    if (!name) {
      await deleteItem();
      return;
    }

    await db.collection('items')
      .doc(item.id)
      .update({ name: name });

    setIsEdit(false);
  }

  useEffect(() => {
    if (!item.name) {
      setIsEdit(true);
      textInputRef.current.focus();
    }
  }, [textInputRef]);

  return (
    <Box
      p={10}
      w="100%"
      h={80}
      style={styles.itemContainer}
    >
      {
        !isEdit &&
        <TouchableOpacity
          onPress={startEdit}
        >
          <Text>{name}</Text>
        </TouchableOpacity>
      }
      {/* <Box> */}
        <TextInput
          ref={textInputRef}
          style={{
            height: 50,
            width: 200,
            display: !isEdit ? 'none' : 'flex'
          }}
          value={name}
          onChangeText={setName}
          onEndEditing={submitName}
          onSubmitEditing={submitName}
        />        
      {/* </Box> */}
    </Box>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1
  },
  itemTextInput: {
    height: 10
  }
})

export default ItemListEntry;