using System.Collections.Generic;

namespace ServiceReport
{
    public interface IMemoryReportStorage
    {
        void Add(Report report);
        IEnumerable<Report> Get();
    }
}