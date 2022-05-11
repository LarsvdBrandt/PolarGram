using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServicePost.Models;
using ServicePost.Services;
using ServicePost.Services.Interfaces;

namespace ServicePost.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PGPostsController : ControllerBase
    {
        private readonly IPGPostService _pGPostService;
        public PGPostsController(IPGPostService PGPostService)
        {
            _pGPostService = PGPostService;
        }

        // GET: getall
        [HttpGet]
        public ActionResult<List<PGPost>> Get() =>
            _pGPostService.Get();

        // GET: api/PGPosts/5
        [HttpGet("{id:length(24)}")]
        public IActionResult GetPGPost(string id)
        {
            var post = _pGPostService.GetById(id);

            if (post == null)
            {
                return NotFound();
            }

            return Ok(post);
        }

        // POST: api/PGPosts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.

        [HttpPost]
        public ActionResult<PGPost> PostPGPost(PGPost post)
        {
            _pGPostService.Create(post);

            return post;
            //return CreatedAtRoute("GetPost", new { id = post.Id.ToString() }, post);
        }

        // PUT: api/PGPosts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id:length(24)}")]
        public IActionResult PutPGPost(string id, PGPost PostIn)
        {
            var post = _pGPostService.GetById(id);

            if (post == null)
            {
                return NotFound();
            }

            _pGPostService.Update(id, PostIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var post = _pGPostService.GetById(id);

            if (post == null)
            {
                return NotFound();
            }

            _pGPostService.Remove(id);

            return NoContent();
        }
    }
}
