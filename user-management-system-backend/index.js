//importing modules
const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./DataBase/db');
const dotenv = require('dotenv');
dotenv.config();
const config = require('./Config');
//apply  middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));


//calling exported Module
// connectDB();



connectDB()
// mongoose.set('debug', true);
// module.exports = connectDB;
//apply midlleware for requesting url
let listOfRequest = {};
let totalRequest = 0;
app.use((req, res, next) => {
  let url = listOfRequest[req.url];
  let newReq = { ...url };
  if (req.url.toString() !== '/api/listOfRequest') {
    ++totalRequest;
    if (url) {
      newReq.total = url.total + 1;
    } else {
      (newReq.total = 1), (newReq.method = req.method);
    }
    listOfRequest[req.url] = newReq;
  }
  next();
});

const UserRoutes=require("./Routes/index")

app.use("/api",UserRoutes)

app.get('/api/listOfRequest', (req, res) => {
  res.json({ totalRequest, listOfRequest });
});




app.get('/', (req, res) => {
  res.json({ message: 'Get Request' });
});

app.use(['/api/*', '/api'], (req, res, next) => {
  console.error('Inavalid Routes');
  console.error(req.url);
  res.status(404).json({
    success: false,
    status: 404,
    data: {},
    message: 'Invalid Routes',
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(req.url);
  return res.status(err.status || 500).json({
    success: err.success || false,
    data: {},
    status: err.status,
    message: err.msg,
  });
});

//server is listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
