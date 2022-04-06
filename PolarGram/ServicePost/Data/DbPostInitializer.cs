using ServicePost.Data;
using ServicePost.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServicePost.Data
{
    public static class DbPostInitializer
    {
        public static void Initialize(PGPostContext context)
        {
            context.Database.EnsureCreated();
            if (context.PGPosts.Any())
            {
                return;
            }

            var pgPosts = new PGPost[]
            {
                new PGPost
                {
                    userId="118227711519768270185",
                    Name="Gerwin Lips",
                    Date="22/02/2022",
                    ImgSrc="img1.PNG",
                },
                new PGPost
                {
                    userId="118227711519768270185",
                    Name="Joost Bogie",
                    Date="23/02/2022",
                    ImgSrc="img2.PNG",
                },
                new PGPost
                {
                    userId="118227711519768270185",
                    Name="Ken Petit",
                    Date="24/02/2022",
                    ImgSrc="img3.PNG",
                },
                new PGPost
                {
                    userId="118227711519768270186",
                    Name="Vincent Stolwijk",
                    Date="25/02/2022",
                    ImgSrc="img4.PNG",
                }
            };
            foreach (PGPost pgPost in pgPosts)
            {
                context.PGPosts.Add(pgPost);
            }
            context.SaveChanges();
        }
    }
}
