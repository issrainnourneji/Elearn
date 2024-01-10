package tn.esprit.spring.elearn.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.spring.elearn.entities.Course;
import tn.esprit.spring.elearn.repositories.CourseRepository;

import java.util.List;
import java.util.Objects;

@AllArgsConstructor
@Service
public class CourseServiceImpl implements ICourseService{
    private final CourseRepository courseRepository;
    @Override
    public List<Course> retrieveAllCourse() {
        return courseRepository.findAll();
    }

    @Override
    public Course addorupCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public Course retrieveCourse(Integer idCourse) {
        return courseRepository.findById(idCourse).get();
    }

    @Override
    public void DeleteCourse(Integer idCourse) {
        courseRepository.deleteById(idCourse);
    }
}
