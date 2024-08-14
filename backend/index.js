import express from "express"
import dotenv from "dotenv"
import monngose from "mongoose"
import cors from "cors"
import Routes from "./routes/index.js"
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

monngose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB is connected"))
    .catch(() => console.log("MongoDB is not connected"))

app.use("/", Routes)
// uploads to create a image or video
app.use(express.urlencoded({ extended: true }))
app.use("/upload", express.static("./uploads"))

const PORT = process.env.PORT || 8001

app.listen(PORT, () => console.log(`${PORT} has been listening`))