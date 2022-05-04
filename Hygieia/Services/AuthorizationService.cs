using HygieiaData;
using HygieiaData.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace Hygieia.Services
{
    public class AuthorizationService: IAuthorizationService
    {
        public const string ISSUER = "HygieiaServer";
        public const string AUDIENCE = "HygieiaClient";
        public const string KEY = "mysupersecret_secretkey!123";
        public const int LIFETIME = 60;
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }

        private readonly Repository<User> _userRepository;

        public AuthorizationService(Repository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        public string GetToken(string username, string password)
        {
            var identity = GetIdentity(username, password);
            if (identity == null)
            {
                return null;
            }

            var now = DateTime.UtcNow;

            var jwt = new JwtSecurityToken(
                    issuer: ISSUER,
                    audience: AUDIENCE,
                    notBefore: now,
                    claims: identity.Claims,
                    expires: now.Add(TimeSpan.FromMinutes(LIFETIME)),
                    signingCredentials: new SigningCredentials(GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return encodedJwt;
        }

        public ClaimsIdentity GetIdentity(string username, string password)
        {
            User user = _userRepository.GetAll().FirstOrDefault(x => x.Username == username && x.Password == password);

            if (user != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, user.Username),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role)
                };

                var claimsIdentity = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
                return claimsIdentity;
            }

            return null;
        }
    }
}
