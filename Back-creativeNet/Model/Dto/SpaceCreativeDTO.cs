using System.ComponentModel.DataAnnotations;

namespace Back_creativeNet.Model.Dto
{
    public class SpaceCreativeDTO
    {
        [Required]
        public string Description { get; set; }
        [Required]
        public int User { get; set; }
    }
}
