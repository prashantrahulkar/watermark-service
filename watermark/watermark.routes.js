const DocumentWatermarkController = require('./controller/watermark.controller')

exports.routeConfig = function (app) {
  //ticketDocumentMapping.set("1","PrashantRahulkar") 
  const watermark  = new DocumentWatermarkController();

  app.get('/watermark-service', [
    watermark.serviceInit
  ]);

  app.post('/watermarking', 
   watermark.initWaterMarking
  );
  
  // http://localhost:3600/watermarking-status/141fef63-be59-4b86-bf48-4fc43a6dd647
  app.get('/watermarking-status/:id', [
    watermark.waterMartkingStatus
  ]);

  // http://localhost:3600/watermarked-document/141fef63-be59-4b86-bf48-4fc43a6dd647
  app.get('/watermarked-document/:id', [
    watermark.getWaterMarekdDocument
  ]);
  
};
