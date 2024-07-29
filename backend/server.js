
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }
const PORT = process.env.PORT ;
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectToDb = require('./config/db')
const Router = require('./routers/route')

const app = express();
app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true,
 }
));
app.use(cookieParser());
// import mongoose
connectToDb()

app.use('/api/v1/', Router)

app.get('/', (req, res) =>{
    res.send('Hello from the server!')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
