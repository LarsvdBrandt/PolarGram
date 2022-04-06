using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServicePost.Models
{
    public class PGPost
    {
        [Key]
        public long id { get; set; }
        public string userId { get; set; }
        public string Name { get; set; }
        public string Date { get; set; }
        public string ImgSrc { get; set; }
    }
}

