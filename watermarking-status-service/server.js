require('dotenv').config();
const express = require('express');
const config = require('./common/config')
const bodyParser = require('body-parser')

const app = express();
const docMapCollectionList = new Map();
app.use(bodyParser.json())

const eventSDK = require("cloudevents-sdk/v03");
const unmarshaller = new eventSDK.HTTPUnmarshaller();

app.get('/', (req, res) => {
  console.log(process.env);
  res.send('WaterMark Service Event Lister !'+process.env.broker);
});

// http://localhost:3600/watermarking-status/141fef63-be59-4b86-bf48-4fc43a6dd647
app.get('/watermarking-status/:id', (req,res)=> {
  let documentObjectByTicketId  = docMapCollectionList.get(req.params.id)
  let response = ( documentObjectByTicketId!= undefined ? documentObjectByTicketId.status :"Invalid Ticket Id : {"+req.params.id+"}")
  res.send(response);
  }
);

app.post('',(req,res)=>{
  unmarshaller.unmarshall(req.body, req.headers)
  .then(cloudevent => {
    // pretty print
    console.log("Watermarking Event Listener :");
    //console.log(JSON.stringify(cloudevent.format(), null, 2));
    var response = JSON.parse(JSON.stringify(cloudevent.format(), null, 2));
   
   docMapCollectionList.set(response.data.id,response.data.watermarking);
   res.status(201)
          .json(cloudevent.format());
  })
  .catch(err => {
    console.error(err);
    res.status(415) 
          .header("Content-Type", "application/json")
          .send(JSON.stringify(err));
  });
})


app.listen(config.port, () => {
  console.log('Server listening on port %s...',config.port);
});

module.exports = app
