using System;
using Microsoft.EntityFrameworkCore;
using HygieiaData.Models;

namespace HygieiaData
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            Database.EnsureCreated();
            AddMockedData();
        }

        protected override void OnModelCreating(ModelBuilder builder) { }

        private void AddMockedData()
        {
            Users.Add(new User()
            {
                Username = "ignars3",
                Password = "hello12345",
                Role = "Admin"
            });

            base.SaveChanges();
        }
    }
}
