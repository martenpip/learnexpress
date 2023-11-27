const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { faker } = require('@faker-js/faker');

async function main() {
    for(let i = 0; i<10; i++){
        const user = await prisma.user.create({
            data: {
                name: faker.person.fullName(),
                email: faker.internet.email(),
            },
        });
        console.log(user);
        for(let i = 0; i<10; i++){
            const article = await prisma.article.create({
                data: {
                    title: faker.lorem.sentence(),
                    content: faker.lorem.paragraphs(5),
                    author: {
                        connect: user
                    }
                },
            });
            console.log(article);
        }
    }


}
 
main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})