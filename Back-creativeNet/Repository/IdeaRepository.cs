using Back_creativeNet.DB;
using Back_creativeNet.Model;
using Back_creativeNet.Repository.IRepository;

namespace Back_creativeNet.Repository
{
    public class IdeaRepository: Repository<Idea>, IIdea
    {
        private readonly ContextDB _db;
        public IdeaRepository(ContextDB db): base(db)
        {
            _db = db;
        }
    }
}
