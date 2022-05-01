const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const autopopulate = require('mongoose-autopopulate');

var staffModelObj = {};

const TaskSchema = new Schema({
    originalFilename: { type: String, required:[true, 'Please add filename']},
    path: { type: String, required:[true, 'Please add path'] },
    type: { type: String,  required:[true, 'Please add type'] },
    active: { type: Boolean, required: true },
    createdBy: ObjectId,
    updatedBy: ObjectId 
  }, {
    timestamps: true
  });
  TaskSchema.plugin(autopopulate);

  staffModelObj.taskModel = mongoose.model('staff-task', TaskSchema, 'staff-task');

module.exports = staffModelObj;