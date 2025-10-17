import express from "express";
import sequelize from "./config/db.js";
import userRouter from "./routes/user.routes.js";
import appRouter from "./routes/app.routes.js";
import assetRouter from "./routes/asset.routes.js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

//views, components & files setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(__filename);
app.set("view engine", "hbs");
app.set("/views", path.join(__dirname, "views", "components"));
//

//pulic folder & static files (sever them its files wont work)
app.use(express.static("public"));

//routes & comtrollers
app.use("/app", appRouter);
app.use("/usr", userRouter);
app.use("/asset", assetRouter);
app.get("/", (req, res) => {
  res.render("index");
});

//app running & sync sequelize
(async function syncFuc() {
  await sequelize.sync();

  app.listen(`${process.env.APP_PORT}`, () => {
    console.log("Server running on port: " + process.env.APP_PORT);
  });
})();
