const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const autopopulate = require('mongoose-autopopulate');

var adminModelObj = {};

const userDetailsSchema = new Schema({
  code: { type: String, required:[true, 'Please add code'], unique: true, uniqueCaseInsensitive: true },
  designation: { type: String, required:[true, 'Please add designation'] },
  name: { type: String,  required:[true, 'Please add name'] },
  active: { type: Boolean, required: true },
  createdBy: ObjectId,
  updatedBy: ObjectId 
}, {
  timestamps: true
});
userDetailsSchema.plugin(autopopulate);

const calendarDetailsSchema = new Schema({
  title: { type: String, required:[true, 'Please add title']},
  start: { type: String, required:[true, 'Please add start'] },
  end: { type: String,  required:[true, 'Please add end'] },
  active: { type: Boolean, required: true },
  createdBy: ObjectId,
  updatedBy: ObjectId 
}, {
  timestamps: true
});
calendarDetailsSchema.plugin(autopopulate);

const ExamScheduleSchema = new Schema({
  originalFilename: { type: String, required:[true, 'Please add filename']},
  path: { type: String, required:[true, 'Please add path'] },
  type: { type: String,  required:[true, 'Please add type'] },
  active: { type: Boolean, required: true },
  createdBy: ObjectId,
  updatedBy: ObjectId 
}, {
  timestamps: true
});
ExamScheduleSchema.plugin(autopopulate);

const EventSchema = new Schema({
  originalFilename: { type: String, required:[true, 'Please add filename']},
  path: { type: String, required:[true, 'Please add path'] },
  type: { type: String,  required:[true, 'Please add type'] },
  active: { type: Boolean, required: true },
  createdBy: ObjectId,
  updatedBy: ObjectId 
}, {
  timestamps: true
});
EventSchema.plugin(autopopulate);

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


adminModelObj.userDetailsModel = mongoose.model('admin-users', userDetailsSchema, 'admin-users');
adminModelObj.calendarDetailsModel = mongoose.model('admin-calendar', calendarDetailsSchema, 'admin-calendar');
adminModelObj.examScheduleModel = mongoose.model('admin-exam', ExamScheduleSchema, 'admin-exam');
adminModelObj.eventModel = mongoose.model('admin-event', EventSchema, 'admin-event');
// adminModelObj.taskModel = mongoose.model('staff-task', TaskSchema, 'staff-task');

module.exports = adminModelObj;