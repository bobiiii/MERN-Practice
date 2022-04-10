const mongoose = require("mongoose")
//receving value of DATABSE from config.env
//bcz its value have username pass and DB name
const db = process.env.DATABASE;

//connecting with mongo db
mongoose.connect(db).then(()=>{
    console.log("connection scuccesful")
}).catch(err => console.log(err))
