import { motion } from 'framer-motion'
import {
  BadgeCheck,
  Leaf,
  MapPin,
  ShieldCheck,
  Sprout,
  Truck,
} from 'lucide-react'

const benefits = [
  {
    icon: Leaf,
    title: 'Fresh Every Day',
    description:
      'Vegetables selected and updated regularly to keep your market information fresh.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Prices',
    description:
      'Clear and transparent pricing so you can quickly understand today’s market rates.',
  },
  {
    icon: Sprout,
    title: 'Quality Focused',
    description:
      'We focus on quality produce and dependable market information for everyday needs.',
  },
  {
    icon: MapPin,
    title: 'Local Market',
    description:
      'Built around local vegetable markets and the needs of nearby customers.',
  },
  {
    icon: Truck,
    title: 'Daily Availability',
    description:
      'Stay informed about commonly available vegetables and their current prices.',
  },
  {
    icon: BadgeCheck,
    title: 'Simple & Transparent',
    description:
      'No complicated ordering process. Just straightforward vegetable information.',
  },
]

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#FFFDF5] py-24 dark:bg-[#0F1A12] sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#66BB6A]/10 blur-3xl dark:bg-[#66BB6A]/5" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#F59E0B]/10 blur-3xl dark:bg-[#F59E0B]/5" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2E7D32]/15 bg-[#2E7D32]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2E7D32] dark:border-[#66BB6A]/20 dark:bg-[#66BB6A]/10 dark:text-[#81C784]">
            <Leaf size={14} />
            Why KC Vegetables
          </span>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1F2937] dark:text-white sm:text-5xl">
            Freshness you can
            <span className="text-[#2E7D32] dark:text-[#81C784]">
              {' '}
              trust.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
            Everything is designed to make checking vegetable prices simple,
            clear, and dependable.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-[#E5E7EB] bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#2E7D32]/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:shadow-black/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] transition-colors duration-300 group-hover:bg-[#2E7D32] group-hover:text-white dark:bg-[#66BB6A]/10 dark:text-[#81C784] dark:group-hover:bg-[#66BB6A] dark:group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-[#1F2937] dark:text-white">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs