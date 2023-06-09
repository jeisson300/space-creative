using System.ComponentModel.DataAnnotations;

namespace Back_creativeNet.Model.Dto
{
    public class IdeaDTO
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int SpaceCreative { get; set; }
    }
}
