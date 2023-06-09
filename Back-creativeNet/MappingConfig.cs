using AutoMapper;
using Back_creativeNet.Model;
using Back_creativeNet.Model.Dto;
using Back_creativeNet.Model.DTO;

namespace Back_creativeNet
{
    public class MappingConfig : Profile
    {
        //this is useful for convert dtos to models
        // here an example
        // model: Bill; DTO: BillDTO
        //CreateMap<Bill,BillDTO>();

        public MappingConfig()
        {
            CreateMap<User, UserRequestDTO>();
            CreateMap<UserRequestDTO, User>();

            CreateMap<SpaceCreative, SpaceCreativeDTO>();
            CreateMap<SpaceCreativeDTO, SpaceCreative>();

            CreateMap<Idea, IdeaDTO>();
            CreateMap<IdeaDTO, Idea>();
        }

    }
}
