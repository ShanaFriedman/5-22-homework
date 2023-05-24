﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace May22Homework.Data
{
    public class CheeseCake
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string BaseFlavor { get; set; }
        public string Toppings { get; set; }
        public string SpecialRequests { get; set; }
        public int Quantity { get; set; }
        public DateTime DateDelivery { get; set; }
        public decimal Total { get; set; }
    }
}
