var express = require('express');
var router = express.Router();


/* orientacoes em: http://www.luiztools.com.br/post/como-criar-uma-api-com-nodejs/ */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all customers */
router.get('/customers', function(req, res, next){
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomeSchema, 'customers');
 Customer.find({}).lean().exec(function(e, docs){
   res.json(docs);
   res.end();
 });
})

/* GET one customer */
router.get('/customers/:id', function(req, res, next){
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomeSchema, 'customers');
  Customer.find({_id:req.params.id }).lean().exec(function (e, docs){
    res.json(docs);
    res.end();
  });
});

router.post('/customers/', function(req, res, next){
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomeSchema, 'customers');
  var newcustomer = new Customer({name: req.body.name, email: req.body.email});
  newcustomer.save(function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      res.end();
      return;
    }
    res.json(newcustomer);
    res.end();
  });
});

/* PUT one customer */
router.put('/customers/:id', function(req, res, next){
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomeSchema, 'customers');
  Customer.findOneAndUpdate({_id: req.params.id }, req.body, {upsert: true }, function(err, doc){
    if (err) {
      res.status(500).json({ error: err.message });
      res.end();
      return;
    }
    res.json(req.body);
    res.end();
  });
});

/*DELETE one customer*/
router.delete('/customers/:id', function(req, res, next){
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomeSchema, 'customers');
  Customer.find({_id: req.params.id }).remove(function(err){
    if (err){
      res.status(500).json({error: err.message});
      res.end();
      return;
    }
    res.json(req.body);
    res.end();
  });
});
module.exports = router;
