using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using InstaSharper;
using InstaSharper.API.Builder;
using InstaSharper.Classes;
using InstaSharper.Logger;
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace InstaGrabb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InstagramController : ControllerBase
    {
        private readonly ILogger<InstagramController> _logger;
        private readonly IConfiguration _configuration;

        public InstagramController(ILogger<InstagramController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<JsonResult> GetAsync()
        {
            var delay = RequestDelay.FromSeconds(2, 2);

            var userSession = new UserSessionData
            {
                UserName = _configuration.GetSection("Credentials").GetSection("InstagramLogin").Value,
                Password = _configuration.GetSection("Credentials").GetSection("InstagramPassword").Value
            };

            var _instaApi = InstaApiBuilder.CreateBuilder()
                   .SetUser(userSession)
                   .UseLogger(new DebugLogger(InstaSharper.Logger.LogLevel.Exceptions)) // use logger for requests and debug messages
                   .SetRequestDelay(delay)
                   .Build();
            if (!_instaApi.IsUserAuthenticated)
            {
                // login
                Console.WriteLine($"Logging in as {userSession.UserName}");
                delay.Disable();
                var logInResult = await _instaApi.LoginAsync();
                delay.Enable();
                if (!logInResult.Succeeded)
                {
                    Console.WriteLine($"Unable to login: {logInResult.Info.Message}");
                }
            }
            var result =_instaApi.GetUserAsync("philomelka");
            var followers = await _instaApi.GetUserFollowersAsync("philomelka",
                PaginationParameters.MaxPagesToLoad(5));
            return new JsonResult(new { result = followers });
        }
    }
}
