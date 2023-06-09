using AutoMapper;
using Back_creativeNet.Model;
using Back_creativeNet.Model.Dto;
using Back_creativeNet.Repository.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Back_creativeNet.Controllers
{
    [Route("api/idea")]
    [ApiController]
    public class IdeaController : ControllerBase
    {
        private readonly IIdea _idea;
        private readonly IMapper _mapper;
        public IdeaController(IIdea idea, IMapper mapper)
        {
            this._idea = idea;
            _mapper = mapper;
        }

        [HttpGet("{id:int}")]
        [Authorize(Roles = "ADMIN,USER")]
        public async Task<ActionResult<List<Idea>>> GetAllIdea(int id)
        {
            List<Idea> listIdea = new();
            try
            {
                listIdea = await _idea.GetAllAsync(x => x.SpaceCreative == id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return Ok(new { list = listIdea });
        }

        [HttpPost]
        [Authorize(Roles = "ADMIN,USER")]
        public async Task<IActionResult> CreateIdea([FromBody] IdeaDTO ideaDto)
        {
            try
            {
                Idea idea = _mapper.Map<Idea>(ideaDto);
                await _idea.CreateAsync(idea);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return StatusCode(200);
        }
    }
}
