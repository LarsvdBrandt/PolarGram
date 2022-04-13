using FluentAssertions;
using Newtonsoft.Json;
using ServicePost;
using ServicePost.Models;
using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace TestServicePost
{
    public class TestServicePostController : IClassFixture<CustomWebApplicationFactory<Startup>>
    {
        private readonly HttpClient _client;
        private readonly CustomWebApplicationFactory<Startup> _factory;

        public TestServicePostController(
        CustomWebApplicationFactory<Startup> factory)
        {
            _factory = factory;
            _client = factory.CreateClient();

        }

        //get

        [Fact]
        public async Task Get_All_OK()
        {
            var response = await _client.GetAsync("/PGPosts");

            response.StatusCode.Should().Be(HttpStatusCode.OK);
        }

        [Fact]
        public async Task Get_One_OK()
        {
            var response = await _client.GetAsync("/PGPosts/1");

            response.StatusCode.Should().Be(HttpStatusCode.OK);
        }

        [Fact]
        public async Task Get_One_Not_OK()
        {
            var response = await _client.GetAsync("/PGPosts/20");

            response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }

        //delete

        [Fact]
        public async Task Delete_One_OK()
        {
            var response = await _client.DeleteAsync("/PGPosts/2");

            response.StatusCode.Should().Be(HttpStatusCode.OK);
        }

        [Fact]
        public async Task Delete_One_Not_OK()
        {
            var response = await _client.DeleteAsync("/PGPosts/7");

            response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }

        //post

        [Fact]
        public async Task Post_OK()
        {

            var response = await _client.PostAsync("/PGPosts", new StringContent(JsonConvert.SerializeObject(new PGPost()
            {
                Id = "5",
                Name = "Name5",
                ImgSrc = "Test5.jpg",
                Date = "Date1",

            }), Encoding.UTF8, "application/json"));


            response.StatusCode.Should().Be(HttpStatusCode.Created);

        }

        /* [Fact]
        public async Task Post_Not_OK()
        {

            var response = await _client.PostAsync("/PGPosts", new StringContent(JsonConvert.SerializeObject(new PGPost()
            {
                id = 5,
                Name = "Name5",
                Date = "Date1",

            }), Encoding.UTF8, "application/json"));


            response.StatusCode.Should().Be(HttpStatusCode.NoContent);

        }
        */

        //Edit
        [Fact]
        public async Task Edit_One_OK()
        {

            var response = await _client.PutAsync("/PGPosts/1", new StringContent(JsonConvert.SerializeObject(new PGPost()
            {
                Id = "1",
                Name = "TestName",
                ImgSrc = "TestImage.jpg",
                Date = "Date1",

            }), Encoding.UTF8, "application/json"));


            response.StatusCode.Should().Be(HttpStatusCode.NoContent);

        }

        [Fact]
        public async Task Edit_One_Not_OK()
        {

            var response = await _client.PutAsync("/PGPosts/9", new StringContent(JsonConvert.SerializeObject(new PGPost()
            {
                Id = "9",
                Name = "Name9",
                ImgSrc = "Test9.jpg",
                Date = "Date9",

            }), Encoding.UTF8, "application/json"));


            response.StatusCode.Should().Be(HttpStatusCode.NotFound);

        }
    }
}
