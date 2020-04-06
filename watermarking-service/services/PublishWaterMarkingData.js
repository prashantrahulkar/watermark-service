const http = require('http')
const config = require('./../common/config');

var options = {
  hostname: config.broker,
  port: 4000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
   // 'Content-Length': data.length
  }
}

class PublishWaterMarkingData{
  PublishWaterMarkingData(){
    this.req = undefined;
  }

  publish(id, object){
    
    console.log("Object id :::::::::"+JSON.stringify(object.get(id)));
    const data = JSON.stringify({
      'id': id,
      'watermarking': object.get(id)
    })
    options = {
      hostname: config.broker,
      port: 4000,
      path: '',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'Ce-Type': 'greeting',
        'Ce-Id': 'say-hello',
        'Ce-Specversion': '0.3',
        'Ce-Source': 'not-sendoff'
      }
    }
 

 // options.data = object
  this.req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', d => {
      process.stdout.write(d)
    })
  })
  
  this.req.on('error', error => {
    console.error(error)
  })
  
  this.req.write(data)
  this.req.end()

  if(object.get(id).status == "Compelted") {
    options = {
      hostname: config.broker,
      port: 5000,
      path: '',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'Ce-Type': 'watermarked-doc',
        'Ce-Id': 'wateramarked-document-service',
        'Ce-Specversion': '0.3',
        'Ce-Source': 'wateramarking'
      }
    }
 
 // options.data = object
  this.req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', d => {
      process.stdout.write(d)
    })
  })
  
  this.req.on('error', error => {
    console.error(error)
  })
  
  this.req.write(data)
  this.req.end()
  }
}
}
module.exports = PublishWaterMarkingData