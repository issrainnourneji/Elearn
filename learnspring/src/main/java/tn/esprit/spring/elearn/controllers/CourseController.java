package tn.esprit.spring.elearn.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.spring.elearn.entities.Course;
import tn.esprit.spring.elearn.services.CourseServiceImpl;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("")
@AllArgsConstructor
@RestController
public class CourseController {
    private final CourseServiceImpl courseService;
    @PostMapping("/add")
    public Course addCource (@RequestBody Course course){
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

    @PutMapping("/update")
    public Course updateCource (@RequestBody Course course){
        return  courseService.addorupCourse(course);
    }

    @DeleteMapping("/delete/{id}")
    public  void  deleteCourse (@PathVariable("id") Integer idCourse){
        courseService.DeleteCourse(idCourse);
    }

}
