import React, {useState} from 'react';
import {coursesInstance} from '../services/coursesInstance';

const BASE_URL =
  'https://pixabay.com/api/?key=33223559-00a9ec9903553a9c98b554809&q=yellow+flowers&image_type=photo';

export const useCourses = () => {
  const [courses, setCourses] = useState([]);

  const loadCourses = async () => {
    const responseCourses = await coursesInstance.get(BASE_URL);
    setCourses(responseCourses.data.hits.map(course => makeCourses(course)));
  };

  const makeCourses = (courseFlat: any) => {
    return {
      id: courseFlat.id,
      url: courseFlat.largeImageURL,
      like: courseFlat.likes > 2000,
      user: courseFlat.user,
      prize: courseFlat.likes,
    };
  };

  React.useEffect(() => {
    loadCourses();
  }, []);
  return {
    loadCourses,
    courses,
  };
};
