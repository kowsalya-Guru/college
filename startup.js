const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const {adminModel,staffModel,studentModel} = require('./backend/models/user');

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true})
.then(() => {
  console.log("Connected to database!");
})
.catch(err => {
  console.log("Connection failed!"); console.log(err);
});

mongoose.connection.on('error', err => {
  console.log(err);
})

const adminpassword = 'admin';
bcrypt.hash(adminpassword, parseInt(process.env.SALT_ROUNDS))
.then(function(hashedPassword) {
    adminModel.create({
        name: 'Admin',
        email: 'admin123@gmail.com',
        phone:9940724138,
        password: hashedPassword,
        active: true
    }, function(usrErr, usrRes) {
        if(usrErr) {
            console.log(usrErr);
        } else {
            adminModel.findByIdAndUpdate(usrRes._id, {createdBy: usrRes._id}, function(usrUpdateErr, usrUpdate) {
                if(usrUpdateErr) {
                    console.log(usrUpdateErr);
                } else {
                    console.log('admin created successfully');
                } 
            });
        }
    });
})
.catch(function(err) { 
    console.log(err); }
);


const staffpassword = 'staff';
bcrypt.hash(staffpassword, parseInt(process.env.SALT_ROUNDS))
.then(function(hashedPassword) {
    staffModel.create({
        name: 'Staff',
        email: 'staff123@gmail.com',
        phone:9940724138,
        password: hashedPassword,
        active: true
    }, function(usrErr, usrRes) {
        if(usrErr) {
            console.log(usrErr);
        } else {
            staffModel.findByIdAndUpdate(usrRes._id, {createdBy: usrRes._id}, function(usrUpdateErr, usrUpdate) {
                if(usrUpdateErr) {
                    console.log(usrUpdateErr);
                } else {
                    console.log('Staff created successfully');
                } 
            });
        }
    });
})
.catch(function(err) { 
    console.log(err); }
);


const studentpassword = 'student';
bcrypt.hash(studentpassword, parseInt(process.env.SALT_ROUNDS))
.then(function(hashedPassword) {
    studentModel.create({
        name: 'Student',
        email: 'student123@gmail.com',
        phone:9940724138,
        password: hashedPassword,
        active: true
    }, function(usrErr, usrRes) {
        if(usrErr) {
            console.log(usrErr);
        } else {
            studentModel.findByIdAndUpdate(usrRes._id, {createdBy: usrRes._id}, function(usrUpdateErr, usrUpdate) {
                if(usrUpdateErr) {
                    console.log(usrUpdateErr);
                } else {
                    console.log('Student created successfully');
                } 
            });
        }
    });
})
.catch(function(err) { 
    console.log(err); }
);