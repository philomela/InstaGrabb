using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace InstaGrabb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Lk : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        public Lk(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return null;
        }
    }
}
