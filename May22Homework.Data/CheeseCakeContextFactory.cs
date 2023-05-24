using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace May22Homework.Data
{
    public class CheeseCakeContextFactory : IDesignTimeDbContextFactory<CheeseCakeDbContext>
    {
        public CheeseCakeDbContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
               .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}May22Homework.Web"))
               .AddJsonFile("appsettings.json")
               .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CheeseCakeDbContext(config.GetConnectionString("ConStr"));
        }
    }
}
