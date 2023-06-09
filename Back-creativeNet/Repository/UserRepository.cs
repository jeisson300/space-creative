using Back_creativeNet.DB;
using Back_creativeNet.Model;
using Back_creativeNet.Model.DTO;
using Back_creativeNet.Repository.IRepository;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Back_creativeNet.Repository
{
    public class UserRepository : Repository<User> , IUser
    {
        private readonly ContextDB _db;
        private DbSet<Role> _role;
        
        private string secretKey;
        public UserRepository(ContextDB db, IConfiguration conf): base(db)
        {
              _db = db;
            _role = db.Set<Role>();
            secretKey = conf.GetValue<string>("ApiSettings:Secret");
        }


        public async Task<string> GenerateToken(User user)
        {
            string role = await GetRole(user);
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secretKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString()),
                    new Claim(ClaimTypes.Role, role.ToString())
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public async Task<string> GetRole(User user)
        {
            Role role = await  _role.FirstOrDefaultAsync(x => x.Id == user.Role);
            return role.description;
        }
    }
}
