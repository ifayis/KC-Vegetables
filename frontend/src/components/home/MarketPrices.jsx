import { useEffect, useMemo, useState } from 'react'
import { useMarketFilter } from '../../context/MarketFilterContext'
import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Search,
  SlidersHorizontal,
} from 'lucide-react'

import { vegetables } from '../../data/vegetables'
import { useLanguage } from '../../context/LanguageContext'
import { vegetableTranslations } from '../../data/vegetableTranslations'

const categories = [
  'All',
  'Vegetables',
  'Root Vegetables',
  'Leafy Vegetables',
]

function MarketPrices() {
  const [searchTerm, setSearchTerm] = useState('')

  const {
    selectedCategory,
    setSelectedCategory,
  } = useMarketFilter()

  const { language } = useLanguage()

  const filteredVegetables = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return vegetables.filter((vegetable) => {
      const displayName =
        vegetableTranslations[vegetable.id]?.[language] ??
        vegetable.name

      const matchesSearch =
        normalizedSearch === '' ||
        vegetable.name.toLowerCase().includes(normalizedSearch) ||
        displayName.toLowerCase().includes(normalizedSearch)

      const matchesCategory =
        selectedCategory === 'All' ||
        vegetable.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory, language])

  return (
    <section
      id="prices"
      className="relative overflow-hidden bg-[#FFFDF5] py-24 dark:bg-[#0F1A12] sm:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#66BB6A]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">

            {/* Section label */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#66BB6A] shadow-[0_0_0_5px_rgba(102,187,106,0.12)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2E7D32] dark:text-[#81C784]">
                Market Update
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl font-medium tracking-tight text-[#1F2937] sm:text-5xl md:text-6xl dark:text-white">
              Today's Market

              <span className="block text-[#2E7D32] dark:text-[#66BB6A]">
                Prices
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400">
              Check the latest vegetable prices before you
              head to the market. Simple, clear and updated
              regularly.
            </p>
          </div>

          {/* Update status */}
          <div className="flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-sm dark:border-[#2A3A2D] dark:bg-[#17231A]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#66BB6A]/10">
              <span className="h-2.5 w-2.5 rounded-full bg-[#2E7D32] dark:bg-[#66BB6A]" />
            </div>

            <div>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Price status
              </p>

              <p className="text-sm font-semibold text-[#1F2937] dark:text-white">
                Updated today
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SEARCH & FILTER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
        >
          {/* Search */}
          <div className="relative w-full lg:max-w-sm">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search vegetables..."
              aria-label="Search vegetables"
              className="h-12 w-full rounded-xl border border-[#E5E7EB] bg-white pl-11 pr-4 text-sm text-[#1F2937] outline-none transition-all placeholder:text-gray-400 focus:border-[#66BB6A] focus:ring-4 focus:ring-[#66BB6A]/10 dark:border-[#2A3A2D] dark:bg-[#17231A] dark:text-white dark:placeholder:text-gray-500"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <SlidersHorizontal
              size={17}
              className="mr-1 shrink-0 text-gray-400"
            />

            {categories.map((category) => {
              const active = selectedCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-[#2E7D32] text-white shadow-md shadow-[#2E7D32]/15'
                      : 'border border-[#E5E7EB] bg-white text-gray-600 hover:border-[#66BB6A] hover:text-[#2E7D32] dark:border-[#2A3A2D] dark:bg-[#17231A] dark:text-gray-300 dark:hover:border-[#66BB6A] dark:hover:text-[#66BB6A]'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* =====================================================
            PRICE CARDS
        ====================================================== */}
        {filteredVegetables.length > 0 ? (
          <motion.div
            layout
            className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {filteredVegetables.map((vegetable, index) => {
              const priceDifference =
                vegetable.price - vegetable.previousPrice

              const percentageChange =
                vegetable.previousPrice > 0
                  ? (Math.abs(priceDifference) /
                      vegetable.previousPrice) *
                    100
                  : 0

              const priceIncreased = priceDifference > 0

              const displayName =
                vegetableTranslations[vegetable.id]?.[language] ??
                vegetable.name

              return (
                <motion.article
                  key={vegetable.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#2E7D32]/10 dark:border-[#2A3A2D] dark:bg-[#17231A]"
                >
                  {/* Image */}
                  <div className="relative aspect-[5/3] overflow-hidden bg-[#F1F7F1] dark:bg-[#1D2B20]">
                    <motion.img
                      src={vegetable.image}
                      alt={displayName}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Category */}
                    <div className="absolute left-3 top-3 rounded-full border border-white/40 bg-black/25 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
                      {vegetable.category}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold text-[#1F2937] dark:text-white">
                          {displayName}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                          Market price
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-xl font-bold tracking-tight text-[#2E7D32] dark:text-[#66BB6A]">
                          ₹{vegetable.price}
                        </p>

                        <p className="text-xs text-gray-400">
                          / {vegetable.unit}
                        </p>
                      </div>
                    </div>

                    {/* Price movement */}
                    <div className="mt-5 flex items-center justify-between border-t border-[#E5E7EB] pt-4 dark:border-[#2A3A2D]">
                      <div
                        className={`flex items-center gap-1.5 text-xs font-semibold ${
                          priceIncreased
                            ? 'text-[#2E7D32] dark:text-[#66BB6A]'
                            : 'text-[#D97706]'
                        }`}
                      >
                        {priceIncreased ? (
                          <ArrowUpRight size={15} />
                        ) : (
                          <ArrowDownRight size={15} />
                        )}

                        <span>
                          {priceIncreased ? '+' : '-'}
                          {percentageChange.toFixed(1)}%
                        </span>
                      </div>

                      <span className="text-xs text-gray-400">
                        Today
                      </span>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        ) : (
          /* ===================================================
             EMPTY STATE
          ==================================================== */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 rounded-2xl border border-dashed border-[#E5E7EB] bg-white px-6 py-16 text-center dark:border-[#2A3A2D] dark:bg-[#17231A]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#66BB6A]/10">
              <Search
                size={22}
                className="text-[#2E7D32] dark:text-[#66BB6A]"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-[#1F2937] dark:text-white">
              No vegetables found
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Try searching for a different vegetable.
            </p>
          </motion.div>
        )}

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex items-center justify-between gap-4 border-t border-[#E5E7EB] pt-5 dark:border-[#2A3A2D]"
        >
          <p className="text-xs leading-5 text-gray-400">
            Prices shown are indicative market prices and may
            vary by location and market conditions.
          </p>

          <span className="hidden shrink-0 text-xs font-medium text-[#2E7D32] sm:block dark:text-[#66BB6A]">
            ₹ Indian Rupee
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default MarketPrices