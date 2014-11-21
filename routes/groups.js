var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Group = require('../models/group').Group;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('group', {});
});

/* POST home page. */
router.post('/', function(req, res) {
  var group = new Group();
  group.slug = req.body.slug;
  group.title = req.body.title;
  group.description = req.body.description;
  group.created = new Date().toISOString();
  group.save(function(err){
    if(err){
      console.log(err);
      res.render('group', { failure: true, error: err });
    }else{
      res.render('group', { success: true });
    }
  });
});
module.exports = router;