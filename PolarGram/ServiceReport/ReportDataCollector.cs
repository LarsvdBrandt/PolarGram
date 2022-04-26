using Microsoft.Extensions.Hosting;
using Plain.RabbitMQ;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace ServiceReport
{
    public class ReportDataCollector : IHostedService
    {
        private const int DEFAULT_QUANTITY = 100;

        private readonly ISubscriber _pGSubscriber;
        private readonly IMemoryReportStorage _pGMemoryReportStorage;
        public ReportDataCollector (ISubscriber subscriber, IMemoryReportStorage memoryReportStorage)
        {
            _pGSubscriber = subscriber;
            _pGMemoryReportStorage = memoryReportStorage;
        }
        public Task StartAsync(CancellationToken cancellationToken)
        {
            _pGSubscriber.Subscribe(ProcessMessage);
            return Task.CompletedTask;
        }

        private bool ProcessMessage(string message, IDictionary<string, object> headers)
        {
            if (message.Contains("Product"))
            {

            }
            else
            {
                var comment = JsonConvert.DeserializeObject<PGComment>(message);
                if(_pGMemoryReportStorage.Get().Any(r => r.CommentContent == comment.Comment))
                {
                    _pGMemoryReportStorage.Get().First(r => r.CommentContent == comment.Comment).Count -= comment.Quantity;
                }
                else
                {
                    _pGMemoryReportStorage.Add(new Report
                    {
                        CommentContent = comment.Comment,
                        Count = DEFAULT_QUANTITY - comment.Quantity
                    });
                }
            }
            return true;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
