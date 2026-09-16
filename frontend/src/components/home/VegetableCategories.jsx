import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useMarketFilter } from '../../context/MarketFilterContext'

const categories = [
  {
    id: 'leafy',
    title: 'Leafy Vegetables',
    description: 'Fresh greens selected daily.',
    image: '/vegetables/spinach.jpg',
    size: 'large',
    filter: 'Leafy Vegetables',
  },
  {
    id: 'root',
    title: 'Root Vegetables',
    description: 'Naturally fresh and full of flavour.',
    image: '/vegetables/root-vegetables.jpg',
    size: 'large',
    filter: 'Root Vegetables',
  },
  {
    id: 'everyday',
    title: 'Everyday Fresh',
    description: 'The vegetables you reach for every day.',
    image: '/vegetables/everyday-vegetables.jpg',
    size: 'wide',
    filter: 'All',
  },
]

function VegetableCategories() {
  const { setSelectedCategory } = useMarketFilter()

  const handleCategoryClick = (filter) => {
    setSelectedCategory(filter)

    requestAnimationFrame(() => {
      document
        .getElementById('prices')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    })
  }

  return (
    <section
      id="vegetables"
      className="relative overflow-hidden bg-[#F5F8F2] py-24 dark:bg-[#111C14] sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E7D32] dark:text-[#81C784]">
            Fresh selection
          </p>

          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-[#1F2937] sm:text-5xl md:text-6xl dark:text-white">
            Explore our
            <span className="block text-[#2E7D32] dark:text-[#66BB6A]">
              vegetables
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400">
            From crisp leafy greens to everyday essentials,
            discover fresh produce selected with care.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {categories.slice(0, 2).map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
              onClick={() =>
                handleCategoryClick(category.filter)
              }
            />
          ))}

          <div className="md:col-span-2">
            <CategoryCard
              category={categories[2]}
              index={2}
              wide
              onClick={() =>
                handleCategoryClick(categories[2].filter)
              }
            />
          </div>

        </div>
      </div>
    </section>
  )
}

function CategoryCard({
  category,
  index,
  wide = false,
  onClick,
}) {
  return (
    <a
      href="#prices"
      onClick={onClick}
      className="block rounded-[1.75rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#66BB6A] focus-visible:ring-offset-4 dark:focus-visible:ring-offset-[#111C14]"
      aria-label={`View ${category.title}`}
    >
      <motion.article
        initial={{
          opacity: 0,
          y: 30,
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
          delay: index * 0.1,
          duration: 0.6,
        }}
        className={`group relative overflow-hidden rounded-[1.75rem] ${
          wide ? 'min-h-[320px]' : 'min-h-[380px]'
        }`}
      >
        {/* Image */}
        <img
          src={category.image}
          alt={category.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />

        {/* Content */}
        <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
          <div className="max-w-md">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-[#A5D6A7]">
              Fresh produce
            </p>

            <h3 className="font-serif text-3xl font-medium text-white sm:text-4xl">
              {category.title}
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">
              {category.description}
            </p>
          </div>

          {/* Arrow */}
          <div
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-white/60 group-hover:bg-white/20 sm:right-8 sm:top-8"
            aria-hidden="true"
          >
            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </motion.article>
    </a>
  )
}

export default VegetableCategories