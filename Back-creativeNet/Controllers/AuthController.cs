using Back_creativeNet.Model;
using Back_creativeNet.Model.DTO;
using Back_creativeNet.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace Back_creativeNet.Controllers
{
    [ApiController]
    [Route("api/Auth")]
    public class AuthController : ControllerBase
    {

        private readonly IUser _user;
        public AuthController(IUser user)
        {
            this._user = user;
        }

        [HttpPost]
        public async Task<ActionResult<User>> IsAuth([FromBody] UserRequestDTO credentials)
        {
            User userResp = new();
            string token = "";
            try
            {
                if (credentials == null)
                {
                    return BadRequest("warning, write credentials");
                }

                userResp = await _user.GetAsync(x => x.Password.Equals(credentials.Password) && x.Email.Equals(credentials.Email));
                if (userResp == null)
                {
                    return BadRequest("the user no exists");
                }
                else
                {
                    token = await _user.GenerateToken(userResp);
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return Ok(new { user = userResp,  token });
        }
    }
}
