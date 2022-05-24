using Azure.Storage.Blobs.Models;
using ImageApi.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImageApi.Services
{
    public interface IStorageService
    {
        void Upload(IFormFile formFile);

        //public Task<BlobInfo> GetBlobAsync(string name);
    }
}
