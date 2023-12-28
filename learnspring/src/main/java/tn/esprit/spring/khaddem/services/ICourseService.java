package tn.esprit.spring.khaddem.services;

import tn.esprit.spring.khaddem.entities.Course;

import java.util.List;

public interface ICourseService {
    List<Course> retrieveAllCourse();
    Course addorupCourse(Course course);
    Course retrieveCourse(Integer idCourse);

}
