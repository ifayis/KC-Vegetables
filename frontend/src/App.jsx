import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import MarketPrices from './components/home/MarketPrices'
import VegetableCategories from './components/home/VegetableCategories'
import { MarketFilterProvider } from './context/MarketFilterContext'
import WhyChooseUs from './components/home/WhyChooseUs'
import TrustedCustomers from './components/home/TrustedCustomers'

function App() {
  return (
    <MarketFilterProvider>
      <div className="min-h-screen bg-[#FFFDF5] text-[#1F2937] dark:bg-[#0F1A12] dark:text-gray-100">
        <Navbar />

        <main>
          <Hero />

          <MarketPrices />

          <VegetableCategories />

          <WhyChooseUs />

          <TrustedCustomers />

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
    </MarketFilterProvider>
  )
}

export default App