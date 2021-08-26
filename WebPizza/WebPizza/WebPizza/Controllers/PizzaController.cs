using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebPizza.Models;

namespace WebPizza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaController : ControllerBase
    {
        private static readonly List<PizzaAdd> pizza = new List<PizzaAdd>();

        [HttpGet]
        public List <PizzaAdd> GetList()
        {
            //List<PizzaAdd> type = new List<PizzaAdd>()
            //{
            //    new PizzaAdd {Id=1, Doug = "Чорне", Sauce ="Білий", Cheese="Горгонзола", Meat="Бекон", Vegetable = "Помідори"}
            //};
            return pizza;
        }
        [HttpPost]
        [Route ("add")]
        public void Create([FromBody] PizzaAdd p)
        {
            pizza.Add(p);
        }

        [HttpPost]
        [Route("delete")]
        public void Delete([FromBody] PizzaAdd p)
        {
            pizza.Remove(p);
        }

    }
}
