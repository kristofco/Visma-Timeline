using System;
using System.Drawing;
using System.Drawing.Imaging;
using API.Dto;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using QRCoder;
using System.Linq;

namespace API.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    
    public class EventController : ControllerBase
    {
        [HttpGet]
        public EventDto Get()
        {
            var client = new MongoClient("mongodb+srv://test:test@cluster0.vpvmn.mongodb.net/timeline?retryWrites=true&w=majority");
            var database = client.GetDatabase("articles");
            var daco = database.GetCollection<object>("articles").Find(new BsonDocument()).First().ToString();
            Console.WriteLine(daco);
            //return database.GetCollection<EventDto>("articles").Find(_ => true).;
            return null;
        }
    }
}