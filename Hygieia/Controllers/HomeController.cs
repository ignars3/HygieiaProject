using Hygieia.Models;
using Hygieia.Services;
using HygieiaData;
using HygieiaData.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.IO;

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

        [Route("test")]
        [HttpGet]
        public IActionResult Test()
        {

            return Ok(new { text = "It works" });

        }
        [Route("users")]
        [HttpGet]
        public IActionResult Users()
        {
            var users = _authorizationService.GetUsers();

            return Ok(new { users = users });
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

        [HttpGet]
        [Route("load")]
        public IActionResult Load()
        {
            string physicalPath = "Models/doc2.pdf";
            byte[] pdfBytes = System.IO.File.ReadAllBytes(physicalPath);
            MemoryStream ms = new MemoryStream(pdfBytes);
            return new FileStreamResult(ms, "application/pdf");
        }
    }
}
