import { useEffect, useState } from 'react'
import tomatoImage from '/vegetables/tomato.jpg'
import onionImage from '/vegetables/onion.webp'
import potatoImage from '/vegetables/potato.jpg'
import carrotImage from '/vegetables/carrot.jpg'
import cabbageImage from '/vegetables/cabbage.jpg'
import broccoliImage from '/vegetables/broccoli.webp'

import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  Leaf,
  MapPin,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'

import heroImage from '../../assets/hero-vegetables.png'
import { useLanguage } from '../../context/LanguageContext'
import { vegetableTranslations } from '../../data/vegetableTranslations'

const featuredVegetables = [
  {
    id: 'tomato',
    name: 'Tomato',
    price: 36,
    unit: 'kg',
    image: tomatoImage,
    change: '+2.4%',
    trend: 'up',
  },
  {
    id: 'onion',
    name: 'Onion',
    price: 32,
    unit: 'kg',
    image: onionImage,
    change: '-1.8%',
    trend: 'down',
  },
  {
    id: 'potato',
    name: 'Potato',
    price: 42,
    unit: 'kg',
    image: potatoImage,
    change: '+1.2%',
    trend: 'up',
  },
  {
    id: 'carrot',
    name: 'Carrot',
    price: 58,
    unit: 'kg',
    image: carrotImage,
    change: '-2.1%',
    trend: 'down',
  },
  {
    id: 'cabbage',
    name: 'Cabbage',
    price: 38,
    unit: 'kg',
    image: cabbageImage,
    change: '+0.8%',
    trend: 'up',
  },
  {
    id: 'broccoli',
    name: 'Broccoli',
    price: 85,
    unit: 'kg',
    image: broccoliImage,
    change: '+3.1%',
    trend: 'up',
  },
]

function Hero() {
  const [activeVegetable, setActiveVegetable] = useState(0)
  const { language } = useLanguage()

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveVegetable((current) => {
        return (current + 1) % featuredVegetables.length
      })
    }, 5000)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  const vegetable = featuredVegetables[activeVegetable]

  const displayName =
    vegetableTranslations[vegetable.id]?.[language] ??
    vegetable.name

  const trustItems = [
    {
      icon: TrendingUp,
      label: 'Daily',
      description: 'price updates',
    },
    {
      icon: MapPin,
      label: 'Local',
      description: 'market',
    },
    {
      icon: ShieldCheck,
      label: 'Quality',
      description: 'assured',
    },
  ]

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#102015] text-white"
    >
      {/* =========================================================
          CINEMATIC BACKGROUND
      ========================================================== */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fresh vegetables from a local farm"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* =========================================================
          BACKGROUND GLOW
      ========================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#66BB6A]/10 blur-3xl"
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#66BB6A]/50 bg-[#102015]/30 px-4 py-2 backdrop-blur-md"
            >
              <Leaf
                size={16}
                className="text-[#81C784]"
              />

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/90 sm:text-sm">
                Local • Fresh • Trusted
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.8,
                ease: 'easeOut',
              }}
              className="font-serif text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.25rem]"
            >
              Fresh Vegetables.

              <span className="block text-[#81C784]">
                Fair Prices.
              </span>

              <span className="block">
                Every Day.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.7,
                ease: 'easeOut',
              }}
              className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg"
            >
              From local farms to your table — discover the latest
              vegetable market prices and quality fresh produce at a
              fair value.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.7,
                ease: 'easeOut',
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#prices"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#2E7D32] px-6 py-3.5 font-semibold text-white shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#388E3C] hover:shadow-2xl"
              >
                View Today's Prices

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#vegetables"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/70 hover:bg-white/10"
              >
                Explore Vegetables
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
              }}
              className="mt-12 flex flex-wrap gap-x-7 gap-y-4"
            >
              {trustItems.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#66BB6A]/40 bg-[#2E7D32]/60 backdrop-blur-sm">
                      <Icon
                        size={18}
                        className="text-[#A5D6A7]"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.label}
                      </p>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT SIDE PRICE CARD
          ====================================================== */}
          <div className="relative hidden min-h-[500px] lg:block">

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.45,
                duration: 0.8,
                ease: 'easeOut',
              }}
              className="absolute right-4 top-[24%]"
            >
              {/* PRICE CARD */}
              <div className="w-56 rounded-2xl border border-white/50 bg-white/90 p-3.5 text-[#1F2937] shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={vegetable.id}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeOut',
                    }}
                  >
                    {/* Vegetable information */}
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-[#EAF4EA]">
                        <motion.img
                          src={vegetable.image}
                          alt={displayName}
                          initial={{ scale: 1.08 }}
                          animate={{ scale: 1 }}
                          transition={{
                            duration: 0.45,
                            ease: 'easeOut',
                          }}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[10px] font-medium uppercase tracking-wide text-gray-500">
                          Today's Price
                        </p>

                        <p className="mt-0.5 truncate text-sm font-bold text-[#1F2937]">
                          {displayName}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#2E7D32]">
                        ₹{vegetable.price}
                      </span>

                      <span className="text-xs text-gray-500">
                        / {vegetable.unit}
                      </span>
                    </div>

                    {/* Change */}
                    <div className="mt-3 flex items-center justify-between border-t border-gray-200 pt-3">
                      <div
                        className={`flex items-center gap-1.5 text-xs font-semibold ${
                          vegetable.trend === 'up'
                            ? 'text-[#2E7D32]'
                            : 'text-[#D97706]'
                        }`}
                      >
                        <TrendingUp
                          size={13}
                          className={
                            vegetable.trend === 'down'
                              ? 'rotate-180'
                              : ''
                          }
                        />

                        <span>
                          {vegetable.change}
                        </span>
                      </div>

                      <span className="text-[9px] text-gray-400">
                        Updated today
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Rotation indicators */}
                <div className="mt-3 flex items-center gap-1">
                  {featuredVegetables.map((item, index) => (
                    <span
                      key={item.id}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        index === activeVegetable
                          ? 'w-5 bg-[#2E7D32]'
                          : 'w-1.5 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Decorative curve */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
              className="absolute right-56 top-[36%]"
              aria-hidden="true"
            >
              <div className="h-16 w-16 rounded-full border border-white/30 border-b-transparent border-l-transparent" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}
      <motion.a
        href="#prices"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 0.6,
        }}
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition-colors hover:text-white"
      >
        <span className="text-xs tracking-wider">
          Scroll to explore
        </span>

        <motion.span
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40"
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  )
}

export default Hero