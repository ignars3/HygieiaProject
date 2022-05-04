using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Hygieia.Services
{
    public interface IAuthorizationService
    {
        public string GetToken(string username, string password);

        public ClaimsIdentity GetIdentity(string username, string password);
    }
}
