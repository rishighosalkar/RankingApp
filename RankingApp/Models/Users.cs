using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace RankingApp.Models
{
    [Index(nameof(email), nameof(phoneNumber), IsUnique =true)]
    public class Users
    {
        [Key]
        public int id { get; set; }
        [Key]
        public String email { get; set; }
        public String firstName { get; set; }
        public String lastName { get; set; }
        [Required]
        public String password { get; set; }
        [Required]
        public String phoneNumber { get; set; } 
    }
}
