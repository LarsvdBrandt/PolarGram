using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServicePost.Data;
using ServicePost.Models;

namespace ServicePost.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PGPostsController : ControllerBase
    {
        private readonly PGPostContext _context;

        public PGPostsController(PGPostContext context)
        {
            _context = context;
        }

        // GET: api/PGPosts/Name
        [HttpGet("ByName/{id}")]
        public async Task<ActionResult<IEnumerable<PGPost>>> GetPGPostsByName(string id)
        {
            var pgPosts = _context.PGPosts.Where(a => a.Name == id).ToList();

            return pgPosts;
        }

        // GET: api/PGPosts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PGPost>>> GetPGPosts()
        {
            return await _context.PGPosts.ToListAsync();
        }

        // GET: api/PGPosts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PGPost>> GetPGPost(long id)
        {
            var pGPost = await _context.PGPosts.FindAsync(id);

            if (pGPost == null)
            {
                return NotFound();
            }

            return pGPost;
        }

        // PUT: api/PGPosts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPGPost(long id, PGPost pGPost)
        {
            if (id != pGPost.id)
            {
                return BadRequest();
            }

            _context.Entry(pGPost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PGPostExists(id))
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

        // POST: api/PGPosts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<PGPost>> PostPGPost(PGPost pGPost)
        {
            _context.PGPosts.Add(pGPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPGPost", new { id = pGPost.id }, pGPost);
        }

        // DELETE: api/PGPosts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PGPost>> DeletePGPost(long id)
        {
            var pGPost = await _context.PGPosts.FindAsync(id);
            if (pGPost == null)
            {
                return NotFound();
            }

            _context.PGPosts.Remove(pGPost);
            await _context.SaveChangesAsync();

            return pGPost;
        }

        private bool PGPostExists(long id)
        {
            return _context.PGPosts.Any(e => e.id == id);
        }
    }
}
