import express from 'express'
import userRouter from './routes/user.routes.js';
import appRouter from './routes/app.routes.js';
import assetRouter from './routes/asset.routes.js';
import path from "path"
import {fileURLToPath} from 'url'


const app = express()

//views, components & files setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(__filename);
app.set("view engine", "hbs");
app.set("/views", path.join(__dirname, "views", "components"))
//

//pulic folder & static files (sever them its files wont work)
app.use(express.static("public"))
 
//routes & comtrollers
app.use('/app', appRouter)
app.use("/user", userRouter);
app.use("/asset", assetRouter)
app.get("/", (req, res)=>{
  res.render("index");
})

app.listen(8101, ()=>{
  console.log("Application running")
})
