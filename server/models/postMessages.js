import mongoos from 'mongoose';

// first we make an schema
const postSchema = mongoos.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,  // imgs which will be convert into string using npm i react-file-base64
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});
// create model of an schema in mongoDB
const PostMessage = mongoos.model('PostMessage',postSchema);
export default PostMessage;