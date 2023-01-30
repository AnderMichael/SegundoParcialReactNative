import {View} from 'react-native';
import {TabBottom} from '../navigation/TabBottom';

export const HomeScreen = () => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundColor: '#97d3cd',
          zIndex: -5,
        }}
      />
      <TabBottom />
    </>
  );
};
