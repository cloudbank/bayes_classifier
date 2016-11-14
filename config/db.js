var fs = require('fs');
var parse = require('csv-parse');
var natural = require('natural');
    
exports.initialize = function() {
        console.log("initialize");
        classifier = new natural.BayesClassifier();
        var parser = parse({
            delimiter: ',',
            columns: true
        }, function(err, data) {
            for (var i = data.length - 1; i >= 0; i--) {
                classifier.addDocument(data[i]['name'], data[i]['website']);
                //console.log(data[i]['name']);
            };
            classifier.train()
            classifier.save('classifier.json', function(err, classifier) {
                // the classifier is saved to the classifier.json file!
                if (err) {
                    return console.log(err);
                } else {
                    console.log("The classifier file was saved!");
                }
            });
        });
        fs.createReadStream(__dirname + '/master.csv').pipe(parser);
    }
    /*var c = Classifier({
        classifier: cls.toJson()
    });


    
    c.save(function(err) {
        if (err) throw err;
        console.log('classifier saved' + cls.toJson());

    });
    */