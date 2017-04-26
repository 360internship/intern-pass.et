let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let QuestionSchema = new Schema({
     text: { type: String, required: true },
     id: {type: Number, required: true}

    
},
{ 
    versionKey: false
  }
);

module.exports = mongoose.model('Question', QuestionSchema);