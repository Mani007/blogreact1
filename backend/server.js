
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }

const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express();
app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true,
 }
));
app.use(cookieParser());

const PORT = process.env.PORT ;

app.get('/', (req, res) =>{
    res.send('Hello from the server!')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
