using System;
using Entity;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class PrsContext: DbContext
    {
        public PrsContext(DbContextOptions options): base(options)
        {
        }

        public DbSet<Tercero> Terceros { get; set; }

        public DbSet<Pago> Pagos { get; set; }
    }
}
