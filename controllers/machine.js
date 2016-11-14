var natural = require('natural')
var fs = require('fs');
var Classifier = require('../models/classifier');
// teach it positive phrases
module.exports.train = function(req, res) {
    console.log("train");
    var vendorString = req.query.vendorString;
    var category = req.query.category;
    
    //update the cleanser
    
    if (vendorString == null || category == null) {
        res.status(401).json({
            "message": "Params Required:  vendorString and category"
        });
    }
    natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
        classifier.addDocument(vendorString, category);
        console.log("trained classifier");
        classifier.save('classifier.json', function(err, classifier) {
            // the classifier is saved to the classifier.json file!
            if (err) {
                return console.log(err);
            } else {
                console.log("The classifier file was saved!");
                res.status(200).json({
                    "message": "Classifier trained with " + vendorString + ":" + category
                });
            }
        });
    });
 
}


module.exports.categorize = function(req, res) {
    console.log("categorize");
    var vendorString = req.query.vendorString;
    if (vendorString == null) {
        res.status(401).json({
            "message": "Param Required:  vendorString"
        });
    }
     natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
        var category = classifier.classify(vendorString);
        console.log("classified as" + category);
        classifier.save('classifier.json', function(err, classifier) {
            // the classifier is saved to the classifier.json file!
            if (err) {
                return console.log(err);
            } else {
                console.log("The classifier file was saved!");
                res.status(200).json({
                    "message": "Classifier categorized  " + vendorString + ":" + category
                });
            }
        });
    });
}