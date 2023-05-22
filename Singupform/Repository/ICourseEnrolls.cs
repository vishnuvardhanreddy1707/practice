using Singupform.Models;

namespace Singupform.Repository
{
    public interface ICourseEnrolls
    {
        public CourseEnrolls AddEnroll(CourseEnrolls courseEnrolls);
        public List<CourseEnrolls> GetAllEnrolls();
    }
}
