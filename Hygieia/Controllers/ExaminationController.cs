using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hygieia.Controllers
{
    public class ExaminationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
