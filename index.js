import  express  from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config"
import productRouter from "./src/routes/product.route.js";
import orderRouter from "./src/routes/order.route.js";
import categoryRouter from "./src/routes/category.route.js";
import userRouter from "./src/routes/user.route.js";
import "./src/database/database.js"


const app = express();

app.set("port", process.env.PORT || 4000)
app.listen(app.get("port"), ()=>{
    console.log("Estoy en el puerto"+app.get("port"))
})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))

app.use("/api", productRouter)
app.use("/api", orderRouter)
app.use("/api", categoryRouter)
app.use("/api", userRouter)

