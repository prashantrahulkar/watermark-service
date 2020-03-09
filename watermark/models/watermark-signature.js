function WaterMarkSignature(title, author, content, topicType){
  this.topic = typeof topicType !== 'undefined' ? topicType : 'none';
  this.title = title;
  this.content = content;
  this.author = author 
}

module.exports = WaterMarkSignature;



