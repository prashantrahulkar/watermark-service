const uuid = require("uuid");
const WaterMarking = require("../watermarking/watermarking")

class WaterMarkingService {

  constructor() {
    console.log("WaterMarking Service Init")
  }
  
  serviceInit(req,res){
    res.send("Watermarking Service Initiated !!! ")
  }

  waterMarkingInit(req,res){
    let waterMarking = new WaterMarking(req.body.title, req.body.author,req.body.content,req.body.topic);
    let ticketId = uuid.v4();
    waterMarking.initWaterMarking(ticketId,ticketDocumentMapping)
    res.send(ticketId);
  }
}



module.exports = WaterMarkingService
