import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Box, Text } from 'react-native-design-utility';
import { db } from '../../firebase';
import appStyles from '../../styles/appStyles';

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
})

export default AddItem;