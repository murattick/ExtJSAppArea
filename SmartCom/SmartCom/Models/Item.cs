using SmartCom.Areas.Brand.Models;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

//класс товара
namespace SmartCom.Models
{
    public class Item
    {
        [Key]
        public int ItemID { get; set; } 
        public int Level { get; set; }
        public string Title { get; set; }
        public int CategoryID { get; set; }
        public int? BrandID { get; set; }
        
        //public virtual Brand Brand { get; set; }
        public virtual Category Category { get; set; }

    }
}