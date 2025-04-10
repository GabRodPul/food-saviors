import { BusinessCategory, PrismaClient } from '@prisma/client'
// import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'

const prisma = new PrismaClient()

async function main() {
  /// Seeding for Allergens
  const allergens = await prisma.allergen.createMany({
    data: [
      { code: 'f85', name: 'celery' },
      { code: 'f5', name: 'rye' },
      { code: 'f4', name: 'wheat' },
      { code: 'f6', name: 'barley' },
      { code: 'f7', name: 'oat' },
      { code: 'f80', name: 'lobster' },
      { code: 'f23', name: 'crab' },
      { code: 'f245', name: 'egg' },
      { code: 'f254', name: 'plaice' },
      { code: 'w207', name: 'lupin' },
      { code: 'f2', name: 'cows milk' },
      { code: 'f37', name: 'blue mussel' },
      { code: 'f89', name: 'mustard' },
      { code: 'f13', name: 'peanut' },
      { code: 'f10', name: 'sesame seed' },
      { code: 'f14', name: 'soybean' },
      { code: 'f256', name: 'walnut' }
    ]
  })

  /// Seeding for users
  const users = await prisma.user.createMany({
    data: [
      { id: 1, email: 'lucas@gmail.com', name: 'Lucas', dateOfBirth: new Date('2005-01-04') },
      { id: 2, email: 'sophie@gmail.com', name: 'Sophie', dateOfBirth: new Date('1987-05-06') },
      { id: 3, email: 'miguel@gmail.com', name: 'Miguel', dateOfBirth: new Date('2000-02-03') },
    ]
  })

  /// Seeding for businesses
  const businesses = await prisma.business.createMany({
    data: [
      { id: 1, name: 'La Korienta', location: 'Las Palmas', ownerId: 2, category: BusinessCategory.RESTAURANT },
      { id: 2, name: 'La Ciabatta', location: 'Las Palmas', ownerId: 3, category: BusinessCategory.BAKERY },
    ]
  })

  /// Seeding for products
  const products = await prisma.product.createMany({
    data: [
      { id: 1, name: 'Whole milk', price: 1.20, stock: 50, expirationDate: new Date('2025-05-10'), sellerId: 1 },
      { id: 2, name: 'Orange juice', price: 2.00, stock: 60, expirationDate: new Date('2025-04-25'), sellerId: 2 },
    ]
  })

  /// Seeding for reviews
  const reviews = await prisma.review.createMany({
    data: [
      { date: new Date('2025-07-04'), text: "I really recommend Korienta's dishes", userId: 1, businessId: 1 },
      { date: new Date('2025-06-04'), text: "Nothing to say, I loved it", userId: 2, businessId: 2 },
    ]
  })

  /// Seeding for productAllergens
  const productAllergens = await prisma.productAllergen.createMany({
    data: [
      { productId: 1, allergenCode: 'f7' },
      { productId: 2, allergenCode: 'f85' }
    ]
  })

  /// Seeding for purchases
  const purchases = await prisma.purchase.createMany({
    data: [
      { quantity: 5, productPrice: 2.50, purchaserId: 1, productId: 2 },
      { quantity: 1, productPrice: 1.00, purchaserId: 2, productId: 1 },
    ]
  })

  console.log({ allergens, users, businesses, products, reviews, productAllergens, purchases })
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
