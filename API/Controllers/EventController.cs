using System;
using System.Drawing;
using System.Drawing.Imaging;
using API.Dto;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using QRCoder;
using System.Linq;
using System.Reflection.Metadata;

namespace API.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    
    public class EventController : ControllerBase
    {
        [HttpGet]
        public EventDto Get()
        {
            var client = new MongoClient("mongodb+srv://test2:test@cluster0.suxuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            var database = client.GetDatabase("articles");
            return database.GetCollection<EventDto>("articles").Find(new BsonDocument()).First();
            //return database.GetCollection<EventDto>("articles").Find(_ => true).;
            return null;
        }
    }
}