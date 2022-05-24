using Azure.Storage.Blobs;
using ImageApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImageApi.Services
{
    public class StorageService : IStorageService
    {
        private readonly BlobServiceClient _blobServiceClient;
        private readonly IConfiguration _configuration;
        
        public StorageService(BlobServiceClient blobServiceClient, IConfiguration configuration)
        {
            _blobServiceClient = blobServiceClient;
            _configuration = configuration;
        }

        public void Upload(IFormFile formFile)
        {
            var containerName = _configuration.GetSection("Storage:ContainerName").Value;

            var containerClient = _blobServiceClient.GetBlobContainerClient(containerName);
            var blobClient = containerClient.GetBlobClient(formFile.FileName);

            using var stream = formFile.OpenReadStream();
            blobClient.Upload(stream, true);
        }

        /*
        public async Task<BlobInfo> GetBlobAsync(string name)
        {
            var containerName = _configuration.GetSection("Storage:ContainerName").Value;

            var containerClient = _blobServiceClient.GetBlobContainerClient(containerName);
            var blobClient = containerClient.GetBlobClient(name);
            var blobDownloadInfo = await blobClient.DownloadAsync();

            return new BlobInfo(blobDownloadInfo.Value.Content, blobDownloadInfo.Value.ContentType);
        }
        */
        

    }
}
