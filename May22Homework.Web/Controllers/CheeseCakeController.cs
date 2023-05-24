using May22Homework.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace May22Homework.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheeseCakeController : ControllerBase
    {
        private string _connectionString;

        public CheeseCakeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("AddCheeseCake")]
        public void AddPerson(CheeseCake c)
        {
            var repo = new CheeseCakeRepository(_connectionString);
            repo.AddCake(c);
        }
        [HttpGet]
        [Route("GetAll")]
        public List<CheeseCake> GetPeople()
        {
            var repo = new CheeseCakeRepository(_connectionString);
            return repo.GetAll();
        }
        [HttpGet]
        [Route("getcakebyid")]
        public CheeseCake GetCheeseCakeById(int id)
        {
            var repo = new CheeseCakeRepository(_connectionString);
            return repo.GetCheeseCakeById(id);
        }
        [HttpPost]
        [Route("AddCake")]
        public void AddCar(CheeseCake c)
        {
            var repo = new CheeseCakeRepository(_connectionString);
            repo.AddCake(c);
        }
    }
}
