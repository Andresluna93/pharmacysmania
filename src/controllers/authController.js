import User from '../models/userModel.js'
import Student from '../models/estudianteModel.js'
import Embajador from '../models/embajadorModel.js'
import bcrypt from 'bcryptjs'
import {createAccesToken} from '../libs/jwt.js'

export const register = async (req,res)=>{
    const {email,password,username}=req.body
    try{
        const passwordhash = await bcrypt.hash(password,10) //string aleatorio
        const newUser = new User({
            username,
            email,
            password:passwordhash,
        })
        const userSaved = await newUser.save()
        const token = await createAccesToken({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
        })

        res.cookie('token',token)
        res.json("user created")
    }catch(error){
        console.log(error)
    }
}

export const login = async (req,res)=>{
    const {email,password}=req.body
    try{
        const userFound = await User.findOne({email})
        if(!userFound) return res.status(400).json("user not found")
        
        const isMatch = await bcrypt.compare(password, userFound.password)
        if(!isMatch) return res.status(400).json("incorrect password")
        
        
        const token = await createAccesToken({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        })

        res.cookie('token',token)
        res.json("user login succesfully")
    }catch(error){
        console.log(error)
    }

}

export  const logout = (req,res)=>{
    res.cookie('token', "",{
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const registerStudent = async (req,res)=>{
    const{email,colegio,username,telefono} = req.body
    console.log(req.body)

    const newStudent = new Student({
        username,
        telefono,
        email,
        colegio
    })
    await newStudent.save()

    res.json("estudiante registrado")
}

export const registerEmbajador = async (req,res)=>{
    const{email,colegio,username,terminos,telefono} = req.body
    console.log(req.body)

    const newEmbajador = new Embajador({
        username,
        telefono,
        email,
        colegio,
        terminos
    })
    await newEmbajador.save()

    res.json("embajador registrado")
}