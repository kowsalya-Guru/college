 const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const uniqueValidator = require("mongoose-unique-validator");
const autopopulate = require('mongoose-autopopulate');

var loginModelObj = {};

const adminSchema = new Schema({
  name: String,
  phone : { type:Number,required:true,unique:true},
  email: { type: String, required: true }, 
  password: { type: String, required: true }, 
  active: Boolean,
  createdBy: ObjectId,
  updatedBy: ObjectId
}, {versionKey: false});
adminSchema.plugin(uniqueValidator, autopopulate);

const staffSchema = new Schema({
  name: String,
  phone : { type:Number,required:true,unique:true},
  email: { type: String, required: true }, 
  password: { type: String, required: true }, 
  active: Boolean,
  createdBy: ObjectId,
  updatedBy: ObjectId
}, {versionKey: false});
staffSchema.plugin(uniqueValidator, autopopulate);


const studentSchema = new Schema({
  name: String,
  phone : { type:Number,required:true,unique:true},
  email: { type: String, required: true }, 
  password: { type: String, required: true }, 
  active: Boolean,
  createdBy: ObjectId,
  updatedBy: ObjectId
}, {versionKey: false});
studentSchema.plugin(uniqueValidator, autopopulate);

loginModelObj.adminModel = mongoose.model('adminUser', adminSchema, 'adminUser');
loginModelObj.staffModel = mongoose.model('staffUser', staffSchema, 'staffUser');
loginModelObj.studentModel = mongoose.model('studentUser', studentSchema, 'studentUser');

module.exports = loginModelObj;

