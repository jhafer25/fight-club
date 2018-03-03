const express = require('express');
const router = express.Router();
const fighter = require('../models/fighter.js');

router.get('/', function(req, res) {
  	fighter.selectAll(function(data) {
    	let fighterObject = {
      		fighters: data
    	};
    	res.render('index', fighterObject);
  	});
});

router.post('/fighters', function(req, res) {
  	fighter.insertOne([
    	'fighter_name',
      'fighter_gender',
      'fighter_image'
  	], 
  	[
    	req.body.fighter_name,
      req.body.fighter_gender,
      req.body.fighter_image
  	], 
  	function(data) {
    	res.redirect('/');
  	});
});


module.exports = router;