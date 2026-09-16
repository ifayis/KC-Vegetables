import { ArrowUpRight, Leaf, Mail, MapPin, Phone } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Prices', href: '#prices' },
  { label: 'Vegetables', href: '#vegetables' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#FFFDF5] dark:border-white/10 dark:bg-[#0B140E]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-[#1F2937] dark:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2E7D32] text-white">
                <Leaf size={18} />
              </span>
              KC Vegetables
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-600 dark:text-gray-400">
              Simple, clear and accessible information about daily vegetable
              market prices.
            </p>

            <a
              href="#prices"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2E7D32] transition-colors hover:text-[#256628] dark:text-[#81C784]"
            >
              Check today's prices
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#1F2937] dark:text-white">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-gray-600 transition-colors hover:text-[#2E7D32] dark:text-gray-400 dark:hover:text-[#81C784]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#1F2937] dark:text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="https://maps.app.goo.gl/qroF7DJ2aDcG4qyV6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-gray-600 transition-colors hover:text-[#2E7D32] dark:text-gray-400 dark:hover:text-[#81C784]"
              >
                <MapPin className="mt-0.5 shrink-0" size={17} />
                <span>Kerala, India</span>
              </a>

              <a
                href="tel:+917592858630"
                className="flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-[#2E7D32] dark:text-gray-400 dark:hover:text-[#81C784]"
              >
                <Phone size={17} />
                <span>+91 7592858630</span>
              </a>

              <a
                href="mailto:hello@kcvegetables.com"
                className="flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-[#2E7D32] dark:text-gray-400 dark:hover:text-[#81C784]"
              >
                <Mail size={17} />
                <span>hello@kcvegetables.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-[#E5E7EB] pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} KC Vegetables. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 dark:text-gray-500">
            Fresh information. Simple experience.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer