import {StyleSheet} from 'react-native';
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
  },
  backgroundApp: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#f1f1f1',
  },
});
