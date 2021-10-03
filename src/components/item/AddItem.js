import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Box, Text } from 'react-native-design-utility';
import { db } from '../../firebase';

const AddItem = ({ storeId, nextPos }) => {
  const onPress = async () => {
    db.collection('items')
      .add({
        createdAt: new Date(),
        storeId,
        order: nextPos
      })
  }

  return (
    <View
      style={styles.addItemContainer}
    >
      <TouchableOpacity
        onPress={onPress}
      >
        <Box
          h={50}
          w={100}
          borderRadius={5}
          center
          backgroundColor="grey"
        >
          <Text>Add Item</Text>
        </Box>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  addItemContainer: {
    flex: 1,
    marginBottom: 20,
    marginRight: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
})

export default AddItem;