const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const app = express()
const port = 3031 || process.env.port
const connection = `mongodb+srv://Muchmark:${process.env.mongopassword}@cluster0.irij3nk.mongodb.net/reshimgath?retryWrites=true&w=majority`
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors({
//     origin: '*',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     allowedHeaders: '*'
// }));

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });

//import routers
const authUser = require("./api/User/authUser")
const admincrud = require("./api/Admin/adminCrud")

//import { nanoid } from 'nanoid'


//use middlewaers 



//connect to mongodb
mongoose.set('strictQuery', true);
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) => {
}).catch(() => {
})

app.get("/", (req, res) => {
    res.status(200).send("hello user")
})

//add the routers
app.use('/auth', authUser)
app.use('/admincrud', admincrud)

app.listen(port, () => {
    console.log("app listening on port " + port)
})
