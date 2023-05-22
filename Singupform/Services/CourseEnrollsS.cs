using Singupform.Models;
using Singupform.Repository;

namespace Singupform.Services
{
    public class CourseEnrollsS
    {
        private ICourseEnrolls _enroll;
        public CourseEnrollsS(ICourseEnrolls enroll)
        {
            _enroll = enroll;
        }
        public CourseEnrolls AddEnroll(CourseEnrolls enrolls)
        {
            return _enroll.AddEnroll(enrolls);
        }
        public List<CourseEnrolls> GetAllEnrolls()
        {
            return _enroll.GetAllEnrolls();
        }
    }
}
