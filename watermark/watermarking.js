const Document = require('./models/document');
const WaterMarkSignature = require('./models/watermark-signature');


class WaterMarking{
  

  constructor(title, author, content, topicType) {
    this.status = "";    
    this.title = title;
    this.content = content;
    this.author = author    
    this.topicType = typeof topicType !== 'undefined' ? topicType : 'none';
    //this.waterMarkSignature = new 
  }

  initWaterMarking(uniqueId, statusObject){
    
    console.log(uniqueId);
    console.log(statusObject);
    this.start(uniqueId,statusObject);
 //   statusObject.set(uniqueId,{'status':"Completed"});

//    statusObject.set(uniqueId,{'status':this.status})
    //this.processsing();
    //this.completed();
  }

  start(id, docObject) {
    this.status= "Started"
    let document = new Document(this.title,this.author,this.content, this.topicType);
    docObject.set(id,{'status':this.status,'document':document.getDocument()})
    //this.keyMapPair.set(this.id,{'status':this.status})
    
    console.log(this.title)
    console.log(this.author)
    
    console.log(" =====================  Started   =====================")
    setTimeout(this.processsing, 5000,id,docObject );
  }

  processsing(id, docObject){
    this.status = "Pending"
    let object = docObject.get(id);
    console.log(object)
    object.status = this.status
    docObject.set(id,object);
    //this.keyMapPair.set(this.id,{'status':this.status})

    console.log(" =====================  Pending   =====================")

    setTimeout(function(){      
    this.status = "Compelted"
    let object = docObject.get(id);
    object.status = this.status

    //this.keyMapPair.set(this.id,{'status':this.status})
    console.log(" =====================  Completd.   =====================")
    
    let watermarkSignature = new WaterMarkSignature(object.document.title,object.document.author,object.document.content,this.topicType);
    object.document.watermark = watermarkSignature
//    document.setWaterMarkSignature(watermarkSignature);
    docObject.set(id,object)
//   docObject.set(id,{'status':this.status})
console.log(docObject)
    }, 5000,id,docObject);
  }

  processsing1(){
    this.status = "Pending"
    console.log(" =====================  Pending   =====================")
   // setTimeout(this.completedWork,5000);
  }


  completedWork(){
    this.status = "Finished"
    console.log(" =====================  Finished   =====================")
    /*let watermarkSignature = new WaterMarkSignature(this.title,this.author,this.content,this.topicType);
    let document = new Document(this.title,this.author,this.content, this.topicType);
    document.setWaterMarkSignature(watermarkSignature);
    */
  }

}

module.exports = WaterMarking