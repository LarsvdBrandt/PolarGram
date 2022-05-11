using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Newtonsoft.Json;
using ServicePost;
using ServicePost.Controllers;
using ServicePost.Models;
using ServicePost.Services.Implementations;
using ServicePost.Services.Interfaces;
using System;
using System.Diagnostics;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.Unicode;
using System.Threading.Tasks;
using Xunit;
using Xunit.Abstractions;

namespace TestServicePost
{
    public class TestServicePost
    {
        private readonly ITestOutputHelper _output;

        public TestServicePost(ITestOutputHelper output)
        {
            _output = output;
        }


        // Mocking Interfaces
        private Mock<IPGPostService> _iapiTestInterface;

        // Controllers 
        private PGPostsController _controller;

        private void Setup()
        {
            PGPost SetupPost = new PGPost()
            {
                Id = "6256c3e2752e64bf0a08b1e8",
                UserId = "6256c3e2752e64bf0a08f58s",
                Name = "Lars",
                Date = "14/05/2002",
                ImgSrc = "testimg.jpg",
                CommentCount = 20
            };

            _iapiTestInterface = new Mock<IPGPostService>();

            _iapiTestInterface.Setup(p => p.GetById("6256c3e2752e64bf0a08b1e5")).Returns(new PGPost()
            {
                Id = "6256c3e2752e64bf0a08b1e5",
                UserId = "6256c3e2752e64bf0a08f58s",
                Name="Lars",
                Date="14/05/2002",
                ImgSrc="testimg.jpg",
                CommentCount= 20
            });

            _iapiTestInterface.Setup(p => p.Create(SetupPost)).Returns(new PGPost()
            {
                Id = "6256c3e2752e64bf0a08b1e8",
                UserId = "6256c3e2752e64bf0a08f58s",
                Name = "Lars",
                Date = "14/05/2002",
                ImgSrc = "testimg.jpg",
                CommentCount = 20
            });

            _iapiTestInterface.Setup(p => p.Remove("6256c3e2752e64bf0a08b1e8"));

            _iapiTestInterface.Setup(p => p.Update("6256c3e2752e64bf0a08b1e8", SetupPost));

            _controller = new PGPostsController(_iapiTestInterface.Object);
        }

        [Fact]
        public void ReadPostTest()
        {
            //Arrange
            Setup();
            PGPost expectedPost = new PGPost()
            {
                Id = "6256c3e2752e64bf0a08b1e5",
                UserId = "6256c3e2752e64bf0a08f58s",
                Name = "Lars",
                Date = "14/05/2002",
                ImgSrc = "testimg.jpg",
                CommentCount = 20
            };
                

            //Act
            IActionResult result = _controller.GetPGPost("6256c3e2752e64bf0a08b1e5");
            var okResult = result as OkObjectResult;

            var configuration = okResult.Value;

            //Assert
            Assert.NotNull(okResult);
            Assert.Equal(200, okResult.StatusCode);
            Assert.Equal(okResult.Value.ToString(), expectedPost.ToString());
        }
         
        [Fact]
        public void NewPostTest()
        {
            //Arrange
            Setup();
            PGPost expectedPost = new PGPost()
            {
                Id = "6256c3e2752e64bf0a08b1e8",
                UserId = "6256c3e2752e64bf0a08f58s",
                Name = "Lars",
                Date = "14/05/2002",
                ImgSrc = "testimg.jpg",
                CommentCount = 20
            };

            //Act
            ActionResult<PGPost> result = _controller.PostPGPost(expectedPost);

            //Assert
            Assert.NotNull(result);
            Assert.Equal(result.Value.ToString(), expectedPost.ToString());
            
        }

        [Fact]
        public void DeletePostTest()
        {
            //Arrange
            Setup();
            PGPost expectedPost = new PGPost()
            {
                Id = "6256c3e2752e64bf0a08b1e8",
                UserId = "6256c3e2752e64bf0a08f58s",
                Name = "Lars",
                Date = "14/05/2002",
                ImgSrc = "testimg.jpg",
                CommentCount = 20
            };

            //Act
            IActionResult result = _controller.Delete(expectedPost.Id);
            var okResult = result as OkObjectResult;

            IActionResult resultCheck = _controller.GetPGPost("6256c3e2752e64bf0a08b1e8");
            var okResultCheck = resultCheck as OkObjectResult;


            //Assert
            Assert.Null(okResultCheck);

         }

        [Fact]
        public void UpdatePostTest()
        {
            //Arrange
            Setup();
            PGPost expectedPost = new PGPost()
            {
                Id = "6256c3e2752e64bf0a08b1e8",
                UserId = "6256c3e2752e64bf0a08f58s",
                Name = "Lars",
                Date = "14/05/2002",
                ImgSrc = "testimg.jpg",
                CommentCount = 20
            };

            //Act
            IActionResult result = _controller.PutPGPost(expectedPost.Id, expectedPost);
            var okResult = result as OkObjectResult;

            //Assert
            Assert.Null(okResult);

        }
    }
}
