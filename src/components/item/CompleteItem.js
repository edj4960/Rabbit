import React, { useRef } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { db } from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import appColors from '../../styles/appColors';
import { deleteItem } from '../../dao/ItemDao';

const CompleteItem = ({ itemId, storeId, itemRemovalAnim }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const completeIconAnim = useRef(new Animated.Value(0)).current;
  const diameter = 25;

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
    await deleteItem(itemId, storeId);
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
            ...styles.circle
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
        <FontAwesomeIcon
          icon={faCheckCircle}
          size={diameter}
          color={appColors.primary}
        />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    borderWidth: 3,
    borderColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginRight: 10
  }
})

export default CompleteItem;