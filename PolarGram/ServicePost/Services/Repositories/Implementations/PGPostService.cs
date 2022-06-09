using MongoDB.Driver;
using ServicePost.Models;
using ServicePost.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServicePost.Services
{
    public class PGPostService : IPGPostService
    {
        private readonly IMongoCollection<PGPost> _pgPosts;

        public PGPostService(IPGPostSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _pgPosts = database.GetCollection<PGPost>(settings.PostsCollectionName);
        }

        public List<PGPost> Get() =>
            _pgPosts.Find(pgPost => true).ToList();

        public PGPost GetById(string id) =>
            _pgPosts.Find<PGPost>(pgPost => pgPost.Id == id).FirstOrDefault();

        public List<PGPost> GetByUserId(string id) =>
            _pgPosts.Find(pgPost => pgPost.UserId == id).ToList();

        public PGPost Create(PGPost pgPost)
        {
             _pgPosts.InsertOne(pgPost);
            return pgPost;
        }

        public void Update(string id, PGPost pgPostIn) =>
            _pgPosts.ReplaceOne(pgPost => pgPost.Id == id, pgPostIn);

        public void Remove(PGPost pgPostIn) =>
            _pgPosts.DeleteOne(pgPost => pgPost.Id == pgPostIn.Id);

        public void Remove(string id) =>
            _pgPosts.DeleteOne(pgPost => pgPost.Id == id);

        public void RemoveByUser(string id) =>
            _pgPosts.DeleteMany(pgPost => pgPost.UserId == id);
    }
}