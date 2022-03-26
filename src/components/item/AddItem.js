import React, { useEffect, useState, useRef } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Box, Text } from 'react-native-design-utility';
import { db } from '../../firebase';
import { focusInputWithKeyboard } from '../../utilities';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import appStyles from '../../styles/appStyles';
import appColors from '../../styles/appColors';
import { addItem } from '../../dao/ItemDao';

const AddItem = ({ storeId }) => {
  const [showInput, setShowInput] = useState(false);
  const [name, setName] = useState('');
  const textInputRef = useRef();

  useEffect(() => {
    const hideInput = Keyboard.addListener("keyboardDidHide", () => {
      setShowInput(false);
    });

    return () => {
      hideInput.remove();
    }
  }, []);

  const onPress = () => {
    setShowInput(true);
    focusInputWithKeyboard(textInputRef);
  }

  const submitItem = () => {
    addItem(name, storeId);
    setName('');
  }

  return (
    showInput ? 
      <View style={styles.newItemContainer}>
        <TextInput
          ref={textInputRef}
          style={{
            width: 200,
            ...appStyles.itemText
          }}
          value={name}
          placeholderTextColor={appColors.grey}
          placeholder="Add an item"
          onChangeText={setName}
        />
        <TouchableOpacity
          style={styles.addButton}
          disabled={name === ""}
          onPress={submitItem}
        >
          <FontAwesomeIcon
            icon={faArrowUp}
            size={20}
            color={appColors.light}
          />
        </TouchableOpacity>
      </View>
      :
      <View style={appStyles.bottomRightContainer}>
        <TouchableOpacity onPress={onPress}>
          <Box style={appStyles.addButton}>
            <Text center bold color={appColors.primaryLight}>Add Item</Text>
          </Box>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  newItemContainer: {
    height: 50,
    paddingHorizontal: 35,
    backgroundColor: appColors.background,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    ...appStyles.counterPadding
  },
  addButton: {
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.backgroundDark,
    borderRadius: 5
  }
})

export default AddItem;