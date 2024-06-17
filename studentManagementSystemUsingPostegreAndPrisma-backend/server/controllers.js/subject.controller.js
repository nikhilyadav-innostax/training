const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

const createSubject = async(req, res) => {
    try {
        const newSubjectData = req.body;
        console.log(newSubjectData);

        await prisma.subjects.create({
            data: {
                name: newSubjectData.name,
            }
        })
        res.json({success: true})
    } catch (error) {
        console.log(error)
        res.json({success: false})
    }
}

module.exports = {createSubject}