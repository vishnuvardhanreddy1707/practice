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

        public List<Course> GetAllCourses()
        {
            return _Course.GetAllCourses();
        }
        public List<Course> SearchCourse(string CourseName)
        {
            return _Course.SearchCourse(CourseName);
        }

        public string UpdateCourse(Course course)
        {
            return _Course.UpdateCourse(course);

        }

        public string DeleteCourse(int CourseID)
        {
            return _Course.DeleteCourse(CourseID);
        }
    }
}
