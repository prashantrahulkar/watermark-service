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
    this.start(uniqueId,statusObject);
  }

  start(id, docObject) {
    this.status= "Started"
    let document = new Document(this.title,this.author,this.content, this.topicType);
    docObject.set(id,{'status':this.status,'document':document.getDocument()})
    setTimeout(this.processsing, 5000,id,docObject );
  }

  processsing(id, docObject){
    this.status = "Pending"
    let object = docObject.get(id);
    object.status = this.status
    docObject.set(id,object);

    setTimeout(function(){      
      this.status = "Compelted"
      let object = docObject.get(id);
      object.status = this.status
      let watermarkSignature = new WaterMarkSignature(object.document.title,object.document.author,object.document.content,this.topicType);
      object.document.watermark = watermarkSignature
      docObject.set(id,object)
    }, 5000,id,docObject);
  }
}

module.exports = WaterMarking