using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PostService.Data;
using PostService.Models;

namespace PostService.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SFPostsController : ControllerBase
    {
        private readonly SFPostContext _context;

        public SFPostsController(SFPostContext context)
        {
            _context = context;
        }

        // GET: api/SFPosts/Name
        [HttpGet("ByName/{id}")]
        public async Task<ActionResult<IEnumerable<SFPost>>> GetSFPostsByName(string id)
        {
            var sfPosts = _context.SFPosts.Where(a => a.Title == id).ToList();

            return sfPosts;
        }

        // GET: api/SFPosts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SFPost>>> GetSFPosts()
        {
            return await _context.SFPosts.ToListAsync();
        }

        // GET: api/SFPosts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SFPost>> GetSFPost(long id)
        {
            var sFPost = await _context.SFPosts.FindAsync(id);

            if (sFPost == null)
            {
                return NotFound();
            }

            return sFPost;
        }

        // PUT: api/SFPosts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSFPost(long id, SFPost sFPost)
        {
            if (id != sFPost.id)
            {
                return BadRequest();
            }

            _context.Entry(sFPost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SFPostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SFPosts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<SFPost>> PostSFPost(SFPost sFPost)
        {
            _context.SFPosts.Add(sFPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSFPost", new { id = sFPost.id }, sFPost);
        }

        // DELETE: api/SFPosts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SFPost>> DeleteSFPost(long id)
        {
            var sFPost = await _context.SFPosts.FindAsync(id);
            if (sFPost == null)
            {
                return NotFound();
            }

            _context.SFPosts.Remove(sFPost);
            await _context.SaveChangesAsync();

            return sFPost;
        }

        private bool SFPostExists(long id)
        {
            return _context.SFPosts.Any(e => e.id == id);
        }
    }
}
