import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart, Star, ArrowLeft } from "lucide-react"


const products = [
  {
    id: 1,
    name: "Rainbow Gummy Bears",
    price: 12.99,
    image: "/gummy-bears-colorful-candy-collection.jpg",
    rating: 4.8,
    description: "Classic gummy bears in 12 fruity flavors",
  },
  {
    id: 2,
    name: "Chocolate Truffles Assortment",
    price: 24.99,
    image: "/chocolate-truffles-luxury-candy.jpg",
    rating: 5.0,
    description: "Handcrafted Belgian chocolate truffles",
  },
  {
    id: 3,
    name: "Sour Candy Mix",
    price: 14.99,
    image: "/colorful-sour-candy-mix.jpg",
    rating: 4.6,
    description: "Tangy and sweet sour candy variety pack",
  },
  {
    id: 4,
    name: "Lollipop Collection",
    price: 9.99,
    image: "/colorful-swirl-lollipops.jpg",
    rating: 4.7,
    description: "Handmade swirl lollipops in vibrant colors",
  },
  {
    id: 5,
    name: "Caramel Delights",
    price: 16.99,
    image: "/wrapped-caramel-candies.jpg",
    rating: 4.9,
    description: "Soft, buttery caramels wrapped to perfection",
  },
  {
    id: 6,
    name: "Fruit Jellies",
    price: 11.99,
    image: "/colorful-fruit-jelly-candies.jpg",
    rating: 4.5,
    description: "Real fruit juice jellies dusted with sugar",
  },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-6 shadow-xl">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold text-lg">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Shop Hero */}
      <section className="py-16 bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg text-balance">Shop Our Sweet Selection</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md font-medium text-pretty">
            Discover handcrafted candies made with love and premium ingredients
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-pink-400 bg-white"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                      <span className="text-sm font-bold text-yellow-900">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-3xl font-bold text-purple-600">${product.price}</span>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 rounded-full font-bold shadow-lg">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium">© 2025 Sweet Delights Candy Co. Made with ❤️ and sugar</p>
        </div>
      </footer>
    </div>
  )
}
