import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Sparkles, Heart, Candy } from "lucide-react"


const collections = [
  {
    id: 1,
    name: "Gummy Paradise",
    description: "Soft, chewy gummies in every flavor imaginable. From classic bears to exotic fruit shapes.",
    image: "/gummy-bears-colorful-candy-collection.jpg",
    gradient: "from-pink-600 via-pink-500/60 to-transparent",
    items: "24+ varieties",
    icon: Candy,
  },
  {
    id: 2,
    name: "Chocolate Dreams",
    description: "Rich, decadent chocolates crafted with premium Belgian cocoa. Truffles, bars, and more.",
    image: "/chocolate-truffles-luxury-candy.jpg",
    gradient: "from-purple-700 via-purple-600/60 to-transparent",
    items: "18+ varieties",
    icon: Heart,
  },
  {
    id: 3,
    name: "Sour Sensations",
    description: "For those who love a tangy twist! Pucker up with our sour candy collection.",
    image: "/colorful-sour-candy-assortment.jpg",
    gradient: "from-green-600 via-green-500/60 to-transparent",
    items: "15+ varieties",
    icon: Sparkles,
  },
  {
    id: 4,
    name: "Classic Favorites",
    description: "Timeless treats that never go out of style. Lollipops, hard candies, and nostalgic sweets.",
    image: "/vintage-classic-candy-assortment.jpg",
    gradient: "from-orange-600 via-orange-500/60 to-transparent",
    items: "30+ varieties",
    icon: Heart,
  },
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white py-6 shadow-xl">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold text-lg">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Collections Hero */}
      <section className="py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg text-balance">Our Sweet Collections</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md font-medium text-pretty">
            Carefully curated candy collections for every taste and occasion
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-12">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div
                className={`relative group overflow-hidden rounded-3xl shadow-2xl ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${collection.gradient}`} />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl">
                  <collection.icon className="w-8 h-8 text-purple-600" />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Card className="p-8 bg-white border-2 hover:border-purple-400 transition-all shadow-xl">
                  <div className="space-y-4">
                    <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {collection.items}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">{collection.name}</h2>
                    <p className="text-xl text-gray-700 leading-relaxed text-pretty">{collection.description}</p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Link href="/shop">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 rounded-full font-bold shadow-xl text-lg px-8"
                        >
                          Shop This Collection
                        </Button>
                      </Link>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full font-bold text-lg px-8 bg-transparent"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-balance drop-shadow-lg">
              Can't Decide? Try Our Sampler Pack!
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-pretty drop-shadow-md font-medium">
              Get a taste of all our collections with our specially curated sampler box
            </p>
            <Link href="/shop">
              <Button
                size="lg"
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 text-lg px-8 py-6 rounded-full shadow-2xl font-bold border-2 border-yellow-500"
              >
                Order Sampler Pack
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium">© 2025 Sweet Delights Candy Co. Made with ❤️ and sugar</p>
        </div>
      </footer>
    </div>
  )
}
