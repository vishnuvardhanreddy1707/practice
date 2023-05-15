using Singupform.Models;
using Singupform.Repository;

namespace Singupform.Services
{
    public class CourseS
    {
        private ICourse _Course ;
        public CourseS(ICourse course)
        {
            _Course = course;
        }

        public Course AddCourse(Course course)
        {
            return _Course.AddCourse(course);
        }
    }
}
