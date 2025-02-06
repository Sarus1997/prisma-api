import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.product.createMany({
        data: [
            {
                product_id: '1',
                image_url: 'http://example.com/image1.jpg',
                product_name: 'Product 1',
                price: 10.99,
                brand: 'Brand A',
                status: 'Available',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                product_id: '2',
                image_url: 'http://example.com/image2.jpg',
                product_name: 'Product 2',
                price: 20.99,
                brand: 'Brand B',
                status: 'Out of Stock',
                created_at: new Date(),
                updated_at: new Date(),
            }
        ]
    });

    const allProducts = await prisma.product.findMany();
    console.log(allProducts);
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

