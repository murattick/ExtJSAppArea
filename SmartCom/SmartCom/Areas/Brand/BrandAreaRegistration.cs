using System.Web.Mvc;

namespace SmartCom.Areas.Brand
{
    public class BrandAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Brand";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Brand_default",
                "Brand/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}