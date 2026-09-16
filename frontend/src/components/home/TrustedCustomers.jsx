import { motion } from 'framer-motion'
import { ArrowUpRight, Handshake } from 'lucide-react'

const customers = [
  {
    name: 'Fresh Basket',
    type: 'Local Retailer',
  },
  {
    name: 'Green Mart',
    type: 'Vegetable Store',
  },
  {
    name: 'Daily Needs',
    type: 'Neighbourhood Store',
  },
  {
    name: 'Harvest Foods',
    type: 'Local Business',
  },
]

function TrustedCustomers() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-[#0B140E] sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2E7D32]/15 bg-[#2E7D32]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2E7D32] dark:border-[#66BB6A]/20 dark:bg-[#66BB6A]/10 dark:text-[#81C784]">
            <Handshake size={14} />
            Trusted by local businesses
          </span>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1F2937] dark:text-white sm:text-5xl">
            Growing together with
            <span className="text-[#2E7D32] dark:text-[#81C784]">
              {' '}
              local businesses.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
            A simple, reliable vegetable market experience built for everyday
            customers and local businesses.
          </p>
        </motion.div>

        {/* Customer cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {customers.map((customer, index) => (
            <motion.div
              key={customer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-[#E5E7EB] bg-[#FFFDF5] p-6 transition-all duration-300 hover:border-[#2E7D32]/20 hover:shadow-lg hover:shadow-[#2E7D32]/10 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2E7D32]/10 text-lg font-bold text-[#2E7D32] dark:bg-[#66BB6A]/10 dark:text-[#81C784]">
                  {customer.name.charAt(0)}
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-gray-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#2E7D32]"
                />
              </div>

              <h3 className="mt-6 font-semibold text-[#1F2937] dark:text-white">
                {customer.name}
              </h3>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {customer.type}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-500">
            Built around transparency, accessibility, and dependable daily
            market information.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedCustomers