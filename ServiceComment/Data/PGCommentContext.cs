using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ServiceComment.Models;

namespace ServiceComment.Data
{
    public class PGCommentContext : DbContext
    {
        public PGCommentContext(DbContextOptions<PGCommentContext> options)
    : base(options)
        {
        }

        public DbSet<PGComment> PGComments { get; set; }

        /* terug commenten bij terugzetten
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Entity<PGPost>().ToTable("PGPost");
        }
        */
    }
}
