let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let { Exam, ExamSchema } = require('./exam');

let GroupSchema = new Schema({
     name: { type: String, required: true },
    id: {type: Number, required: true}

    
},
{ 
    versionKey: false
  }
);

GroupSchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
//   if(id == null){
//       GroupSchema = null;
//   }
  next();
});





module.exports = mongoose.model('Group', GroupSchema);