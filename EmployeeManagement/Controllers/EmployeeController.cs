using EmployeeManagement.Context;
using EmployeeManagement.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.X509Certificates;

namespace EmployeeManagement.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly EmployeeDbContext context;

        public EmployeeController(EmployeeDbContext context)
        {
            this.context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult EmployeeList()
        {
            var data = context.Employees.ToList();
            return new JsonResult(data);
        }

        [HttpPost]
        public JsonResult AddEmployee(EmployeeModel employee)
        {
            //var emp = new EmployeeModel()
            //{
            //    Name = employee.Name,
            //    Email = employee.Email,
            //    Phone = employee.Phone,
            //    Salary = employee.Salary,
            //    Address = employee.Address,
            //};
            context.Employees.Add(employee);
            context.SaveChanges();
            return new JsonResult("Data is saved");
        }
    }
}
