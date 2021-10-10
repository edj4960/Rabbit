import { StyleSheet } from 'react-native';
import appColors from './appColors';

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
    paddingVertical: 25,
    paddingHorizontal: 15,
    height: '100%'
  },

  bottomRightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
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
  }
});