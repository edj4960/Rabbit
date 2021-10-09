import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Box, Text } from 'react-native-design-utility';
import { useNavigation } from '@react-navigation/core';

const AddStore = () => {
  const navigation = useNavigation();

  const onPress = async () => {
    navigation.navigate('Store');
  }

  return (
    <View
      style={styles.addStoreContainer}
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
          <Text>Add Store</Text>
        </Box>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  addStoreContainer: {
    flex: 1,
    marginBottom: 50,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
})

export default AddStore;