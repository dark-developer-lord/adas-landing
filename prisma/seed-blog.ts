import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding blog posts...')

  const posts = [
    {
      slug: 'future-of-ai-2026',
      title: 'The Future of AI in 2026',
      excerpt: 'Exploring the next generation of neural networks and their impact on daily life.',
      content: 'Artificial Intelligence is evolving at an unprecedented pace. In this article, we explore...',
      category: 'Technology',
      published: true,
      coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    },
    {
      slug: 'generative-design-patterns',
      title: 'Generative Design Patterns',
      excerpt: 'How AI is reshaping the way we approach UI/UX design.',
      content: 'Generative design is not just a buzzword; it is a fundamental shift in how we create...',
      category: 'Design',
      published: true,
      coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
    },
    {
      slug: 'ethical-ai-development',
      title: 'Ethical AI Development',
      excerpt: 'Building responsible AI systems for a better tomorrow.',
      content: 'As AI becomes more powerful, the responsibility to build ethical systems grows...',
      category: 'Ethics',
      published: true,
      coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
    },
  ]

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    })
  }

  console.log('Seeding finished.')
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
