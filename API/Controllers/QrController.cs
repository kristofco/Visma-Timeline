using System;
using System.Drawing; 
using System.Drawing.Imaging; 
using System.IO; 
using API.Dto; 
using Microsoft.AspNetCore.Mvc; 
using MongoDB.Bson; 
using MongoDB.Driver; 
using QRCoder;
namespace API.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class QrCodeController : ControllerBase
    {
        [HttpGet]
        public QrDto Get(string url)
        {
            var client = new MongoClient("mongodb+srv://test2:test@cluster0.suxuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            var database = client.GetDatabase("QR");
            var query = new BsonDocument("link", url);

            if (!database.GetCollection<QrDto>("QR").Find(query).Any())
            {
                QR.GenerateQR(url);
                var insertQuery = new BsonDocument
                {
                    { "link", url },
                    { "bitmap", QR.GenerateQR(url) }
                };

                database.GetCollection<BsonDocument>("QR").InsertOne(insertQuery);
            }
            
            return database.GetCollection<QrDto>("QR").Find(query).First();
        }
    }

    static class QR
    {
        public static string GenerateQR(string url)
        {
            QRCodeGenerator qrGenerator = new QRCodeGenerator();
            QRCodeData qrCodeData = qrGenerator.CreateQrCode(url, QRCodeGenerator.ECCLevel.Q);
            QRCode qrCode = new QRCode(qrCodeData);
            Bitmap qrCodeImage = qrCode.GetGraphic(20,Color.Black, Color.White,(Bitmap)Image.FromFile("visma-logo1.png")); 
            System.IO.MemoryStream ms = new MemoryStream();
            qrCodeImage.Save(ms, ImageFormat.Jpeg);
            byte[] byteImage = ms.ToArray();
            var SigBase64= Convert.ToBase64String(byteImage); // Get Base64
            return SigBase64;
        }
    }
}