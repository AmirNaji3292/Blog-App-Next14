import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        min:3,
        max:20,
      
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:50
    },
    img:{
        type:String,
        default:""
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        min:4
    }
},{timestamps:true})


// postchema

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
       
    },
    description:{
        type:String,
        
    
    },
    img:{
        type:String,
        default:""
    },
    userId:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})

export const User= mongoose.models?.User|| mongoose.model("User",userSchema)
export const Post= mongoose.models?.Post|| mongoose.model("Post",postSchema)