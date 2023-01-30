import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useCourses} from '../hooks/useCourses';
import {globalStyles} from '../theme/global';
import {Section} from './Section';
import {course} from '../interfaces/iCourse';
import SimpleEmoji from 'simple-react-native-emoji';
import Icon from 'react-native-vector-icons/Ionicons';
export const Courses = () => {
  const {loadCourses, courses} = useCourses();
  return (
    <>
      <Section titleSection="Popular course" flexSection={1} />
      <FlatList
        data={courses}
        keyExtractor={course => course.id}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        numColumns={1}
        renderItem={({item: course}) => CourseCard(course)}
        onEndReached={loadCourses}
        onEndReachedThreshold={0.7}
        style={{marginLeft: 17, height: '20%'}}
      />
    </>
  );
};

const CourseCard = (resCourse: course) => {
  let colorTextChip, titleChip, colorBackgroundChip;
  if (resCourse.like) {
    colorTextChip = '#fda5a8';
    titleChip = 'Best-Seller';
    colorBackgroundChip = '#fce2ea';
  } else {
    colorTextChip = '#05a8b7';
    titleChip = 'Recomended';
    colorBackgroundChip = '#dcf3f4';
  }
  return (
    <>
      <View
        style={{
          marginRight: 22,
          height: 80,
          width: 150,
        }}>
        <Image
          source={{uri: resCourse.url}}
          style={{height: 80, width: 150, borderRadius: 20}}
        />
        <Text style={styles.titleCourse}>{resCourse.name}</Text>
        <Text style={styles.userCourse}>
          {<Icon name="person-circle-sharp" size={16} color="grey" />}{' '}
          {resCourse.user}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.prizeCourse}>${resCourse.prize}</Text>
          <Text
            style={{
              ...styles.opinionCourse,
              color: colorTextChip,
              borderColor: colorTextChip,
              backgroundColor: colorBackgroundChip,
            }}>
            {titleChip}
          </Text>
        </View>
      </View>
      <View style={styles.stars}>
        <Text style={{fontWeight: 'bold'}}>
          <SimpleEmoji shortName="star" style={{fontSize: 10}} /> 4.8
        </Text>
      </View>
      <View style={styles.heart}>
        <SimpleEmoji shortName="heart" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleCourse: {
    fontSize: 17,
    color: 'black',
    marginTop: 5,
    fontWeight: 'bold',
  },
  userCourse: {
    fontSize: 14,
    color: 'grey',
    marginTop: 5,
  },
  prizeCourse: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0ca2ab',
    marginTop: 5,
    textAlignVertical: 'center',
  },
  opinionCourse: {
    marginLeft: 8,
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 5,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderWidth: 0.5,
    borderRadius: 20,
    width: 80,
    height: 20,
  },
  stars: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 7,
    top: 7,
    backgroundColor: 'white',
    width: '30%',
    height: '15%',
    borderRadius: 5,
  },
  heart: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 35,
    top: 7,
    backgroundColor: 'white',
    width: '15%',
    height: '15%',
    borderRadius: 5,
  },
});
