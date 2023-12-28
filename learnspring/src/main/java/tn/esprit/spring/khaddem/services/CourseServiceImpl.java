package tn.esprit.spring.khaddem.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.spring.khaddem.entities.Course;
import tn.esprit.spring.khaddem.repositories.CourseRepository;

import java.util.List;
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
}
