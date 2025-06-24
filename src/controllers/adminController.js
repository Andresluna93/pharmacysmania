import Student from '../models/estudianteModel.js'

export const getStudents = async (req,res)=>{
    const estudiantes = await Student.find()
    
    res.json(estudiantes)
}