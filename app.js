const express=require('express')
const path=require('path')
const bodyParser = require("body-parser");

const db=require('./utils/database')
const adminRoutes=require('./routes/admin')


const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes);
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);

