using System.ComponentModel.DataAnnotations;

namespace RankingApp.Models
{
    public class ItemModel
    {
        [Key]
        public int Id { get; set; }
        public String Title { get; set; }
        public int ImageId { get; set; }
        public int Ranking { get; set; }
        public int ItemType { get; set; }
    }
}
