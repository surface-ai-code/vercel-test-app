import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Heart, Star, Candy } from "lucide-react"

export default function CandyLandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-orange-400 to-blue-500 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.25),transparent_60%)]" />

        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white space-y-6 z-10">
              <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span>New Flavors Just Dropped!</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance drop-shadow-lg">
                Sweeten Your Day with Pure Joy
              </h1>

              <p className="text-xl md:text-2xl text-white leading-relaxed text-pretty drop-shadow-md font-medium">
                Handcrafted candies made with love, bursting with flavor, and designed to bring smiles to faces of all
                ages.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 text-lg px-8 py-6 rounded-full shadow-2xl font-bold border-2 border-yellow-500"
                >
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  className="bg-purple-600 text-white hover:bg-purple-500 text-lg px-8 py-6 rounded-full shadow-2xl font-bold border-2 border-purple-700"
                >
                  View Collections
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative z-10">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/colorful-assorted-candies-in-glass-jars.jpg"
                  alt="Colorful assorted candies"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/40 to-transparent" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-yellow-400 rounded-full p-4 shadow-xl animate-bounce">
                <Heart className="w-8 h-8 text-pink-600" fill="currentColor" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-purple-500 rounded-full p-4 shadow-xl animate-pulse">
                <Star className="w-8 h-8 text-yellow-300" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">Why Choose Our Candy?</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto text-pretty">
              Every piece is crafted with premium ingredients and a whole lot of love
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center space-y-4 hover:shadow-2xl transition-all border-2 hover:border-pink-400 hover:scale-105 duration-300 bg-white">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">100% Natural</h3>
              <p className="text-gray-700 leading-relaxed">
                Made with real fruit extracts and natural colors. No artificial flavors or preservatives.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-2xl transition-all border-2 hover:border-purple-400 hover:scale-105 duration-300 bg-white">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Handcrafted</h3>
              <p className="text-gray-700 leading-relaxed">
                Each batch is carefully made by our expert candy makers with attention to every detail.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-2xl transition-all border-2 hover:border-blue-400 hover:scale-105 duration-300 bg-white">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Candy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Unique Flavors</h3>
              <p className="text-gray-700 leading-relaxed">
                From classic favorites to innovative combinations that will surprise your taste buds.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Collections Showcase */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">Our Sweet Collections</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto text-pretty">
              Discover our carefully curated candy collections for every occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/gummy-bears-colorful-candy-collection.jpg"
                alt="Gummy Collection"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600 via-pink-500/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">Gummy Paradise</h3>
                <p className="text-lg mb-4 drop-shadow-md font-medium">Soft, chewy, and bursting with fruity flavors</p>
                <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 rounded-full font-bold shadow-xl border-2 border-yellow-500">
                  Explore Collection
                </Button>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/chocolate-truffles-luxury-candy.jpg"
                alt="Chocolate Collection"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-purple-600/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">Chocolate Dreams</h3>
                <p className="text-lg mb-4 drop-shadow-md font-medium">
                  Rich, decadent chocolates for true connoisseurs
                </p>
                <Button className="bg-orange-400 text-gray-900 hover:bg-orange-300 rounded-full font-bold shadow-xl border-2 border-orange-500">
                  Explore Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-balance drop-shadow-lg">
              Ready to Satisfy Your Sweet Tooth?
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-pretty drop-shadow-md font-medium">
              Join thousands of happy customers who trust us for their candy cravings. Free shipping on orders over $50!
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 text-lg px-8 py-6 rounded-full shadow-2xl font-bold border-2 border-yellow-500"
              >
                Start Shopping
              </Button>
              <Button
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-400 text-lg px-8 py-6 rounded-full shadow-2xl font-bold border-2 border-orange-600"
              >
                Gift Cards
              </Button>
            </div>
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
