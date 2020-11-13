using System;
using Datos;
using Entity;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Prs.Models;

namespace Prs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TerceroController: ControllerBase
    {
        private readonly TerceroService service;

        public TerceroController(PrsContext context){
            service = new TerceroService( context);
        }

        [HttpGet("{identificacion}")]
        public ActionResult<TerceroViewModel> get(string identificacion)
        {
            var  response = service.Buscar(identificacion);
            if(response.Error)
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.tercero);
        }

        [HttpPost]
        public ActionResult<TerceroViewModel> Post(TerceroInputModel terceroInput)
        {
            Tercero tercero = MapearTercero(terceroInput);
            var response = service.Registrar(tercero);
            return Ok(response.tercero);
        }

        private Tercero MapearTercero(TerceroInputModel terceroInput)
        {
            var tercero = new Tercero
            {
                Ciudad = terceroInput.Ciudad,
                Departamento = terceroInput.Departamento,
                Direccion = terceroInput.Direccion,
                Id = terceroInput.Id,
                Nombre = terceroInput.Nombre,
                Pais = terceroInput.Pais,
                Telefono = terceroInput.Telefono,
                TipoId = terceroInput.TipoId
            };
            return tercero;
        }
    }
}
