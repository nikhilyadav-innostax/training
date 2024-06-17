const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTeacher = async(req, res) => {
    try {
        const value = req.body;
        var components = value.birthDate.split('/');
        var dateObject = new Date(components[2], components[1] - 1, components[0]);
        console.log(dateObject)
        await prisma.teachers.create({
            data: {
                name: value.name,
                fname: value.fname,
                address: value.address,
                contact: value.contact,
                altercontact: value.altercontact,
                gender: value.gender,
                birthDate: dateObject,
                subjectId: value.subjectId,
                courseId: value.courseId,
            }
        })
        res.json({success: true})
    } catch (error) {
        
    }
}
module.exports = {createTeacher}