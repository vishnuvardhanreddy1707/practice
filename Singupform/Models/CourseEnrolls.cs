using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Singupform.Models
{
    public class CourseEnrolls
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CEId { get; set; }
        [ForeignKey("Course")]
        public int CourseId { get;set; }   
        public Course Course { get; set; }
        public string CourseName { get; set; }
        public string FacultyName { get; set; }

        [ForeignKey("Student")]
        public int StudentId { get; set; }
        public Student Student { get; set; }  
       
    }
}
