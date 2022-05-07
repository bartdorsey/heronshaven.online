import { PrismaClient } from '@prisma/client';
import users from './seeds/users';
import bookmarks from './seeds/bookmarks';

const prisma = new PrismaClient();

async function main() {
    await prisma.bookmark.deleteMany({ where: {} })
    await prisma.user.deleteMany({ where: {}});
    let currentUser;
    
    try {
        currentUser = await prisma.user.create({
            data: {
                email: 'bart@bartdorsey.com',
                name: 'admin'
            }
        })
    }
    catch (error) {
        console.error(error);
    }

    if (!currentUser) {
        console.log("No current user, exiting...")
        return;
    }

    try {
        for (const bookmark of bookmarks) {
            await prisma.bookmark.create({
                data: {
                    ...bookmark,
                    authorId: currentUser.id
                }
            })
        }
    }
    catch (e) {
        console.error(e);
    }
    // Do stuff
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });