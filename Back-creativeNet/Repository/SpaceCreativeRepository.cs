using Back_creativeNet.DB;
using Back_creativeNet.Model;
using Back_creativeNet.Repository.IRepository;

namespace Back_creativeNet.Repository
{
    public class SpaceCreativeRepository: Repository<SpaceCreative>, ISpaceCreative
    {
        private readonly ContextDB _db;
        public SpaceCreativeRepository(ContextDB db): base(db) 
        {
            _db = db;
        }
    }
}
