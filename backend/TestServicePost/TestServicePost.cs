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
        public async Task Get_Request_Should_Return_Ok_All()
        {
            var response = await _client.GetAsync("/PGPosts");

            response.StatusCode.Should().Be(HttpStatusCode.OK);
        }

        [Fact]
        public async Task Get_Request_Should_Return_Ok_One()
        {
            var response = await _client.GetAsync("/PGPosts/1");

            response.StatusCode.Should().Be(HttpStatusCode.OK);
        }

        [Fact]
        public async Task Get_Request_By_Wrong_ID()
        {
            var response = await _client.GetAsync("/PGPosts/20");

            response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }

        //delete

        [Fact]
        public async Task Delete_Request_By_ID()
        {
            var response = await _client.DeleteAsync("/PGPosts/2");

            response.StatusCode.Should().Be(HttpStatusCode.OK);
        }

        [Fact]
        public async Task Delete_Request_By_Wrong_ID()
        {
            var response = await _client.DeleteAsync("/PGPosts/7");

            response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }

        //post

        [Fact]
        public async Task Post_Succeed()
        {

            var response = await _client.PostAsync("/PGPosts", new StringContent(JsonConvert.SerializeObject(new PGPost()
            {
                id = 5,
                Name = "Name5",
                ImgSrc = "Test5.jpg",
                Date = "Date1",

            }), Encoding.UTF8, "application/json"));


            response.StatusCode.Should().Be(HttpStatusCode.Created);

        }

        //Edit

        [Fact]
        public async Task Edit_Succeed()
        {

            var response = await _client.PutAsync("/PGPosts/1", new StringContent(JsonConvert.SerializeObject(new PGPost()
            {
                id = 1,
                Name = "TestName",
                ImgSrc = "TestImage.jpg",
                Date = "Date1",

            }), Encoding.UTF8, "application/json"));


            response.StatusCode.Should().Be(HttpStatusCode.NoContent);

        }

        [Fact]
        public async Task Edit_Fail_Wrong_ID()
        {

            var response = await _client.PutAsync("/PGPosts/9", new StringContent(JsonConvert.SerializeObject(new PGPost()
            {
                id = 9,
                Name = "Name9",
                ImgSrc = "Test9.jpg",
                Date = "Date9",

            }), Encoding.UTF8, "application/json"));


            response.StatusCode.Should().Be(HttpStatusCode.NotFound);

        }
    }
}
