using EmployeeManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.Context
{
    public class EmployeeDbContext: DbContext
    {
        public EmployeeDbContext() { }
            
        public EmployeeDbContext(DbContextOptions dbContext) : base(dbContext) { }

        public DbSet<EmployeeModel> Employees { get; set; }
    }
}
