package tn.esprit.spring.khaddem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.spring.khaddem.entities.Course;

public interface CourseRepository extends JpaRepository<Course,Integer> {
}
