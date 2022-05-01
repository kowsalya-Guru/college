var Q = require('q');

const { userDetailsModel,calendarDetailsModel } = require('../models/admin'); 


exports.addUserDetails = (req, res, next) => {
    // console.log('req',req.body);
    req.body.active = true;
    req.body.createdBy = req.userID;
    let userDetails = new userDetailsModel(req.body);
    userDetails.save((err, r_user) => {
        if(err) {
            console.log(err);
            res.status(503).send(err);
        } else {
            res.send(r_user);
        }
    });
}

exports.getUserDetails = (req, res, next) => {
    let _query = {};
    if(Object.keys(req.query).length) {
        _query = req.query;
        if(_query.active) _query.active = _query.active === 'true' ? true : false;
    }
    userDetailsModel.find(_query, (err, r_user) => {
        if(err) {
            console.log(err);
            res.status(503).send(err);
        } else {
            res.send(r_user);
        }
    });
}

exports.updateUserById = (req, res, next) => {
    req.body.updatedBy = req.userID;
    userDetailsModel.findByIdAndUpdate(req.params.id, req.body, (err, r_state) => {
        if(err){
            console.log(err)
            res.status(503).send(err);
        } else if(r_state) {
            res.send(r_state);
        }
    })
}

exports.deleteUserById = (req, res, next) => {
    let _update = {
        active: false,
        updatedBy: req.userID
    }
    userDetailsModel.findByIdAndUpdate(req.params.id, _update, (err, r_state) => {
        if (err) {
            console.log(err)
            res.status(503).send(err);
        } else if (r_state) {
            res.send(r_state);
        }
    })
}

exports.addCalendarDetails = (req, res, next) => {
    // console.log('req',req.body);
    req.body.active = true;
    req.body.createdBy = req.userID;
    let userDetails = new userDetailsModel(req.body);
    calendarDetailsModel.save((err, r_user) => {
        if(err) {
            console.log(err);
            res.status(503).send(err);
        } else {
            res.send(r_user);
        }
    });
}

exports.getCalendarDetails = (req, res, next) => {
    let _query = {};
    if(Object.keys(req.query).length) {
        _query = req.query;
        if(_query.active) _query.active = _query.active === 'true' ? true : false;
    }
    calendarDetailsModel.find(_query, (err, r_user) => {
        if(err) {
            console.log(err);
            res.status(503).send(err);
        } else {
            res.send(r_user);
        }
    });
}

exports.updateCalendarById = (req, res, next) => {
    req.body.updatedBy = req.userID;
    calendarDetailsModel.findByIdAndUpdate(req.params.id, req.body, (err, r_state) => {
        if(err){
            console.log(err)
            res.status(503).send(err);
        } else if(r_state) {
            res.send(r_state);
        }
    })
}

exports.deleteCalendarById = (req, res, next) => {
    let _update = {
        active: false,
        updatedBy: req.userID
    }
    calendarDetailsModel.findByIdAndUpdate(req.params.id, _update, (err, r_state) => {
        if (err) {
            console.log(err)
            res.status(503).send(err);
        } else if (r_state) {
            res.send(r_state);
        }
    })
}