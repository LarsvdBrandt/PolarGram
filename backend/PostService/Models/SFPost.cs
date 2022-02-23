using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PostService.Models
{
    public class SFPost
    {
        [Key]
        public long id { get; set; }
        public string Title { get; set; }
        public string ImgSrc { get; set; }
        public string Comment { get; set; }
    }
}

