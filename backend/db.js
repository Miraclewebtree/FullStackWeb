const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/meanDB', (err) =>{
    if(!err){
        console.log('Database Connection is successful!')
    }else{
        console.log('Error in c onnections!' + err)
    }
})
module.exports = mongoose;