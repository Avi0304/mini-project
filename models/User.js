const mongoose =  require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    userId: {
        type: String,
        require:true
    },
    password : {
        type: String,
        require: true
    },
    verified: {
        type:Boolean
    }
},{timeStamp: true}
);

const User = mongoose.model("user",UserSchema);
module.exports = User