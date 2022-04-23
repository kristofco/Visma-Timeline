using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace API.Dto
{
    public class CarDto
    {
        [BsonId]
        public ObjectId id { get; set;}
        [BsonElement("name")]
        public string name { get; set;}
    }
}