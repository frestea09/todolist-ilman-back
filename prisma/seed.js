"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const faker_1 = require("@faker-js/faker");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.task.create({
        data: {
            author: faker_1.faker.person.fullName(),
            taskName: faker_1.faker.commerce.department(),
            deleteTaskTime: faker_1.faker.date.anytime(),
            updateTaskTime: faker_1.faker.date.anytime(),
            doDateTask: faker_1.faker.date.anytime(),
            taskCreatedAt: faker_1.faker.date.anytime(),
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
//# sourceMappingURL=seed.js.map