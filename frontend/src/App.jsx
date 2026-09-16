import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import MarketPrices from './components/home/MarketPrices'
import VegetableCategories from './components/home/VegetableCategories'
import { MarketFilterProvider } from './context/MarketFilterContext'
import WhyChooseUs from './components/home/WhyChooseUs'
import TrustedCustomers from './components/home/TrustedCustomers'
import AboutContact from './components/home/AboutContact'
import Footer from './components/layout/Footer'

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

          <AboutContact />

        </main>

        <Footer />
        
      </div>
    </MarketFilterProvider>
  )
}

export default App