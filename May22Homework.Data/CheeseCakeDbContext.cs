﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace May22Homework.Data
{
    public class CheeseCakeDbContext : DbContext 
    {
        private string _connectionString;

        public CheeseCakeDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
        public DbSet<CheeseCake> CheeseCakes { get; set; }
    }
}
