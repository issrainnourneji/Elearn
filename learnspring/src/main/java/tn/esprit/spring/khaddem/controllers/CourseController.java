package tn.esprit.spring.khaddem.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.spring.khaddem.entities.Course;
import tn.esprit.spring.khaddem.services.CourseServiceImpl;

import java.util.List;

@AllArgsConstructor
@RestController
public class CourseController {
    private final CourseServiceImpl courseService;
    @PostMapping("/add")
    public Course addOrupdateCource (@RequestBody Course course){
        return  courseService.addorupCourse(course);
    }

    @GetMapping("/all")
    public List<Course> getCourses() {
        return courseService.retrieveAllCourse();

    }

    @GetMapping("/get/{id}")
    @ResponseBody
    public Course retrieveCourse(@PathVariable("id") Integer idCourse) {
        return courseService.retrieveCourse(idCourse);
    }

}
