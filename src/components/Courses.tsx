import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useCourses} from '../hooks/useCourses';
import {globalStyles} from '../theme/global';
import {Section} from './Section';

export const Courses = () => {
  const {loadCourses, courses} = useCourses();
  return (
    <>
      <Section titleSection="Popular course" flexSection={1}></Section>
      <FlatList
        data={courses}
        keyExtractor={course => course.id.toString()}
        horizontal={true}
        numColumns={1}
        renderItem={({item: course}) => (
          <View style={{marginRight: 5}}>
            <Image
              source={{uri: course.url}}
              style={{height: 150, width: 150, borderRadius: 20}}
            />
          </View>
        )}
        onEndReached={loadCourses}
        onEndReachedThreshold={0.7}
        style={{marginLeft: 17, height: '17%'}}
      />
    </>
  );
};
