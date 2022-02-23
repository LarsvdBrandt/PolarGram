using PostService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PostService.Data
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
                    ImgSrc="biken.jpg",
                    Comment="Mooie natuurfoto met waterval",
                },
                new PGPost
                {
                    Title="Joost Bogie",
                    ImgSrc="fallguys.jpg",
                    Comment="Vandaag een nieuwe gameboy gekocht",
                },
                new PGPost
                {
                    Title="Ken Petit",
                    ImgSrc="size1.jpg",
                    Comment="Mario eindelijk gekocht, van plan om hem meteen uit te spelen",
                },
                new PGPost
                {
                    Title="Vincent Stolwijk",
                    ImgSrc="game1.png",
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
