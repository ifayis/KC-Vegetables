import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import MarketPrices from './components/home/MarketPrices'

function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#1F2937] dark:bg-[#0F1A12] dark:text-gray-100">
      <Navbar />

      <main>
        <Hero />

        <MarketPrices />

        <section
          id="vegetables"
          className="min-h-screen"
        >
          <h2>Vegetables</h2>
        </section>

        <section
          id="about"
          className="min-h-screen"
        >
          <h2>About</h2>
        </section>

        <section
          id="contact"
          className="min-h-screen"
        >
          <h2>Contact</h2>
        </section>
      </main>
    </div>
  )
}

export default App