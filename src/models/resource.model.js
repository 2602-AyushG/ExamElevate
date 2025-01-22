import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
    name:{                    //Name given to it
        type: String,
        required: true
    },
    exam:{              //'JEE'
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    type:{
        type: String,
        enum:['notes','books','pyqs'],
        required: true
    },
    path:{
        type: String,
        required: true
    },
    uploader:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    uploadedAt:{
        type: Date,
        default: Date.now
    },
    views:{
        type: Number,
        default: 0
    }
});


const Resource = mongoose.model('Resource', resourceSchema);
export default Resource;