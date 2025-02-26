import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

async function main() {
  await prisma.task.create({
    data: {
      author: faker.person.fullName(),
      taskName: faker.commerce.department(),
      deleteTaskTime: faker.date.anytime(),
      updateTaskTime: faker.date.anytime(),
      doDateTask: faker.date.anytime(),
      taskCreatedAt: faker.date.anytime(),
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
