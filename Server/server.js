import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

//Import Routes
import AccountRouters from './api/routers/AccountRouters.js'
import postRoute from './api/controller/NewPostControllers/post.js';

dotenv.config();
const app = express();

const port = process.env.PORT;

//Connet to MongoDB
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

//Router Middlewares
app.use('/post', postRoute);
AccountRouters(app)
app.use(cors());

app.listen(port, () => console.log('Server Up and Running in port: ' + port));
