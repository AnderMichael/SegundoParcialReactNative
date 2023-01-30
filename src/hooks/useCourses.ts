import React, {useState} from 'react';
import {coursesInstance} from '../services/coursesInstance';
import {course} from '../interfaces/iCourse';

const BASE_URL =
  'https://pixabay.com/api/?key=33223559-00a9ec9903553a9c98b554809&q=yellow+flowers&image_type=photo';

export const useCourses = () => {
  const [courses, setCourses] = useState<course[]>([]);

  const loadCourses = async () => {
    const responseCourses = await coursesInstance.get(BASE_URL);
    setCourses(responseCourses.data.hits.map(course => makeCourses(course)));
  };

  const makeCourses = (courseFlat: any) => {
    const courseFinal: course = {
      id: courseFlat.id.toString(),
      url: courseFlat.largeImageURL,
      like: courseFlat.likes > 1500,
      user: courseFlat.user,
      prize: courseFlat.likes,
      name: 'Course N° ' + courseFlat.id.toString().slice(5),
    };
    return courseFinal;
  };

  React.useEffect(() => {
    loadCourses();
  }, []);
  return {
    loadCourses,
    courses,
  };
};
