using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PostService.Models;

namespace PostService.Data
{
    public class SFPostContext : DbContext
    {
        public SFPostContext(DbContextOptions<SFPostContext> options)
    : base(options)
        {
        }

        public DbSet<SFPost> SFPosts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Entity<SFPost>().ToTable("SFPost");
        }

    }
}
