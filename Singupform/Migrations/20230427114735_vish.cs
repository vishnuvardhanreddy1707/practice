using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Singupform.Migrations
{
    public partial class vish : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DOB",
                table: "Students",
                newName: "Dob");

            migrationBuilder.RenameColumn(
                name: "LasttName",
                table: "Students",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "FirsttName",
                table: "Students",
                newName: "FirstName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Dob",
                table: "Students",
                newName: "DOB");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Students",
                newName: "LasttName");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "Students",
                newName: "FirsttName");
        }
    }
}
