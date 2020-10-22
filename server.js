const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const savedInfoRoutes = require('./routes/savedInfo')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://main:main@skyscanner.v4chs.mongodb.net/Skyscanner?retryWrites=true&w=majority";
mongoose.connect(uri, ()=>{},{ useUnifiedTopology: true,useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("Mongodb connection succesfully established ")
})

app.use('/savedInfo', savedInfoRoutes)
// app.post("/",()=>{
//     console.log("inpost")
// })

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});