using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace SmartCom.Areas.Brand.Models
{
    public class BrandDbInit: DropCreateDatabaseAlways<BrandContext>
    {
        protected override void Seed(BrandContext context)
        {
            context.Brands.Add(new Brand { Name = "Name1" });
            context.Brands.Add(new Brand { Name = "Name2" });
            base.Seed(context);
        }
    }
}