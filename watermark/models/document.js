function Document(title, author, content, topicType){
  this.topicType = typeof topicType !== 'undefined' ? topicType : 'none';
  this.title = title;
  this.content = content;
  this.author = author
  this.setTicket = function(ticketId) {
    this.ticket = ticketId
  }
  this.setWaterMarkSignature = function(watermarkSignature){
    this.watermark  = watermarkSignature
  }
  this.getDocument = function(){
    let object = {'title':this.title,
                  'author':this.author,
                  'content': this.content,
                  'watermark': this.watermark
                  }
     return object;               
  }  
  
}

module.exports = Document;



