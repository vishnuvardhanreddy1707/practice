using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Singupform.Models;
using Singupform.Services;
using System.Diagnostics;

namespace Singupform.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private CourseS courseS;
        public CourseController(CourseS _courseS)
        {
            courseS = _courseS;
        }

        [HttpPost("AddCourses")]
        public IActionResult AddCourse(Course course)
        {
            return Ok(courseS.AddCourse(course));
        }
        [HttpDelete("DeleteCourse")]
        public IActionResult DeleteCourse(int CourseId)
        {
            return Ok(courseS.DeleteCourse(CourseId));
        }
        [HttpPut("UpdateCourse")]
        public IActionResult UpdateCourse(Course course)
        {
            return Ok(courseS.UpdateCourse(course));
        }
       

        [HttpGet("GetAllCourses")]
        public List<Course> GetAllCourses()
        {
            return courseS.GetAllCourses();
        }

        [HttpPost("searchCourse")]
        public List<Course> SearchCourse(string CourseName)
        {
            return courseS.SearchCourse(CourseName);
        }
    }
}
