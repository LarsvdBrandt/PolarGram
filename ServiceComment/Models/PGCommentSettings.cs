using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ServiceComment.Models
{
    public class PGCommentSettings : IPGCommentSettings
    {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
        public string CommentsCollectionName { get; set; }
    }

    public interface IPGCommentSettings
    {
        string ConnectionString { get; set; } 
        string DatabaseName { get; set; } 
        string CommentsCollectionName { get; set; } 
    }
}

