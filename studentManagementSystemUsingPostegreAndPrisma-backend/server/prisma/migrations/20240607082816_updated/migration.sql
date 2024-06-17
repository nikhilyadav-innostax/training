/*
  Warnings:

  - You are about to drop the column `subjectID` on the `Sections` table. All the data in the column will be lost.
  - You are about to drop the column `teacherID` on the `Sections` table. All the data in the column will be lost.
  - You are about to drop the column `teacherid` on the `Sections` table. All the data in the column will be lost.
  - You are about to drop the column `teacherID` on the `Subjects` table. All the data in the column will be lost.
  - You are about to drop the column `course` on the `Teachers` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Teachers` table. All the data in the column will be lost.
  - You are about to drop the column `course` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `department` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Departments` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `subjectId` to the `Sections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherId` to the `Sections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `Teachers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjectId` to the `Teachers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sections" DROP COLUMN "subjectID",
DROP COLUMN "teacherID",
DROP COLUMN "teacherid",
ADD COLUMN     "subjectId" TEXT NOT NULL,
ADD COLUMN     "teacherId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subjects" DROP COLUMN "teacherID";

-- AlterTable
ALTER TABLE "Teachers" DROP COLUMN "course",
DROP COLUMN "year",
ADD COLUMN     "courseId" TEXT NOT NULL,
ADD COLUMN     "subjectId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "course",
DROP COLUMN "department",
ADD COLUMN     "courseId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Departments";

-- CreateTable
CREATE TABLE "Courses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sections" ADD CONSTRAINT "Sections_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teachers" ADD CONSTRAINT "Teachers_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teachers" ADD CONSTRAINT "Teachers_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
