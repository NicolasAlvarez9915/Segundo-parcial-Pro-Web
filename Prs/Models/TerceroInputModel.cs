using System;
using Entity;

namespace Prs.Models
{
    public class TerceroInputModel
    {
        public string Id { get; set; }
        public string TipoId { get; set; }
        public string Nombre { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Pais { get; set; }
        public string Departamento { get; set; }
        public string Ciudad { get; set; }
    }

    public class TerceroViewModel: TerceroInputModel
    {
        public TerceroViewModel()
        {

        }
        public TerceroViewModel(Tercero tercero)
        {
            Id = tercero.Id;
            Nombre =  tercero.Nombre;
            Direccion = tercero.Direccion;
            Telefono = tercero.Telefono;
            Pais = tercero.Pais;
            Departamento = tercero.Departamento;
            Ciudad = tercero.Ciudad;
            TipoId = tercero.TipoId;
        }

    }
}
