﻿// <auto-generated />
using System;
using Datos;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Datos.Migrations
{
    [DbContext(typeof(PrsContext))]
    [Migration("20201113042154_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Entity.Pago", b =>
                {
                    b.Property<string>("Codigo")
                        .HasColumnType("nvarchar(11)");

                    b.Property<DateTime>("Fecha")
                        .HasColumnType("Date");

                    b.Property<string>("IdTercero")
                        .HasColumnType("nvarchar(11)");

                    b.Property<float>("Iva")
                        .HasColumnType("Real");

                    b.Property<string>("Tipo")
                        .HasColumnType("nvarchar(30)");

                    b.Property<float>("Valor")
                        .HasColumnType("Real");

                    b.HasKey("Codigo");

                    b.ToTable("Pagos");
                });

            modelBuilder.Entity("Entity.Tercero", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(11)");

                    b.Property<string>("Ciudad")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Departamento")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Direccion")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Nombre")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Pais")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Telefono")
                        .HasColumnType("nvarchar(11)");

                    b.HasKey("Id");

                    b.ToTable("Terceros");
                });
#pragma warning restore 612, 618
        }
    }
}