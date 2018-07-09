var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var uploadText= new Schema({
    queryText:
        {
            type: String,
            required: false
        }
});
module.exports = mongoose.model('uploadText', uploadText);