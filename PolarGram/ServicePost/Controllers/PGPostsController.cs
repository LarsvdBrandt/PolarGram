using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServicePost.Data;
using ServicePost.Models;
using ServicePost.Services;

namespace ServicePost.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PGPostsController : ControllerBase
    {
        private readonly PGPostService _pGPostService;
        public PGPostsController(PGPostService PGPostService)
        {
            _pGPostService = PGPostService;
        }

        // GET: getall
        [HttpGet]
        public ActionResult<List<PGPost>> Get() =>
            _pGPostService.Get();

        // GET: api/PGPosts/5
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<PGPost>> GetPGPost(string id)
        {
            var post = _pGPostService.Get(id);

            if (post == null)
            {
                return NotFound();
            }

            return post;
        }

        // POST: api/PGPosts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.

        [HttpPost]
        public ActionResult<PGPost> PostPGPost(PGPost post)
        {
            _pGPostService.Create(post);

            return CreatedAtRoute("GetBook", new { id = post.Id.ToString() }, post);
        }

        // PUT: api/PGPosts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id:length(24)}")]
        public IActionResult PutPGPost(string id, PGPost bookIn)
        {
            var post = _pGPostService.Get(id);

            if (post == null)
            {
                return NotFound();
            }

            _pGPostService.Update(id, bookIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var post = _pGPostService.Get(id);

            if (post == null)
            {
                return NotFound();
            }

            _pGPostService.Remove(id);

            return NoContent();
        }
    }
}
