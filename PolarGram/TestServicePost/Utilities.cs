using System;
using System.Collections.Generic;
using ServicePost.Data;
using ServicePost.Models;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace TestServicePost
{
    public static class Utilities
    {
        public static void InitializeDbForTests(PGPostContext db)
        {
            db.PGPosts.AddRange(GetSeedingMessages());

            db.SaveChanges();
        }

        public static void ReinitializeDbForTests(PGPostContext db)
        {
            db.PGPosts.RemoveRange(db.PGPosts);
            InitializeDbForTests(db);
        }
        public static List<PGPost> GetSeedingMessages()
        {
            return new List<PGPost>()
            {
             new PGPost(){Id = "6256c3e2752e64bf0a08b1e5", UserId = "6256c3e2752e64bf0a08b1e5", Name = "Name1", ImgSrc="Test1.jpg", Date = "Date1"},
             new PGPost(){Id = "6256c3e2752e64bf0a08b1e6", UserId = "6256c3e2752e64bf0a08b1e5", Name = "Name2", ImgSrc="Test2.jpg", Date = "Date2"},
             new PGPost(){Id = "6256c3e2752e64bf0a08b1e7", UserId = "6256c3e2752e64bf0a08b1e5", Name = "Name3", ImgSrc="Test3.jpg", Date = "Date3"},
             new PGPost(){Id = "6256c3e2752e64bf0a08b1e8", UserId = "6256c3e2752e64bf0a08b1e5", Name = "Name4", ImgSrc="Test4.jpg", Date = "Date4"},
            };
        }
    }
}
