var app = require('../server.js')
var ticketId="";
chai = require('chai'),
request = require('supertest');


describe('POST /watermarking', function() {
  it('Test Water-Markting web service ', function(done) {
  request(app)
    .post('/watermarking')
    .send({'title': 'The monk who sold his ferrari','author':'Robin Sharma','content':'Sols Ferrari','topic':'Drama'})
    .set('Accept', 'application/json')
    .expect('Content-Type', /html/)
    .expect(200)
    .end(function(err, res) {
      if (err) return done(err);
      ticketId = res.text;
      console.log("Document Watermarking Ticket ID {}",ticketId)
      console.log()
      console.log(" *********** Check the status of ticket ***********")
      console.log("http://localhost:3600/watermarking-status/"+ticketId);
      console.log()
      console.log(" *********** Get the document of ticket ***********")
      console.log("http://localhost:3600/watermarked-document/"+ticketId);

      done();
    });
  });
});
