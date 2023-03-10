import express from "express";
import { getAllBlogs,addblog,update,getById, deleteBlog, getByUserId} from "../controllers/blog-controller";

const blogRouter = express.Router();

blogRouter.get('/',getAllBlogs)
blogRouter.post('/add',addblog )
blogRouter.put('/update/:id',update)
blogRouter.get('/:id',getById)
blogRouter.delete('/:id',deleteBlog)
blogRouter.get('/user/:id',getByUserId)



export default blogRouter;