import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { db } from '../../firebase';

const CompleteItem = ({ itemId }) => {
  
  const markComplete = () => {
    db.collection('items')
      .doc(itemId)
      .update({
        completedAt: new Date()
      });
  }

  return (
    <TouchableOpacity
      style={styles.circle}
      onPress={markComplete}
    />
  )
}

const styles = StyleSheet.create({
  circle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginRight: 10
  }
})

export default CompleteItem;