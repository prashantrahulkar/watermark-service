const DocumentWatermarkService = require('./services/water-marking.service')

exports.routeConfig = function (app) {
  //ticketDocumentMapping.set("1","PrashantRahulkar") 
  const watermark  = new DocumentWatermarkService();

  app.get('/watermark-service', [
    watermark.serviceInit
  ]);

  app.post('/watermarking', 
   watermark.waterMarkingInit
  );
  
};
