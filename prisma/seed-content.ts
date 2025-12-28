import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding content pages...')

  const pages = [
    // Industries
    {
      slug: 'farmers',
      category: 'industries',
      title: 'Farmers',
      description: 'Empowering individual farmers with enterprise-grade aerial intelligence.',
      content: 'Our platform provides farmers with real-time insights into crop health, soil moisture, and pest infestations. By leveraging autonomous drones, farmers can monitor hundreds of acres in minutes, not days.',
      iconName: 'Tractor',
      features: JSON.stringify(['Crop Health Monitoring', 'Automated Spraying', 'Yield Estimation']),
    },
    {
      slug: 'agri-holdings',
      category: 'industries',
      title: 'Agri Holdings',
      description: 'Scalable solutions for large-scale agricultural operations and cooperatives.',
      content: 'Manage multiple farms and vast territories from a single dashboard. Our centralized control system allows agri-holdings to optimize logistics, resource allocation, and harvest planning across regions.',
      iconName: 'Building2',
      features: JSON.stringify(['Multi-Site Management', 'Fleet Coordination', 'Data Aggregation']),
    },
    {
      slug: 'government',
      category: 'industries',
      title: 'Government',
      description: 'Supporting regulatory bodies and environmental agencies with precise data.',
      content: 'We partner with government agencies to monitor land use, water resources, and environmental compliance. Our secure, auditable data streams ensure transparency and informed policy-making.',
      iconName: 'Landmark',
      features: JSON.stringify(['Environmental Monitoring', 'Land Use Auditing', 'Disaster Response']),
    },

    // Use Cases / Platform Features
    {
      slug: 'precision-farming',
      category: 'use-cases',
      title: 'Precision Farming',
      description: 'Targeted interventions that save costs and maximize yields.',
      content: 'Stop treating your entire field as a single unit. Our precision farming tools allow you to apply water, fertilizer, and pesticides only where they are needed, reducing waste by up to 40%.',
      iconName: 'Target',
      features: JSON.stringify(['Variable Rate Application', 'Soil Analysis', 'Micro-Climate Monitoring']),
    },
    {
      slug: 'smart-irrigation',
      category: 'use-cases',
      title: 'Smart Irrigation',
      description: 'Optimize water usage with thermal imaging and moisture sensors.',
      content: 'Water is your most precious resource. Our drones equipped with thermal cameras can detect irrigation leaks and stressed plants before they are visible to the naked eye.',
      iconName: 'Droplets',
      features: JSON.stringify(['Leak Detection', 'Thermal Imaging', 'Automated Scheduling']),
    },
    {
      slug: 'crop-monitoring',
      category: 'use-cases',
      title: 'Crop Monitoring',
      description: 'Continuous surveillance for pests, diseases, and growth stages.',
      content: 'Get daily updates on the state of your crops. Our AI models automatically identify signs of disease and pest pressure, allowing for rapid intervention.',
      iconName: 'Sprout',
      features: JSON.stringify(['Disease Detection', 'Growth Tracking', 'NDVI Analysis']),
    },
  ]

  for (const page of pages) {
    await prisma.page.upsert({
      where: {
        category_slug: {
          category: page.category,
          slug: page.slug,
        },
      },
      update: page,
      create: page,
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
