using System;
using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;

namespace Logica
{
    public class TerceroService
    {
        private readonly PrsContext context;

        public TerceroService ( PrsContext context)
        {
            this.context = context;
        }

        public TerceroResponse Buscar(string identificacion)
        {
            Tercero tercero = context.Terceros.Find(identificacion);
            if(tercero == null)
            {
                return new TerceroResponse("No existe");
            }
            return new TerceroResponse(tercero);
        }

        public TerceroResponse Registrar(Tercero tercero)
        {
            try
            {
                context.Terceros.Add(tercero);
                context.SaveChanges();
                return new TerceroResponse(tercero);
            }
            catch (Exception e)
            {
                return new TerceroResponse($"Error de la aplicacion: {e.Message}");
            }
        }

        public List<Tercero> ConsultarTodos(){
            List<Tercero> terceros = context.Terceros.ToList();
            return terceros;
        }
        
    }

    public class TerceroResponse 
    {
        public TerceroResponse(Tercero tercero)
        {
            Error = false;
            this.tercero = tercero;
        }
        public TerceroResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Tercero tercero { get; set; }
    }
}
