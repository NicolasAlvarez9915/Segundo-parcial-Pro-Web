using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Pago
    {
        /*
        el tipo de pago (Gastos Administrativos, Gastos Financieros, Gastos Legales, Gastos de
Viajes y transporte, Honorarios, Arrendamiento, Impuestos y retenciones), la fecha del pago (input
type="date”), el valor del pago y el valor del IVA del pago que puede ser cero en caso que el pago no
lo contemple
        */

        [Key]
        [Column(TypeName = "nvarchar(11)")]
        public string Codigo { get; set; }

        [Column(TypeName = "nvarchar(30)")]
        public string Tipo { get; set; }

        [Column(TypeName = "Date")]
        public DateTime Fecha { get; set; }

        [Column(TypeName = "Real")]
        public decimal Valor { get; set; }

        [Column(TypeName = "Real")]
        public decimal Iva { get; set; }

        [Column(TypeName = "nvarchar(11)")]
        public string IdTercero { get; set; }        
    }
}
