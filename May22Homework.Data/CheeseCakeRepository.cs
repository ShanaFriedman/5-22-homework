using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace May22Homework.Data
{
    public class CheeseCakeRepository
    {
        private string _connectionString;
        public CheeseCakeRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddCake(CheeseCake c)
        {
            var context = new CheeseCakeDbContext(_connectionString);
            context.CheeseCakes.Add(c);
            context.SaveChanges();
        }
        public List<CheeseCake> GetAll()
        {
            var context = new CheeseCakeDbContext(_connectionString);
            return context.CheeseCakes.ToList();
        }
        public CheeseCake GetCheeseCakeById(int id)
        {
            var context = new CheeseCakeDbContext(_connectionString);
            return context.CheeseCakes.FirstOrDefault(c => c.Id == id); 
        }
    }
}
