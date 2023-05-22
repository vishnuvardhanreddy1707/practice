using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Singupform.Migrations
{
    public partial class vish : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StudentName",
                table: "CoursesEnrolls");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "StudentName",
                table: "CoursesEnrolls",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
