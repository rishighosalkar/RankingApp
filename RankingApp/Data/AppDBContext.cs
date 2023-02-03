using Microsoft.EntityFrameworkCore;
using RankingApp.Models;

namespace RankingApp.Data
{
    public class AppDBContext: DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
        {

        }

        public DbSet<ItemModel> Items { get; set; }   
    }
}
