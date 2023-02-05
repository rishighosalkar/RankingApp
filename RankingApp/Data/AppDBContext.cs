using Microsoft.EntityFrameworkCore;
using RankingApp.Models;

namespace RankingApp.Data
{
    public class AppDBContext: DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Users>()
                  .HasKey(m => new { m.id, m.email });
        }
        public DbSet<ItemModel> Items { get; set; }   
        public DbSet<Users> Users { get; set; }
    }
}
