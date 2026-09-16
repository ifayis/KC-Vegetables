import { motion } from 'framer-motion'
import {
    ArrowRight,
    Clock3,
    Mail,
    MapPin,
    Phone,
    Sprout,
} from 'lucide-react'

function AboutContact() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#FFFDF5] py-24 dark:bg-[#0F1A12] sm:py-28"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* About */}
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-[2rem]"
                    >
                        <img
                            src="/vegetables/everyday-vegetables.jpg"
                            alt="Fresh vegetables"
                            loading="lazy"
                            className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[500px]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                                <Sprout size={14} />
                                Fresh market information
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E7D32] dark:text-[#81C784]">
                            About KC Vegetables
                        </span>

                        <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1F2937] dark:text-white sm:text-5xl">
                            A simpler way to stay connected with the
                            <span className="text-[#2E7D32] dark:text-[#81C784]">
                                {' '}
                                daily market.
                            </span>
                        </h2>

                        <p className="mt-6 text-base leading-8 text-gray-600 dark:text-gray-400">
                            KC Vegetables is built around a simple idea — make everyday
                            vegetable market information easier to access and understand.
                        </p>

                        <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-400">
                            Browse today's prices, explore different vegetable categories,
                            and get the information you need without unnecessary steps.
                        </p>

                        <a
                            href="#prices"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2E7D32] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#256628] hover:shadow-lg hover:shadow-[#2E7D32]/20"
                        >
                            View Market Prices
                            <ArrowRight size={17} />
                        </a>
                    </motion.div>
                </div>

                {/* Contact */}
                <motion.div
                    id="contact"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7 }}
                    className="mt-24 overflow-hidden rounded-[2rem] bg-[#1F3D25] text-white dark:bg-[#18321E]"
                >
                    <div className="grid lg:grid-cols-[1fr_1.15fr]">
                        {/* Left */}
                        <div className="relative p-8 sm:p-12 lg:p-14">
                            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#66BB6A]/20 blur-3xl" />

                            <div className="relative">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A5D6A7]">
                                    Visit / Contact
                                </span>

                                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                                    Come by. Say hello.
                                </h2>

                                <p className="mt-5 max-w-md text-sm leading-7 text-white/70 sm:text-base">
                                    Have a question about today's prices or want to know more
                                    about our market? Get in touch with us.
                                </p>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                            <div className="bg-[#1F3D25] p-8 dark:bg-[#18321E] sm:p-10">
                                <MapPin className="text-[#A5D6A7]" size={22} />

                                <h3 className="mt-5 font-semibold">Our Location</h3>

                                <p className="mt-2 text-sm leading-6 text-white/60">
                                    KC Vegetables
                                    <br />
                                    Kerala, India
                                </p>

                                <a
                                    href="https://maps.app.goo.gl/qroF7DJ2aDcG4qyV6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#A5D6A7] transition-colors hover:text-white"
                                >
                                    View on Google Maps
                                    <ArrowRight size={15} />
                                </a>
                            </div>
                            <div className="bg-[#1F3D25] p-8 dark:bg-[#18321E] sm:p-10">
                                <Clock3 className="text-[#A5D6A7]" size={22} />

                                <h3 className="mt-5 font-semibold">Opening Hours</h3>

                                <p className="mt-2 text-sm leading-6 text-white/60">
                                    Monday – Saturday
                                    <br />
                                    7:00 AM – 10:00 PM
                                </p>
                            </div>

                            <div className="bg-[#1F3D25] p-8 dark:bg-[#18321E] sm:p-10">
                                <Phone className="text-[#A5D6A7]" size={22} />

                                <h3 className="mt-5 font-semibold">Call Us</h3>

                                <p className="mt-2 text-sm leading-6 text-white/60">
                                    +91 7592858630
                                </p>
                            </div>

                            <div className="bg-[#1F3D25] p-8 dark:bg-[#18321E] sm:p-10">
                                <Mail className="text-[#A5D6A7]" size={22} />

                                <h3 className="mt-5 font-semibold">Email</h3>

                                <p className="mt-2 break-all text-sm leading-6 text-white/60">
                                    hello@kcvegetables.com
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutContact