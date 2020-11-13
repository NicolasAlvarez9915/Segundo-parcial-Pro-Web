using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Tercero
    {
        /*
         tipo de documento
(Nit o CC) número de identificación, nombre del tercero, dirección, teléfono, país, departamento y
ciudad.

        */
        [Key]
        [Column(TypeName = "nvarchar(11)")]
        public string Id { get; set; }
        
        [Column(TypeName = "nvarchar(50)")]
        public string Nombre { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Direccion { get; set; }

        [Column(TypeName = "nvarchar(11)")]
        public string Telefono { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Pais { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Departamento { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Ciudad { get; set; }
    }
}
