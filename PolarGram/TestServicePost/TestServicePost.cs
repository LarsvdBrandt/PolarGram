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


        /*
        Deactivate all tests 
         
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
            var response = await _client.GetAsync("/PGPosts/6256cdcf183cd89702594e6f");

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
            var response = await _client.DeleteAsync("/PGPosts/6256c3e2752e64bf0a08b1e8");

            response.StatusCode.Should().Be(HttpStatusCode.OK);
        }
        [Fact]
        public async Task Delete_One_Not_OK()
        {
            var response = await _client.DeleteAsync("/PGPosts/6256c3e2752e64bf0a08b1e9");

            response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }

        //post

        [Fact]
        public async Task Post_OK()
        {

            var response = await _client.PostAsync("/PGPosts", new StringContent(JsonConvert.SerializeObject(new PGPost()
            {
                Id = "6256c3e2752e64bf0a08b1e",
                UserId = "userId",
                Name = "TestName",
                ImgSrc = "TestImage.jpg",
                Date = "Date1",

            }), Encoding.UTF8, "application/json"));


            response.StatusCode.Should().Be(HttpStatusCode.OK);

        }

        //Edit
        [Fact]
        public async Task Edit_One_OK()
        {

            var response = await _client.PutAsync("/PGPosts/6256c3e2752e64bf0a08b1e5", new StringContent(JsonConvert.SerializeObject(new PGPost()
            {
                Id = "6256c3e2752e64bf0a08b1e5",
                UserId = "userId",
                Name = "TestName",
                ImgSrc = "TestImage.jpg",
                Date = "Date1",

            }), Encoding.UTF8, "application/json"));


            response.StatusCode.Should().Be(HttpStatusCode.NoContent);

        }

        [Fact]
        public async Task Edit_One_Not_OK()
        {

            var response = await _client.PutAsync("/PGPosts/6256c3e2752e64bf0a08b1e9", new StringContent(JsonConvert.SerializeObject(new PGPost()
            {
                Id = "9",
                Name = "Name9",
                UserId = "User9",
                ImgSrc = "Test9.jpg",
                Date = "Date9",

            }), Encoding.UTF8, "application/json"));


            response.StatusCode.Should().Be(HttpStatusCode.NotFound);

        }
        */
    }
}
