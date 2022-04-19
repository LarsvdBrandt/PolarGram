using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceComment.Data;
using ServiceComment.Models;
using ServiceComment.Services;

namespace ServiceComment.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PGCommentsController : ControllerBase
    {
        private readonly PGCommentService _pGCommentService;
        public PGCommentsController(PGCommentService PGCommentService)
        {
            _pGCommentService = PGCommentService;
        }

        // GET: api/PGComments/postId
        [HttpGet("ByPostId/{id}")]
        public ActionResult<List<PGComment>> GetPGCommentsById(string id)
        {
            var comment = _pGCommentService.GetByPost(id);

            if (comment == null)
            {
                return NotFound();
            }

            return comment;
        }

        // GET: api/PGPosts
        [HttpGet]
        public ActionResult<List<PGComment>> Get() =>
            _pGCommentService.Get();


        // POST: api/PGPosts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public ActionResult<PGComment> PostPGComment(PGComment comment)
        {
            _pGCommentService.Create(comment);

            return comment;
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var comment = _pGCommentService.Get(id);

            if (comment == null)
            {
                return NotFound();
            }

            _pGCommentService.Remove(id);

            return NoContent();
        }
    }
}
