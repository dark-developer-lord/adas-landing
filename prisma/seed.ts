import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { siteData } from '../lib/site-data';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();


async function main() {
  console.log('Start seeding ...');

  // Clear existing data
  await prisma.page.deleteMany();
  await prisma.user.deleteMany();

  // Create default admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const user = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'ADMIN',
    },
  });
  console.log(`Created user with id: ${user.id}`);

  for (const [category, pages] of Object.entries(siteData)) {
    for (const [slug, content] of Object.entries(pages)) {
      const page = await prisma.page.create({
        data: {
          slug,
          category,
          title: content.title,
          description: content.description,
          content: content.content || '',
          iconName: content.icon || null,
          features: JSON.stringify(content.features || []),
        },
      });
      console.log(`Created page with id: ${page.id} (${category}/${slug})`);
    }
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
