const express = require("express");
const bodyParser =require("body-parser");
const dotenv =require("dotenv");
const morgan =require("morgan");
dotenv.config();
const connectMongodb =require("./init/mongodb");
const {authRoute,categoryRoute,fileRoute}=  require("./routes");
const {errorHandler} =require("./middleware/");
const notFound = require("./controllers/notfound");
//intial app
const app=express();
// connect database
connectMongodb();
//third party middleware
app.use(express.json({limit:"500mb"}));
app.use(bodyParser.urlencoded({limit:"500mb",extended:true}))
app.use(morgan("dev"));
// route section
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/file",fileRoute);
// not found route
app.use("*",notFound);
// error
app.use(errorHandler)
module.exports =app ;