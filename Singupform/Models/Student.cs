using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Singupform.Models
{
    public class Student
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int StudentId { get; set; }
        public string FirstName { get; set;}
        public string LastName { get; set;}
        public string Email { get; set; }
        public long Phone { get; set;}
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string Gender { get; set;}
        public string State { get; set;}
        public string City { get; set;}
        public string Dob { get; set;}
        public ICollection<CourseEnrolls> CourseEnrolls { get; set; } // Navigation property
    }
}
