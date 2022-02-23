using PostService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PostService.Data
{
    public static class DbPostInitializer
    {
        public static void Initialize(SFPostContext context)
        {
            context.Database.EnsureCreated();
            if (context.SFPosts.Any())
            {
                return;
            }

            var sfPosts = new SFPost[]
            {
                new SFPost
                {
                    Title="Gerwin Lips",
                    ImgSrc="biken.jpg",
                    Comment="Mooie natuurfoto met waterval",
                },
                new SFPost
                {
                    Title="Joost Bogie",
                    ImgSrc="fallguys.jpg",
                    Comment="Vandaag een nieuwe gameboy gekocht",
                },
                new SFPost
                {
                    Title="Ken Petit",
                    ImgSrc="size1.jpg",
                    Comment="Mario eindelijk gekocht, van plan om hem meteen uit te spelen",
                },
                new SFPost
                {
                    Title="Vincent Stolwijk",
                    ImgSrc="game1.png",
                    Comment="Wie zou de verkiezing gaan winnen?",
                },
            };
            foreach (SFPost sfPost in sfPosts)
            {
                context.SFPosts.Add(sfPost);
            }
            context.SaveChanges();
        }
    }
}
