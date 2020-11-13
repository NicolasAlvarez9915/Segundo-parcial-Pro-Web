using System;
using Entity;

namespace Prs.Models
{
    public class PagoInputModel
    {
        public string Codigo { get; set; }
        public string Tipo { get; set; }
        public DateTime Fecha { get; set; }
        public decimal Valor { get; set; }
        public decimal Iva { get; set; }
        public string IdTercero { get; set; }    
    }

    public class PagoViewModel: PagoInputModel
    {
        public PagoViewModel()
        {

        }
        public PagoViewModel(Pago pago)
        {
            Codigo = pago.Codigo;
            Fecha = pago.Fecha;
            IdTercero = pago.IdTercero;
            Iva = pago.Iva;
            Tipo = pago.Tipo;
            Valor = pago.Valor;
        }
    }
}
