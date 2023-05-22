using Microsoft.EntityFrameworkCore;
using Singupform.Models;

namespace Singupform.Data
{
    public class SingupFormDBContext : DbContext
    {
        public SingupFormDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<CourseEnrolls> CoursesEnrolls { get;set; }
    }
}
