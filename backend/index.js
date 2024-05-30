const express = require('express')
var cors = require('cors')
const connectDB = require('./db')
const app = express();
const port = process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/auth',require('./routes/auth'));
app.use('/api/customer',require('./routes/customer'));
app.use('/api/product',require('./routes/product'));
app.use('/api/invoice',require('./routes/invoice'));

app.get('/',(req,res)=>{
    res.send("Hello Home");
})
app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}/`);
})