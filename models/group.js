var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GroupSchema = new Schema({                 // Defines a table
  slug: { type: String, required: true, index: { unique: true } }, //javascript
  title: { type: String, required: true, index: true }, // JavaScriptographers Rule
  description: { type: String }, // We talk about Node and Backbone
  created: { type: Date },
  lastEdit: { type: Date }
  });
  
  GroupSchema.methods = {
  
  };
  
  GroupSchema.path('description').validate(function (value) {
    return value.length > 10;
  }, 'Description too short');
  
  GroupSchema.pre('save', function(next, done){
    this.lastEdit = new Date().toISOString();
    next();
});

exports.Group = mongoose.model('Group', GroupSchema);
  