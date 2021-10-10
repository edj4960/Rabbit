import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { focusInputWithKeyboard } from '../../utilities';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { db } from '../../firebase';

import Reanimated from 'react-native-reanimated';
import CompleteItem from './CompleteItem';
import SwipeableItem from 'react-native-swipeable-item'
import appColors from '../../styles/appColors';

const ItemListEntry = ({ item, drag, storeId }) => {
  const [name, setName] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const textInputRef = useRef();
  const transXAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setName(item?.name || '');
  }, [item]);

  const startEdit = () => {
    setIsEdit(true);
    textInputRef.current.focus();
  }

  const deleteItem = async () => {
    Animated.sequence([
      itemRemovalAnim
    ]).start(() => {
      db.collection('items')
        .doc(item.id)
        .delete();
    });
  }

  const itemRemovalAnim = Animated.timing(
    transXAnim,
    {
      toValue: -Dimensions.get('screen').width,
      duration: 200,
      useNativeDriver: true
    }
  )

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

  const renderUnderlayLeft = (test) => {
    return (
      <Reanimated.View
        style={[styles.row, styles.underlayLeft, { opacity: test.percentOpen }]}
      >
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={deleteItem}
        >
          <FontAwesomeIcon
            icon={faTrashAlt}
            size={20}
            color={appColors.light}
          />
        </TouchableOpacity>
      </Reanimated.View>
    )
  }

  return (
    <Animated.View
      style={{
        transform: [
          { translateX: transXAnim }
        ],
        ...styles.itemContainer
      }}
    >
      <SwipeableItem
        overSwipe={20}
        snapPointsLeft={[75]}
        key={item.id}
        item={item}
        renderUnderlayLeft={renderUnderlayLeft}
      >
        <TouchableOpacity
          onPress={startEdit}
          onLongPress={drag}
          delayLongPress={400}
        >
          <Box style={styles.itemInnerContiner}>
            <CompleteItem itemId={item.id} itemRemovalAnim={itemRemovalAnim} />
            {
              !isEdit && <Text style={styles.itemText}>{name}</Text>
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
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: appColors.background,
    borderRadius: 5,
    marginTop: 2
  },
  itemInnerContiner: {
    padding: 10,
    width: '100%',
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 18,
    color: appColors.light
  },
  underlayLeft: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  deleteButton: {
    width: 100,
    height: '100%',
    backgroundColor: appColors.warning,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ItemListEntry;