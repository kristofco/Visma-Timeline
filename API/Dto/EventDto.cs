using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace API.Dto
{
    public class EventDto
    {
        [BsonId]
        public ObjectId Id { get; set;}

        [BsonElement("yearList")]
        public List<YearList> EventList { get; set;}
    }
    
    public class YearList
    {
        [BsonElement("year")]
        public string Year { get; set;}
        
        [BsonElement("eventList")]
        public List<Event> EventList { get; set;}
    }
    
    public class Event
    {
        [BsonElement("eventDate")]
        public string EventDate { get; set;}
        
        [BsonElement("eventName")]
        public string EventName { get; set;}
        
        [BsonElement("eventDescription")]
        public string EventDescription { get; set;}
        
        [BsonElement("eventPhotos")]
        public List<string> EventPhotos { get; set;}
    }
}