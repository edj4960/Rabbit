import React, { useRef } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { db } from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const CompleteItem = ({ itemId, itemRemovalAnim }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const completeIconAnim = useRef(new Animated.Value(0)).current;
  const diameter = 30;

  const animateComplete = (callback) => {
    Animated.sequence([
      Animated.timing(
        scaleAnim,
        {
          toValue: 0,
          duration: 200,
          useNativeDriver: true
        }
      ),
      Animated.timing(
        completeIconAnim,
        {
          toValue: 1,
          duration: 200,
          useNativeDriver: true
        }
      ),
      itemRemovalAnim
    ]).start(() => callback());
  }

  const markComplete = async () => {
    await db.collection('items')
      .doc(itemId)
      .delete();
  }

  const onPress = async () => {
    animateComplete(markComplete);
  }

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Animated.View
          style={{
            width: diameter,
            height: diameter,
            transform: [
              { scale: scaleAnim },
            ],
            borderWidth: 2,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 25,
            marginRight: 10
          }}
        />
      </TouchableOpacity>

      <Animated.View
        style={{
          position: 'absolute',
          transform: [
            { scale: completeIconAnim },
          ],
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10
        }}
      >
        <FontAwesomeIcon icon={faCheckCircle} size={diameter}/>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
  }
})

export default CompleteItem;