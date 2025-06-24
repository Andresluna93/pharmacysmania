import mongoose from "mongoose";
import { trim } from "zod/v4";

const embajadorSchema = new mongoose.Schema({
       username:{
        type:String,
        require:true,
        trim:true
    },
    telefono:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    colegio:{
        type:String,
        require: true,
        trim:true
    },
    terminos:{
        type:Boolean,
        require:true
    }
},{
    timestamps:true,
    versionKey:false
})

export default mongoose.model('Embajador',embajadorSchema)