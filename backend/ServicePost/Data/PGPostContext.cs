using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ServicePost.Models;

namespace ServicePost.Data
{
    public class PGPostContext : DbContext
    {
        public PGPostContext(DbContextOptions<PGPostContext> options)
    : base(options)
        {
        }

        public DbSet<PGPost> PGPosts { get; set; }

        /* terug commenten bij terugzetten
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Entity<PGPost>().ToTable("PGPost");
        }
        */
    }
}
