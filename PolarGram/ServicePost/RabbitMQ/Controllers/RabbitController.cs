using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServicePost.Models;
using ServicePost.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServicePost.RabbitMQ.Controllers
{
    public class RabbitController : ControllerBase
    {

        private readonly PGPostService _pGPostService;

        public RabbitController(PGPostService PGPostService)
        {
            _pGPostService = PGPostService;
        }

        // GET: api/PGPosts/5
        [HttpGet]
        public async Task<ActionResult<PGPost>> GetPost(string id)
        {
            var post = _pGPostService.Get(id);

            if (post == null)
            {
                return NotFound();
            }

            return post;
        }
    }
}
