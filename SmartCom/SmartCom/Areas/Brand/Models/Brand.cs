using SmartCom.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SmartCom.Areas.Brand.Models
{
    public class Brand
    {
        public int BrandID { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Item> Items { get; set; }
    }
}