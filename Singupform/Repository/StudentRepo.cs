using Microsoft.EntityFrameworkCore;
using Singupform.Data;
using Singupform.Models;

namespace Singupform.Repository
{
    public class StudentRepo : IStudent
    {
        private SingupFormDBContext _dbContext;
        public StudentRepo(SingupFormDBContext singupFormDBContext)
        {
            _dbContext= singupFormDBContext;
        }
        public Student AddStudent(Student student)
        {
            try
            {

                _dbContext.Students.Add(student);
                _dbContext.SaveChanges();
            }
            catch (Exception ex)
            {

            }

            return student;

        }

        public List<Student> GetAllStudents()
        {
            List<Student> students = null;
            try
            {
                students = _dbContext.Students.ToList();
            }
            catch (Exception ex)
            {

            }
            return students;


        }
    }
}
