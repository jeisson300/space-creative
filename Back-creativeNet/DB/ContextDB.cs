using Back_creativeNet.Model;
using Microsoft.EntityFrameworkCore;

namespace Back_creativeNet.DB
{
    public class ContextDB : DbContext
    {

        public ContextDB(DbContextOptions<ContextDB> options):base(options)
        {
            
        }

        // HERE WRITEN MODELS YOU WANT MAPPEND IN DATABASE
        // FOR EXAMPLE
        public DbSet<User> Users { get; set; }
        public DbSet<SpaceCreative> SpaceCreative { get; set; }
        public DbSet<Idea> Idea { get; set; }

        public DbSet<Role> Role { get; set; }
    }
}
