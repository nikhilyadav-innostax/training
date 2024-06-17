const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

const createCourses = async(req, res) => {
    try {
        const value = req.body.name;
        console.log(value)
        await prisma.courses.create({
            data: {
                name: value
            }
        })
        res.json({success: true})
    } catch (error) {
        console.log(error)
        res.json({success: false})
    }
}

module.exports = {createCourses}