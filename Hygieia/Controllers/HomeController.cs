using Hygieia.Models;
using Hygieia.Services;
using HygieiaData;
using HygieiaData.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Hygieia.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IAuthorizationService _authorizationService;

        public HomeController(ILogger<HomeController> logger, IAuthorizationService authorizationService)
        {
            _logger = logger;
            _authorizationService = authorizationService;
        }

        [Route("Test")]
        [HttpGet]
        public string Test()
        {
            return "Vova";
        }

        [Route("login")]
        [HttpPost]
        public IActionResult Login([FromBody] LoginModel loginModel)
        {
            string token = _authorizationService.GetToken(loginModel.Username, loginModel.Password);

            if (token == null)
            {
                return Unauthorized();
            }

            return Ok(new { access_token = token });
        }
    }
}
