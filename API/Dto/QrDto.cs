using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace API.Dto
{
    public class QrDto
    {
        [BsonId]
        public ObjectId Id { get; set;}
        
        [BsonElement("link")]
        public string Link { get; set;}
        
        [BsonElement("path")]
        public string Path { get; set;}
    }
}