using SmartCom.Areas.Brand.Models;
using SmartCom.Models;
using System.Data.Entity;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace SmartCom.Controllers
{
    public class HomeController : Controller
    {
        public BrandContext db = new BrandContext();

        public async Task<JsonResult> Index(Brand brand)
        {
            var data = await db.Brands.ToListAsync();
            return Json(data, JsonRequestBehavior.AllowGet);
        }

       
    }
}