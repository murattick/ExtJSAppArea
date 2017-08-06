using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SmartCom.Areas.Brand.Models
{
    public class BrandContext: DbContext
    {
        public DbSet<Brand> Brands { get; set; }
    }
}