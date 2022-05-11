using ServicePost.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServicePost.Services.Interfaces
{
    public interface IPGPostService
    {
        List<PGPost> Get();
        PGPost GetById(string id);
        PGPost Create(PGPost pgPost);
        void Update(string id, PGPost pgPostIn);
        void Remove(PGPost pgPostIn);
        void Remove(string id);
    }
}
