using HygieiaData;
using HygieiaData.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Hygieia.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly Repository<User> _userRepository;
        public HomeController(ILogger<HomeController> logger, Repository<User> userRepository)
        {
            _logger = logger;
            _userRepository = userRepository;
        }

        [HttpGet]
        public string Login()
        {
            return "Login";
        }
    }
}
