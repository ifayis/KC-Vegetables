import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import MarketPrices from './components/home/MarketPrices'
import VegetableCategories from './components/home/VegetableCategories'
import WhyChooseUs from './components/home/WhyChooseUs'
import TrustedCustomers from './components/home/TrustedCustomers'
import AboutContact from './components/home/AboutContact'
import Footer from './components/layout/Footer'

import { LanguageProvider } from './context/LanguageContext'
import { MarketFilterProvider } from './context/MarketFilterContext'

function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  )
}

export default App