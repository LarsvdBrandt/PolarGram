using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ImageApi.Models;
using ImageApi.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ImageApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FileController : ControllerBase
    {
        private readonly IStorageService _storageService;

        public FileController(IStorageService storageService)
        {
            _storageService = storageService;
        }
        /*
        [HttpPost]
        public ActionResult Post([FromForm] FileModel file)
        {
            try
            {
                string path = Path.Combine(Directory.GetCurrentDirectory(), "UploadImages", file.FileName);
                
                using (Stream stream = new FileStream(path, FileMode.Create))
                {
                    file.FormFile.CopyTo(stream);
                }
                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
        */

        [HttpPost]
        [Route("upload")]
        public IActionResult Upload([FromForm] FileModel file)
        {
            _storageService.Upload(file.FormFile);
            return Ok();
        }

        /*
        [HttpGet("{blobName}")]
        public async Task<IActionResult> GetBlob(string blobName)
        {
            var data = await _storageService.GetBlobAsync(blobName);
            return File(data.Content, data.ContentType);
        }
        */

        // GET: api/SFPosts
        [HttpGet]
        public string Get()
        {
            return "Welcome To Web API";
        }
    }
}