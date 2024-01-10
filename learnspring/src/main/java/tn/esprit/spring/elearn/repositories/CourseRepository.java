package tn.esprit.spring.elearn.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.spring.elearn.entities.Course;

public interface CourseRepository extends JpaRepository<Course,Integer> {
}
