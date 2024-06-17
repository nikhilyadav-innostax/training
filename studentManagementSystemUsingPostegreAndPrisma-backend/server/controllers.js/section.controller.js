const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

const createSection = async(req, res) => {
    try {
        const value = req.body;
        await prisma.sections.create({
            data: {
                teacherId: value.teacherId,
                subjectId: value.subjectId
            }
        })
        res.json({success: true})
    } catch (error) {
        console.log(error);
        res.json({success: false})
    }
}

module.exports = {createSection}