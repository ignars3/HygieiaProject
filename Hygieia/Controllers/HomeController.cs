using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Hygieia.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public string Login()
        {
            return "Login";
        }
    }
}
