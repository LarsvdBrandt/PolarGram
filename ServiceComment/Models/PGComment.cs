using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceComment.Models
{
    public class PGComment
    {
        [Key]
        public long id { get; set; }
        public int postId { get; set; }
        public string userId { get; set; }
        public string comment { get; set; }
    }
}

