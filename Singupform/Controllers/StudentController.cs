using Microsoft.AspNetCore.Mvc;
using Singupform.Models;
using Singupform.Services;

namespace Singupform.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {

        private StudentS studentS;
        public StudentController(StudentS _studentS)
        {
            studentS = _studentS;
        }
        [HttpPost("AddStudent")]
        public IActionResult Addpassenger(Student passenger)
        {   
            return Ok(studentS.AddStudent(passenger));
        }
        [HttpGet("GetAllStudents()")]
        public List<Student> GetAllStudentss()
        {
            return studentS.GetAllStudents();
        }
    }
}
