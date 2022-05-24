using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using ServicePost.Models;
using Microsoft.OpenApi.Models;
using Microsoft.Extensions.Options;
using ServicePost.Services;
using Plain.RabbitMQ;
using RabbitMQ.Client;
using ServicePost.RabbitMQ;
using ServicePost.Services.Interfaces;

namespace ServicePost
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // requires using Microsoft.Extensions.Options
            services.Configure<PGPostSettings>(
                Configuration.GetSection(nameof(PGPostSettings)));

            services.AddSingleton<IPGPostSettings>(sp =>
                sp.GetRequiredService<IOptions<PGPostSettings>>().Value);

            services.AddSingleton<IPGPostService, PGPostService>();

            services.AddSingleton<IConnectionProvider>(new ConnectionProvider("amqp://guest:guest@localhost:5672"));
            services.AddSingleton<ISubscriber>(x => new Subscriber(x.GetService<IConnectionProvider>(),
                "report_exchange",
                "report_queue",
                "report.*",
                ExchangeType.Topic
               ));
            services.AddHostedService<GetRabbitData>();

            services.AddControllers();

            /*
            //weghalen
            services.AddDbContext<PGPostContext>(opt => opt.UseInMemoryDatabase("PGPost"));

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "PostAPI", Version = "v1" });
            });
            //tot hier

            /* terugcommenten
             * 
            services.AddDbContext<PGPostContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddControllers();
            services.AddCors();
            */
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            //note: re-enable cors when deployed.
            app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
