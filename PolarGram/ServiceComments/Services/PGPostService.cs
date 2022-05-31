using MongoDB.Driver;
using ServiceComment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceComment.Services
{
    public class PGCommentService
    {
        private readonly IMongoCollection<PGComment> _pgComments;

        public PGCommentService(IPGCommentSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _pgComments = database.GetCollection<PGComment>(settings.CommentsCollectionName);
        }

        public List<PGComment> Get() =>
            _pgComments.Find(pgComment => true).ToList();

        public PGComment Get(string id) =>
            _pgComments.Find<PGComment>(pgComment => pgComment.Id == id).FirstOrDefault();

        public List<PGComment> GetByPost(string id) =>
            _pgComments.Find(pgComment => pgComment.PostId == id).ToList();

        public PGComment Create(PGComment pgComment)
        {
            _pgComments.InsertOne(pgComment);
            return pgComment;
        }

        public void Update(string id, PGComment pgCommentIn) =>
            _pgComments.ReplaceOne(pgComment => pgComment.Id == id, pgCommentIn);

        public void Remove(PGComment pgCommentIn) =>
            _pgComments.DeleteOne(pgComment => pgComment.Id == pgCommentIn.Id);

        public void Remove(string id) =>
            _pgComments.DeleteOne(pgComment => pgComment.Id == id);

        public void RemoveByUser(string id) =>
            _pgComments.DeleteMany(pgPost => pgPost.UserId == id);
        public List<PGComment> GetByUserId(string id) =>
            _pgComments.Find(pgPost => pgPost.UserId == id).ToList();
    }
}