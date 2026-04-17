const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Clean the database first so we don't accidentally duplicate records
  await prisma.assignment.deleteMany();
  await prisma.course.deleteMany();
  await prisma.studyPlan.deleteMany();
  await prisma.reminder.deleteMany();
  await prisma.student.deleteMany();

  // 1. Create Students
  const alice = await prisma.student.create({
    data: {
      fullName: 'Alice Johnson',
      email: 'alice.j@university.edu',
      program: 'Computer Science',
    },
  });

  const marcus = await prisma.student.create({
    data: {
      fullName: 'Marcus Smith',
      email: 'm.smith@university.edu',
      program: 'Business Administration',
    },
  });

  const elena = await prisma.student.create({
    data: {
      fullName: 'Elena Rodriguez',
      email: 'elena.r@university.edu',
      program: 'Graphic Design',
    },
  });

  console.log('Students created successfully!');

  // 2. Create Courses
  const csCourse = await prisma.course.create({
    data: {
      courseCode: 'CS101',
      courseName: 'Intro to Programming',
      instructor: 'Dr. Alan Turing',
      studentId: alice.id,
    },
  });

  const busCourse = await prisma.course.create({
    data: {
      courseCode: 'BUS205',
      courseName: 'Marketing Principles',
      instructor: 'Prof. Sarah Jenkins',
      studentId: marcus.id,
    },
  });

  const artCourse = await prisma.course.create({
    data: {
      courseCode: 'ART300',
      courseName: 'Digital Typography',
      instructor: 'Prof. Paul Rand',
      studentId: elena.id,
    },
  });

  console.log('Courses created successfully!');

  // 3. Create Assignments
  await prisma.assignment.create({
    data: {
      title: 'Build a Calculator App',
      dueDate: new Date('2026-04-20T23:59:00Z'),
      status: 'In Progress',
      priority: 'High',
      courseId: csCourse.id,
      studentId: alice.id,
    },
  });

  await prisma.assignment.create({
    data: {
      title: 'Semester Marketing Case Study',
      dueDate: new Date('2026-04-25T17:00:00Z'),
      status: 'Not Started',
      priority: 'Urgent',
      courseId: busCourse.id,
      studentId: marcus.id,
    },
  });

  await prisma.assignment.create({
    data: {
      title: 'Font Pairing Examples Portfolio',
      dueDate: new Date('2026-05-01T12:00:00Z'),
      status: 'Done',
      priority: 'Medium',
      courseId: artCourse.id,
      studentId: elena.id,
    },
  });

  console.log('Assignments created successfully!');
  console.log('Database has been seeded! 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
