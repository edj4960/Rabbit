import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { focusInputWithKeyboard } from '../../utilities';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { db } from '../../firebase';

import Animated from 'react-native-reanimated';
import CompleteItem from './CompleteItem';
import SwipeableItem from 'react-native-swipeable-item'

const ItemListEntry = ({ item, drag, storeId }) => {
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
      focusInputWithKeyboard(textInputRef);
    }
  }, [textInputRef]);

  const renderUnderlayLeft = ({ percentOpen }) => {
    return (
      <Animated.View
        style={[styles.row, styles.underlayLeft, { opacity: percentOpen }]}
      >
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={deleteItem}
        >
          <FontAwesomeIcon
            icon={faTrashAlt}
            size={20}
          />
        </TouchableOpacity>
      </Animated.View>
    )
  }

  return (
    <SwipeableItem
      overSwipe={20}
      snapPointsLeft={[75]}
      key={item.id}
      item={item}
      renderUnderlayLeft={renderUnderlayLeft}
    >
      <TouchableOpacity
        onLongPress={drag}
        delayLongPress={400}
      >
        <Box
          p={10}
          w="100%"
          h={80}
          style={styles.itemContainer}
          flex={true}
          flexDirection="row"
          alignItems="center"
        >
          <CompleteItem itemId={item.id} />
          {
            !isEdit &&
            <TouchableOpacity
              onPress={startEdit}
            >
              <Text>{name}</Text>
            </TouchableOpacity>
          }
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
        </Box>
      </TouchableOpacity>
    </SwipeableItem>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1
  },
  itemTextInput: {
    height: 10
  },
  underlayLeft: {
    flex: 1,
    backgroundColor: 'tomato',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deleteButton: {
    width: 75,
    height: '100%',
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  }
})

export default ItemListEntry;