using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace InstaGrabb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LkController : ControllerBase
    {
        private readonly ILogger<LkController> _logger;

        public LkController(ILogger<LkController> logger)
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
