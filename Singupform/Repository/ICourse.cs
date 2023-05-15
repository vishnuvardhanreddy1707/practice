using Singupform.Models;
using System.Diagnostics;

namespace Singupform.Repository
{
    public interface ICourse
    {
        public Course AddCourse(Course course);
        public string DeleteCourse(int CourseId);
        
        public List<Course> GetAllCourses();
        public string UpdateCourse(Course course);
        public List<Course> SearchCourse(string CourseName);
    }
}
