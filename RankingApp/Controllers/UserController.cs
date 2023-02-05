using Microsoft.AspNetCore.Mvc;
using RankingApp.Data;
using RankingApp.Models;

namespace RankingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly AppDBContext _db;
        public UserController(AppDBContext db)
        {
            _db = db;
        }

        [HttpGet("{email}")]
        public Users GetUser(String email)
        {
            Users user = _db.Users.FirstOrDefault(x => x.email == email);
            return user;
        }

        [HttpPost]
        public void PostUser(Users user)
        {
            _db.Add(user);
            _db.SaveChanges();
        }

    }
}
