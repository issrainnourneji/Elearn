package tn.esprit.spring.elearn.services;

import tn.esprit.spring.elearn.entities.Course;

import java.util.List;

public interface ICourseService {
    List<Course> retrieveAllCourse();
    Course addorupCourse(Course course);
    Course retrieveCourse(Integer idCourse);
    public void DeleteCourse(Integer idCourse);

}
