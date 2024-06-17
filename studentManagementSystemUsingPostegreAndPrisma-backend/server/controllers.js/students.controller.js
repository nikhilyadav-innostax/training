const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createStudent = async(req, res) => {
    try {
        const value = req.body;
        // console.log(value)
        // console.log(value.birthDate);

        var components = value.birthDate.split('/');
        console.log(components)
        // Subtract 1 from the month to adjust for JavaScript's zero-based month indexing
        var dateObject = new Date(components[2], components[1] - 1, components[0]);
        dateObject.setUTCHours(0, 0, 0, 0)
        console.log(dateObject)
        await prisma.user.create({
            data: {
                name: value.name,
                fname: value.fname,
                contact: value.contact,
                altercontact: value.altercontact,
                gender: value.gender,
                birthDate: dateObject,
                year: value.year,
                address: value.address,
                courseId:value.courseId
            }
        })
        res.json({success: true})
    } catch (error) {
        console.log(error)
        res.json({success: false})
    }
}
module.exports = {
    createStudent
}