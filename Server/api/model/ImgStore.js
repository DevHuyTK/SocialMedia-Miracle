import mongoose from 'mongoose'

const imgSchema = new mongoose.Schema({
    imgURL:{
        type: String,
        require: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

export default mongoose.model('Img', imgSchema);