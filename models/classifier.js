var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ClassifierSchema   = new Schema({
    classifier: Schema.Types.Mixed
});

module.exports = mongoose.model('Classifier', ClassifierSchema);// Export some model methodsvar mongoose     = require('mongoose');


