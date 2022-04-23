using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dto;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class Idk : ControllerBase
    {
        [HttpGet("Get")]
        public CarDto Get()
        {
            var client = new MongoClient("mongodb+srv://test:test@cluster0.vpvmn.mongodb.net/timeline?retryWrites=true&w=majority");
            var database = client.GetDatabase("timeline");
            var query = new BsonDocument("name", "Peter");
            return database.GetCollection<CarDto>("QR").Find(query).First();
        }
    }
}