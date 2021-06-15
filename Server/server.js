import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import path from 'path';

//Import Routes
import AccountRouters from './api/routers/AccountRouters.js'
import postRoute from './api/controller/NewPostControllers/post.js';

dotenv.config();
const app = express();

const port = process.env.PORT;

//Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected !!!');
  })
  .catch((err) => {
    console.log(err);
  });

//Middleware
app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));
app.use(express.static(path.join('public/images')));

//Router Middlewares
app.use('/post', postRoute);
AccountRouters(app)
app.use(cors());

app.listen(port, () => console.log('Server Up and Running in port: ' + port));
