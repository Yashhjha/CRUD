import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import testrouter from "./routes/test.routes.js"
import connectDB from "./config/db.js";
import router from "./routes/userRoutes.js";
import todorouter from "./routes/todo.routes.js"


dotenv.config()

//DB connection 
connectDB();

const app = express();



//middlewares 
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));




//routes
app.use('/api/v1/user',router)
app.use('/api/v1/todo',todorouter)
app.use('/api/v1/test',testrouter)

//PORT 
const PORT = process.env.PORT || 8080

app.listen(PORT,console.log(`app is listening on port ${PORT}`));