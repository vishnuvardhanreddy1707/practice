using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Singupform.Models;
using Singupform.Repository;
using Singupform.Services;

namespace Singupform.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseEnrollsController : ControllerBase
    {
        private CourseEnrollsS _CourseEnrollsS;
        public CourseEnrollsController(CourseEnrollsS courseEnrollsS)
        {
            _CourseEnrollsS = courseEnrollsS;
        }
        [HttpPost("AddEnroll")]
        public IActionResult AddEnroll(CourseEnrolls enrolls)
        {
            return Ok(_CourseEnrollsS.AddEnroll(enrolls));
        }
        [HttpGet("GetAllEnrolls()")]
        public List<CourseEnrolls> GetAllEnrolls()
        {
            return _CourseEnrollsS.GetAllEnrolls();
        }
    }
}
