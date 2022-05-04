using Hygieia.Services;
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
        private readonly IAuthorizationService _authorizationService;

        public HomeController(ILogger<HomeController> logger, IAuthorizationService authorizationService)
        {
            _logger = logger;
            _authorizationService = authorizationService;
        }

        [HttpPost]
        public string Login(string username, string password)
        {
            string token = _authorizationService.GetToken(username, password);

            if (token == null)
            {
                return "An error occured";
            }

            return token;
        }
    }
}
