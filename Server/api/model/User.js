import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        default: '',
        min:6,
        max:255
    },
    tagname:{
        type: String,
        default: '',
        min:4,
        max: 255
    },
    email:{
        type: String,
        required: true,
        min:6,
        max:255
    },
    password:{
        type: String,
        required: true,
        min:6,
        max:1024
    },
    age:{
        type: Number,
        default: null
    },
    date:{
        type: Date,
        default: Date.now
    },
    active:{
        type: Boolean,
        default: true
    },
    avatar:{
        type: String,
        default: ''
    },
    role:{
        type:String,
        default: 'member'
    }
})

export default mongoose.model('User', userSchema);