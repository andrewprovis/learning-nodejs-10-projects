/**
 * Created by aprovis on 05/05/2015.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About' });
});

module.exports = router;
