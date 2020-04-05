const uuid = require("uuid");
const WaterMarking = require("../watermarking/watermarking")
const ticketDocumentMapping = new Map();

class WaterMarkingService {

  constructor() {
    console.log("WaterMarking Service Init")
  }
  
  serviceInit(req,res){
    res.send("Watermarking Service Initiated !!! ")
  }

  waterMarkingInit(req,res){
    console.log(req.body.title)
    console.log(req.body.content)    
    console.log(req.body.author)
    

    let waterMarking = new WaterMarking(req.body.title, req.body.author,req.body.content,req.body.topic);
    let ticketId = uuid.v4();
    waterMarking.initWaterMarking(ticketId,ticketDocumentMapping)
    res.send(ticketId);
  }
}



module.exports = WaterMarkingService
