using Singupform.Models;

namespace Singupform.Repository
{
    public interface IStudent
    {
        public Student AddStudent(Student student);
        public List<Student> GetAllStudents();
    }
}
