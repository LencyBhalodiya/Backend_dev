import mongoose from 'mongoose';
const { Schema } = mongoose;

const tokenSchema = new Schema({
    token: {
        type: String,
        required: true,
        index: true,
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        enum: ['refresh', 'resetPassword'], 
        required: true,
    },
    expires: {
        type: Date,
        required: true,
    },
    blacklisted: {
        type: Boolean,
        default: false,
    },
},
    { timestamps: true }
);

/**
* @typedef Token
*/
const Token = mongoose.model('Token', tokenSchema);

export { Token };
