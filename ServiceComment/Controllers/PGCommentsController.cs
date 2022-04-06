using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceComment.Data;
using ServiceComment.Models;

namespace ServiceComment.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PGCommentsController : ControllerBase
    {
        private readonly PGCommentContext _context;

        public PGCommentsController(PGCommentContext context)
        {
            _context = context;
        }

        // GET: api/PGComments/postId
        [HttpGet("ByPostId/{id}")]
        public async Task<ActionResult<IEnumerable<PGComment>>> GetPGCommentsById(int id)
        {
            var pgComments = _context.PGComments.Where(a => a.postId == id).ToList();

            return pgComments;
        }

        // GET: api/PGPosts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PGComment>>> GetPGComments()
        {
            return await _context.PGComments.ToListAsync();
        }


        // POST: api/PGPosts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<PGComment>> PostPGComment(PGComment pGComment)
        {
            _context.PGComments.Add(pGComment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPGPost", new { id = pGComment.id }, pGComment);
        }

        // DELETE: api/PGComments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PGComment>> DeletePGComment(long id)
        {
            var pGComment = await _context.PGComments.FindAsync(id);
            if (pGComment == null)
            {
                return NotFound();
            }

            _context.PGComments.Remove(pGComment);
            await _context.SaveChangesAsync();

            return pGComment;
        }

        private bool PGCommentExists(long id)
        {
            return _context.PGComments.Any(e => e.id == id);
        }
    }
}
