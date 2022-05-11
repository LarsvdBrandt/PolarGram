using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using Plain.RabbitMQ;
using ServicePost.Controllers;
using ServicePost.Models;
using ServicePost.RabbitMQ.Controllers;
using ServicePost.Services;
using ServicePost.Services.Implementations;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace ServicePost.RabbitMQ
{
    public class GetRabbitData : IHostedService
    {
        private readonly PGPostService _pGPostService;

        private readonly ISubscriber _pGSubscriber;
        public GetRabbitData(ISubscriber subscriber, PGPostService PGPostService)
        {
            _pGPostService = PGPostService;
            _pGSubscriber = subscriber;
        }
        public Task StartAsync(CancellationToken cancellationToken)
        {
            _pGSubscriber.Subscribe(ProcessMessage);
            return Task.CompletedTask;
        }

        private bool ProcessMessage(string message, IDictionary<string, object> headers)
        {
            var comment = JsonConvert.DeserializeObject<PGComment>(message);
            var id = comment.PostId;

            var post = _pGPostService.GetById(id);

            if(comment.Id == null)
            {
                post.CommentCount = post.CommentCount + 1;
            }
            else
            {
                post.CommentCount = post.CommentCount - 1;
            }
            
            Debug.WriteLine(post);

            _pGPostService.Update(post.Id, post);

            return true;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
