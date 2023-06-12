//model
const mongoose = require('mongoose');
const {Schema} = mongoose;


const reactionSchema = new Schema({
});

const thoughtSchema = new Schema({
    thoughtText:{
        type: String,
        required:true,
        minlength: 1,
        maxlength:280
    },
    createdAt:{
        type: Date,
        default:Date.now
    },
    username:{
        type: String,
        required:true
    },
    reaction: [reactionSchema]
});

const Thought = mongoos.model("Thought", thoughtSchema);
module.exports = userSchema;