using AutoMapper;
using Back_creativeNet.Model;
using Back_creativeNet.Model.Dto;
using Back_creativeNet.Repository.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Back_creativeNet.Controllers
{
    [Route("api/sc")]
    public class SpaceCreativeController : ControllerBase
    {
        private readonly ISpaceCreative _spc;
        private readonly IMapper _mapper;

        public SpaceCreativeController(ISpaceCreative spc, IMapper mapper)
        {
            _spc = spc;
            _mapper = mapper;
        }

        [HttpGet("{id:int}")]
        [Authorize(Roles = "ADMIN,USER")]
        public async Task<ActionResult<List<SpaceCreative>>> GetAllSpaceCreative(int id)
        {
            List<SpaceCreative> listSpc = new();
            try
            {
                listSpc = await _spc.GetAllAsync(x => x.User == id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return Ok(new { list = listSpc });
        }


        [HttpPost]
        [Authorize(Roles = "ADMIN,USER")]
        public async Task<IActionResult> CreateSpaceCretive([FromBody] SpaceCreativeDTO spcDto)
        {
            try
            {
                SpaceCreative spc = _mapper.Map<SpaceCreative>(spcDto);
                await _spc.CreateAsync(spc);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return StatusCode(200);
        }

    }
}
