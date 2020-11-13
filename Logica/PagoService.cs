using System;
using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;

namespace Logica
{
    public class PagoService
    {
        private readonly PrsContext context;

        public PagoService ( PrsContext context)
        {
            this.context = context;
        }
        public PagoResponse Buscar(string codigo)
        {
            Pago pago = context.Pagos.Find(codigo);
            if(pago == null)
            {
                return new PagoResponse("No existe");
            }
            return new PagoResponse(codigo);
        }

        public PagoResponse Registrar(Pago pago)
        {
            try
            {
                context.Pagos.Add(pago);
                context.SaveChanges();
                return new PagoResponse(pago);
            }
            catch (Exception e)
            {
                return new PagoResponse($"Error de la aplicacion: {e.Message}");
            }
        }

        public List<Pago> ConsultarTodos(){
            List<Pago> pagos = context.Pagos.ToList();
            return pagos;
        }
    }

    public class PagoResponse 
    {
        public PagoResponse(Pago pago)
        {
            Error = false;
            this.pago = pago;
        }
        public PagoResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Pago pago { get; set; }
    }
}
