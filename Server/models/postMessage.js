import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String, // This will be a string that represents the image in base64
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date() // This will be the current date
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;

