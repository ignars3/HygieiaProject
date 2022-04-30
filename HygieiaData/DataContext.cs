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
        }

        protected override void OnModelCreating(ModelBuilder builder) { }
    }
}
