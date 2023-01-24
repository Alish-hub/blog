import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';


const app = express();
app.use(express.json());
app.use('/api/user', router);
app.use('/api/blog',blogRouter);
mongoose.connect('mongodb+srv://admin:Alesh12345@cluster0.6k5mmul.mongodb.net/?retryWrites=true&w=majority')
.then(()=>app.listen(4000))
.then(()=>console.log('datbase connected successfully'))
.catch((err)=>console.log(err));
// console.log('checking');

 