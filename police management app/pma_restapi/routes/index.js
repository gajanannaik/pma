var express = require('express');
var router = express.Router();

 
var complaint = require('../models/complaint');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
});
  

router.get('/api/complaint', complaint.getAllComplaint);
//router.post('/api/profiles', profiles.createProfile);
//router.get('/api/profiles/:id', profiles.getSingleProfile);
//router.delete('/api/profiles/:id', profiles.deleteProfile);
//router.put('/api/profiles/:id', profiles.updateProfile);

module.exports = router;