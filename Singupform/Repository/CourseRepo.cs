using Microsoft.EntityFrameworkCore;
using Singupform.Data;
using Singupform.Models;
using Singupform.Services;
using System.Diagnostics;

namespace Singupform.Repository
{
    public class CourseRepo : ICourse
    {
        private SingupFormDBContext _dbContext;
        public CourseRepo(SingupFormDBContext singupFormDBContext)
        {
            _dbContext = singupFormDBContext;
        }
        

        public Course AddCourse(Course course)
        {
            try
            {

                _dbContext.Courses.Add(course);
                _dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
            }

            return course;
        }

        public string DeleteCourse(int CourseId)
        {
            string Result = string.Empty;
            Course delete;

            try
            {
                delete = _dbContext.Courses.Find(CourseId);

                if (delete != null)
                {
                    _dbContext.Courses.Remove(delete);

                    _dbContext.SaveChanges();
                    Result = "200";
                }
            }
            catch (Exception ex)
            {
                Result = "400";
            }
            finally
            {
                delete = null;
            }
            return Result;
        }

        public List<Course> GetAllCourses()
        {
            List<Course> cources = null;
            try
            {
                cources = _dbContext.Courses.ToList();
            }
            catch (Exception ex)
            {

            }
            return cources;
        }

        public List<Course> SearchCourse(string CourseName)
        {
            List<Course> courses = null;
            var searchCourse = _dbContext.Courses.Where(v => v.CourseName == CourseName );
            try
            {
                if (searchCourse != null)
                {

                    courses = searchCourse.ToList();
                    return courses;
                }
            }
            catch (Exception ex)
            {
                throw;
            }
            return courses;

        }

        public string UpdateCourse(Course course)
        {

            string stCode = string.Empty;

            try
            {

                _dbContext.Entry(course).State = EntityState.Modified;
                _dbContext.SaveChanges();
                //stCode = "200";

            }
            catch (Exception ex)
            {
                stCode = "400";
            }
            return stCode;
        }





        /* public Course UpdateCourse(int CourseId, Course course)
         {
             string stCode = string.Empty;
             var courses = _dbContext.Courses.FirstOrDefault(q => q.CourseId == CourseId);

             try
             {
                 if (courses != null)
                 {
                     courses.CourseName = course.CourseName;
                     courses.FacultyName = course.FacultyName;
                     courses.Courseprice = course.Courseprice;
                 }


                 /*Course cor=_dbContext.Courses.AsNoTracking().FirstOrDefault(c => c.CourseId == course.CourseId);
                 if(cor != null)
                 {
                     _dbContext.Courses.Update(course);
                     _dbContext.SaveChanges();
                     stCode = "200";

                 }*/



        /* _dbContext.Entry(course).State = EntityState.Modified;
         _dbContext.SaveChanges();
        //stCode = "200";

    }
    catch (Exception ex)
    {
        stCode = "400";
    }
    return courses;
}*/
    }
}
