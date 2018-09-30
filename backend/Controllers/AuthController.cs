using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public IActionResult Menu()
        {
            var menu = new List<MenuJsonModel>{
                        new MenuJsonModel{ Name = "home",Path="_home",Permissions=new []{"admim"}}
                    };
            return Ok(menu);
        }
    }
}
