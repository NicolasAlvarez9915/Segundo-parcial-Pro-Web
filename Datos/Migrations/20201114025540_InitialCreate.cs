using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pagos",
                columns: table => new
                {
                    Codigo = table.Column<string>(type: "nvarchar(11)", nullable: false),
                    Tipo = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    Fecha = table.Column<DateTime>(type: "Date", nullable: false),
                    Valor = table.Column<float>(type: "Real", nullable: false),
                    Iva = table.Column<float>(type: "Real", nullable: false),
                    IdTercero = table.Column<string>(type: "nvarchar(11)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pagos", x => x.Codigo);
                });

            migrationBuilder.CreateTable(
                name: "Terceros",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(11)", nullable: false),
                    TipoId = table.Column<string>(type: "nvarchar(11)", nullable: true),
                    Nombre = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Direccion = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Telefono = table.Column<string>(type: "nvarchar(11)", nullable: true),
                    Pais = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    Departamento = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    Ciudad = table.Column<string>(type: "nvarchar(20)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Terceros", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pagos");

            migrationBuilder.DropTable(
                name: "Terceros");
        }
    }
}
