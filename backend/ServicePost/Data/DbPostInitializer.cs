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
                    Title="Gerwin Lips",
                    ImgSrc="test1.jpg",
                    Comment="Mooie natuurfoto met waterval",
                },
                new PGPost
                {
                    Title="Joost Bogie",
                    ImgSrc="test2.jpg",
                    Comment="Vandaag een nieuwe gameboy gekocht",
                },
                new PGPost
                {
                    Title="Ken Petit",
                    ImgSrc="test3.jpg",
                    Comment="Mario eindelijk gekocht, van plan om hem meteen uit te spelen",
                },
                new PGPost
                {
                    Title="Vincent Stolwijk",
                    ImgSrc="test4.jpg",
                    Comment="Wie zou de verkiezing gaan winnen?",
                },
            };
            foreach (PGPost pgPost in pgPosts)
            {
                context.PGPosts.Add(pgPost);
            }
            context.SaveChanges();
        }
    }
}
