using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ServicePost.Models
{
    public class PGPostSettings : IPGPostSettings
    {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
        public string PostsCollectionName { get; set; }
    }

    public interface IPGPostSettings
    {
        string ConnectionString { get; set; } 
        string DatabaseName { get; set; } 
        string PostsCollectionName { get; set; } 
    }
}

