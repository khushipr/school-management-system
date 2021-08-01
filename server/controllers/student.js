import student from "../models/student.js"

export const getStudents = async (req, res) => {
    try {
        // Find student of models
        const allStudents = await student.find();
        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({msg: error.msg});
    }
}

export const createStudent = async (req, res) => {
    const student = req.body;
    const newStudent = new student(student);
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({msg: error.msg});
    }
}