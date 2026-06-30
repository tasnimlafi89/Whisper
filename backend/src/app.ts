import express from "express"
import { clerkMiddleware } from '@clerk/express'
import authRoutes from "./routes/authRoutes"
import chatRoutes from "./routes/chatRoutes"
import messageRoutes from "./routes/messageRoutes"
import userRoutes from "./routes/userRoutes"
import { errorHandler } from "./middleware/errorHandler"

const app = express();

app.use(express.json()) //parse incomming JSON request bodies and makes them  available as req.body in your route handlers.

//Middleware that integrates Clerk authentication into your Express application.
// It checks the request's cookies and headers for a session JWT and, if found, attaches the Auth object to the request object under the auth key.
app.use(clerkMiddleware())

app.get("/health",(req,res)=>{
    res.json({status:"ok",message:"server is running"});
})

app.use("/api/auth",authRoutes)
app.use("/api/chats",chatRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)


//error Handlers must come after all the routes and other middlewares so they can catch errors passed with next(err)
//or throw errors in route handlers
app.use(errorHandler);

export default app; 