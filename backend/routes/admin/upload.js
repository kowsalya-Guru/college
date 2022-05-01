const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const app = express();
const port = 3001
const multipart = require('connect-multiparty');
const {examScheduleModel,eventModel} = require('../../models/admin');
const {taskModel} = require('../../models/staff');

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true})
.then(() => {
  console.log("Connected to database!");
})
.catch(err => {
  console.log("Connection failed!"); console.log(err);
});

mongoose.connection
.on('open', res => {
    console.log('connection made !!!!');
  console.log( ' connection has been made...');
})
.on('error', err => {
  console.log(err);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var bodyParser = require('body-parser');
const multipartMiddleware = multipart({
    uploadDir: '../../uploads'
});

const EventMiddleware = multipart({
  uploadDir: '../../event'
});

const TaskMiddleware = multipart({
  uploadDir: '../../task'
});

const StudentMiddleware = multipart({
  uploadDir: '../../student'
});

app.use(bodyParser.urlencoded({
   extended: false,
}));

const cors = require('cors');
app.use(cors());


app.use(bodyParser.json());

function sendError(res, err) {
    var result = {
        "success": false,
        "error": err
    };
    return res.json(result);
}

function sendSuccess(res,result) {
    var finalResult = {
        "success": true,
        "count": Number(result) + 1,
        "data": result
    };
    return res.json(finalResult);
}

router.get('/', function (req, res) {
  console.log("Rendered Upload page")
  res.render('admin');
});

app.post('/admin/upload', multipartMiddleware, function (req, res) {
  res.send(req.files)
});

app.post('/admin/upload/insert', multipartMiddleware, (req, res) => {
  return new Promise((resolve, reject) => {
    req.body.active = true;
    examScheduleModel.create(req.body).then(function (result) {
        sendSuccess(res, result);
    }).catch(function (err) {
        sendError(res, err);
    });
})

});

app.get('/admin/upload/view', (req, res) => {
  return new Promise((resolve, reject) => {
    examScheduleModel.find({ where: { active: true } }).then(function (result) {
          sendSuccess(res, result);
      }).catch(function (err) {
          sendError(res, err);
      });
  })
})

app.post('/admin/event', EventMiddleware, function (req, res) {
  res.send(req.files)
});

app.post('/admin/event/insert', EventMiddleware, (req, res) => {
  return new Promise((resolve, reject) => {
    req.body.active = true;
    eventModel.create(req.body).then(function (result) {
        sendSuccess(res, result);
    }).catch(function (err) {
        sendError(res, err);
    });
  })
});

app.get('/admin/event/view', (req, res) => {
  return new Promise((resolve, reject) => {
    eventModel.find({ where: { active: true } }).then(function (result) {
          sendSuccess(res, result);
      }).catch(function (err) {
          sendError(res, err);
      });
  })
})

app.post('/staff/task', TaskMiddleware, function (req, res) {
  res.send(req.files)
});

app.post('/staff/task/insert', TaskMiddleware, (req, res) => {
  return new Promise((resolve, reject) => {
    req.body.active = true;
    taskModel.create(req.body).then(function (result) {
        sendSuccess(res, result);
    }).catch(function (err) {
        sendError(res, err);
    });
  })
});

app.get('/staff/task/view', (req, res) => {
  return new Promise((resolve, reject) => {
    taskModel.find({ where: { active: true } }).then(function (result) {
          sendSuccess(res, result);
      }).catch(function (err) {
          sendError(res, err);
      });
  })
})

app.post('/student/answer', TaskMiddleware, function (req, res) {
  res.send(req.files)
});

app.post('/student/answer/insert', TaskMiddleware, (req, res) => {
  return new Promise((resolve, reject) => {
    req.body.active = true;
    taskModel.create(req.body).then(function (result) {
        sendSuccess(res, result);
    }).catch(function (err) {
        sendError(res, err);
    });
  })
});

app.get('/student/answer/view', (req, res) => {
  return new Promise((resolve, reject) => {
    taskModel.find({ where: { active: true } }).then(function (result) {
          sendSuccess(res, result);
      }).catch(function (err) {
          sendError(res, err);
      });
  })
})