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
            var client = new MongoClient("mongodb://localhost:27017");
            var database = client.GetDatabase("idk");
            var query = new BsonDocument("name", "peter");
            return database.GetCollection<CarDto>("idk").Find(query).First();
        }
    }
}