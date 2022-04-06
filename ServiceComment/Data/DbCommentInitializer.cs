using ServiceComment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceComment.Data
{
    public static class DbCommentInitializer
    {
        public static void Initialize(PGCommentContext context)
        {
            context.Database.EnsureCreated();
            if (context.PGComments.Any())
            {
                return;
            }

            var pgComments = new PGComment[]
            {
                new PGComment
                {
                    postId = 1,
                    comment="Testcomment 1",
                    userId="118227711519768270185"
                },
                new PGComment
                {
                    postId = 1,
                    comment="Testcomment 2",
                    userId="118227711519768270186"
                },
                new PGComment
                {
                    postId = 2,
                    comment="Testcomment 6",
                    userId="118227711519768270185"
                }
            };
            foreach (PGComment pgComment in pgComments)
            {
                context.PGComments.Add(pgComment);
            }
            context.SaveChanges();
        }
    }
}
