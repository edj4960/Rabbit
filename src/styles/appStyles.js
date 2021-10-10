import { StyleSheet } from 'react-native';
import Colors from './colors';

export default appStyles = StyleSheet.create({
  pageTitle: {
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 36,
    color: Colors.light,
    marginBottom: 15
  },
  background: {
    backgroundColor: Colors.backgroundLight,
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
    backgroundColor: Colors.primaryDark,
    color: Colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 15,
    width: 100
  },
});