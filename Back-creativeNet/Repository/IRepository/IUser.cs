using Back_creativeNet.Model;
using Back_creativeNet.Model.DTO;

namespace Back_creativeNet.Repository.IRepository
{
    public interface IUser: IRepository<User>
    {
         Task<string>  GenerateToken(User user);


         Task<string> GetRole(User user);
    }
}
