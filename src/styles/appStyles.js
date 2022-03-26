import { StyleSheet } from 'react-native';
import appColors from './appColors';

const paddingVertical = 25;
const paddingHorizontal = 15;

export default appStyles = StyleSheet.create({
  pageTitle: {
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 36,
    color: appColors.light,
    marginBottom: 15
  },
  background: {
    backgroundColor: appColors.backgroundLight,
    paddingVertical: paddingVertical,
    paddingHorizontal: paddingHorizontal,
    height: '100%'
  },

  bottomRightContainer: {
    position: 'absolute',
    right: paddingHorizontal+10,
    bottom: paddingVertical+15,
  },
  addButton: {
    backgroundColor: appColors.primaryDark,
    color: appColors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 15,
    width: 100
  },

  tabBarStyle: {
    backgroundColor: appColors.background,
    borderTopWidth: 0,
    color: appColors.white
  },
  counterPadding: {
    marginVertical: -paddingVertical,
    marginHorizontal: -paddingHorizontal,
  },

  itemText: {
    fontSize: 18,
    color: appColors.light
  },
});