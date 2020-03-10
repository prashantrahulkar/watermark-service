const uuid = require("uuid");
const WaterMarking = require("../watermarking")
const ticketDocumentMapping = new Map();

class WaterMarkController {

  constructor(){
    console.log("WaterMark Controller Init !!");
  }
  serviceInit(req,res){
    res.send("Watermarking Service Initiated ")
  }
  
  initWaterMarking(req,res) {    
    let waterMarking = new WaterMarking(req.body.title, req.body.author,req.body.content,req.body.topic);
    let ticketId = uuid.v4();
    waterMarking.initWaterMarking(ticketId,ticketDocumentMapping)
    res.send(ticketId);
  }

  waterMartkingStatus(req,res) {
    let documentObjectByTicketId  = ticketDocumentMapping.get(req.params.id)
    let response = ( documentObjectByTicketId!= undefined ? documentObjectByTicketId.status :"Invalid Ticket Id : {"+req.params.id+"}")
    res.send(response); 
  }

  getWaterMarekdDocument(req,res) {
    let documentObjectByTicketId  = ticketDocumentMapping.get(req.params.id)
    let response = ( documentObjectByTicketId!= undefined ? documentObjectByTicketId.document :"Invalid Ticket Id : {"+req.params.id+"}")
    res.send(response);
  }

}
module.exports = WaterMarkController