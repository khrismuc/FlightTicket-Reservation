const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const savedInfoRoutes = require('./routes/savedInfo')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

// var jwt = require('express-jwt');
// var jwks = require('jwks-rsa');


// var jwtCheck = jwt({
//       secret: jwks.expressJwtSecret({
//           cache: true,
//           rateLimit: true,
//           jwksRequestsPerMinute: 5,
//           jwksUri: 'https://skyscanner-josh.us.auth0.com/.well-known/jwks.json'
//     }),
//     audience: 'https://express.sample',
//     issuer: 'https://skyscanner-josh.us.auth0.com/',
//     algorithms: ['RS256']
// });

// app.use(jwtCheck);

// app.get('/authorized', function (req, res) {
//     res.send('Secured Resource');
// });

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