import mongoose from "mongoose";

const estudianteSchema = new mongoose.Schema({
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
    }
},{
    timestamps:true,
    versionKey:false
})

export default mongoose.model('Estudiante',estudianteSchema)