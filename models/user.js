const mongoose = require('mongoose');
const {Schema} = mongoose;


const userSchema = new Schema({
  
    username: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      default: 'username',
    },

    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^\S+@\.\S+$/]
    },

    thoughts: [{
      type: Schema.Types.ObjectId,
      red:'thought',
        }
    ],

    friends: {
        type: Schema.Types.ObjectId,
        ref:'User',
      },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
userSchema.virtual("friendCount").get(function(){
    return this.friends.length;
});

module.exports = userSchema;