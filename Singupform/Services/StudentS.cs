using Singupform.Models;
using Singupform.Repository;

namespace Singupform.Services
{
    public class StudentS
    {
        private IStudent _Student; 
        public StudentS(IStudent student)
        {
            _Student= student;
        }
        public Student AddStudent(Student student)
        {
            return _Student.AddStudent(student);
        }
        public List<Student> GetAllStudents()
        {
            return _Student.GetAllStudents();
        }
    }
}
