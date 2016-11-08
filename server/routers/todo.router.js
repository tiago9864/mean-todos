var express = require('express');
var router = express.Router();
var Todo = require('../models/todo.model.js');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));



router.get('/todos', function(req, res){
   Todo.find({}, function(err, foundTodos){
    if(err){
       res.status(500).json({
         err: err
       });
     }
      res.status(200).json({
        todos: foundTodos
      });
   });

});
router.get('/todos/id:', function(req, res){});
router.post('/todos', function(req, res){
  //console.log(reg.body);

  var todo = new Todo(req.body);
  todo.save(function(err){
    if(err){

  res.status(500).json({

    err: err
  });
}
res.status(201).json({
  msg: 'succefully created todo'
});
  });
  //res.send(req.body);
});

router.put('/todos/id:', function(req, res){});
router.delete('/todos/id:', function(req, res){});

module.exports = router;
