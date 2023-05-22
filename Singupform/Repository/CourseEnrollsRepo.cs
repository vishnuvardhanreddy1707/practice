using Singupform.Data;
using Singupform.Models;
using Singupform.Services;

namespace Singupform.Repository
{
    public class CourseEnrollsRepo:ICourseEnrolls
    {
        private SingupFormDBContext _dbContext;
        public CourseEnrollsRepo(SingupFormDBContext singupFormDBContext)
        {
            _dbContext = singupFormDBContext;
        }

        public CourseEnrolls AddEnroll(CourseEnrolls courseEnrolls)
        {
            try
            {

                _dbContext.CoursesEnrolls.Add(courseEnrolls);
                _dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
            }

            return courseEnrolls;
        }

        public List<CourseEnrolls> GetAllEnrolls()
        {
            List<CourseEnrolls> enrolls = null;
            try
            {
                enrolls = _dbContext.CoursesEnrolls.ToList();
            }
            catch (Exception ex)
            {

            }
            return enrolls;
        }
    }
}
