/**
 * Created by aprovis on 08/05/2015.
 */

var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('localhost/nodeblog');

router.get('/add', function(req, res, next) {
    res.render('addcategory', {
        "title": "Add Category"
    })
});

router.post('/add', function(req, res, next) {
    // Get form values
    var title       = req.body.title;

    // Form validation
    req.checkBody('title', 'Title field is required').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.render('addcategory', {
            errors: errors,
            "title": title
        });
    } else {
    }
});

module.exports = router;
