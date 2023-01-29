import {View} from 'react-native';
import {Categories} from '../components/Categories';
import {Courses} from '../components/Courses';
import {GreetingUser} from '../components/GreetingUser';
import {Topics} from '../components/Topics';
import {globalStyles} from '../theme/global';

export const ScreenExplore = () => {
  return (
    <>
      <View style={globalStyles.backgroundApp} />
      <GreetingUser nameUser="Ander" />
      <Courses />
      <Categories />
      <Topics />
    </>
  );
};
