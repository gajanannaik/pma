var express = require('express');
var router = express.Router();

 
var complaint = require('../models/complaint');
var victim = require('../models/victim');
var fir = require('../models/fir');
var police = require('../models/police');
var prisoner = require('../models/prisoner');
var chargesheet = require('../models/chargesheet');
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
});
  

router.get('/api/complaint', complaint.getAllComplaint);
router.post('/api/complaint', complaint.createComplaint);
//router.get('/api/complaint/:id', profiles.getSingleProfile);
router.delete('/api/complaint/:id', complaint.deleteComplaint);
//router.get('/api/complaint/:id', profiles.getSingleProfile);
//router.put('/api/profiles/:id', profiles.updateProfile);

router.get('/api/victim', victim.getAllVictim);
router.post('/api/victim', victim.createVictim);
//router.get('/api/victim/:id', profiles.getSingleProfile);
router.delete('/api/victim/:id', victim.deleteVictim);
//router.get('/api/victim/:id', profiles.getSingleProfile);
//router.put('/api/profiles/:id', profiles.updateProfile);


router.get('/api/fir', fir.getAllFir);
router.post('/api/fir', fir.createFir);
//router.get('/api/fir/:id', profiles.getSingleProfile);
router.delete('/api/fir/:id', fir.deleteFir);
//router.get('/api/fir/:id', profiles.getSingleProfile);
//router.put('/api/profiles/:id', profiles.updateProfile);

router.get('/api/police', police.getAllPolice);
router.post('/api/police', police.createPolice);
//router.get('/api/police/:id', profiles.getSingleProfile);
router.delete('/api/police/:id', police.deletePolice);
//router.get('/api/police/:id', profiles.getSingleProfile);
//router.put('/api/profiles/:id', profiles.updateProfile);

router.get('/api/prisoner', prisoner.getAllPrisoner);
router.post('/api/prisoner', prisoner.createPrisoner);
//router.get('/api/prisoner/:id', profiles.getSingleProfile);
router.delete('/api/prisoner/:id', prisoner.deletePrisoner);
//router.get('/api/prisoner/:id', profiles.getSingleProfile);
//router.put('/api/profiles/:id', profiles.updateProfile);

router.get('/api/chargesheet', chargesheet.getAllChargesheet);
router.post('/api/chargesheet', chargesheet.createChargesheet);
//router.get('/api/chargesheet/:id', profiles.getSingleProfile);
router.delete('/api/chargesheet/:id', chargesheet.deleteChargesheet);
//router.get('/api/chargesheet/:id', profiles.getSingleProfile);
//router.put('/api/profiles/:id', profiles.updateProfile);

module.exports = router;