using System;
using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Prs.Models;

namespace Prs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class PagoController: ControllerBase
    {
        private readonly PagoService service;

        public PagoController(PrsContext context){
            service = new PagoService( context);
        }

        [HttpPost]
        public ActionResult<PagoViewModel> Post(PagoInputModel pagoInput)
        {
            Pago pago = MapearPago(pagoInput);
            var response = service.Registrar(pago);
            return Ok(response.pago);
        }

        [HttpGet]
        public IEnumerable<PagoViewModel> Get()
        {
            return service.ConsultarTodos().Select(p => new PagoViewModel(p));
        }

        [HttpGet("{codigo}")]
        public ActionResult<PagoViewModel> get(string codigo)
        {
            var  response = service.Buscar(codigo);
            if(response.Error)
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.pago);
        }
        private Pago MapearPago(PagoInputModel pagoInput)
        {
            var pago = new Pago
            {
                Codigo = pagoInput.Codigo,
                Fecha = pagoInput.Fecha,
                IdTercero = pagoInput.IdTercero,
                Iva = pagoInput.Iva,
                Tipo = pagoInput.Tipo,
                Valor = pagoInput.Valor
            };
            return pago;
        }
    }
}
