import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Menu,
  Moon,
  Sun,
  X,
  ChevronDown,
} from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Prices', href: '#prices' },
  { label: 'Vegetables', href: '#vegetables' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-[#E5E7EB]/80 bg-[#FFFDF5]/90 backdrop-blur-xl dark:border-[#2A3A2D] dark:bg-[#0F1A12]/90"
    >
      <nav
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="group flex items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2E7D32] text-xl shadow-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
            🌿
          </span>

          <span className="hidden text-lg font-bold tracking-tight text-[#1F2937] sm:block dark:text-white">
            KC <span className="text-[#2E7D32] dark:text-[#66BB6A]">Vegetables</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium text-[#4B5563] transition-colors duration-200 hover:text-[#2E7D32] dark:text-gray-300 dark:hover:text-[#66BB6A]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 sm:flex">
          {/* Language */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageOpen((current) => !current)}
              className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-[#4B5563] transition-colors hover:bg-[#F0F7F0] hover:text-[#2E7D32] dark:text-gray-300 dark:hover:bg-[#17231A] dark:hover:text-[#66BB6A]"
              aria-expanded={languageOpen}
              aria-haspopup="menu"
            >
              <span>EN</span>
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  languageOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {languageOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -5, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-36 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white p-1 shadow-lg dark:border-[#2A3A2D] dark:bg-[#17231A]"
                  role="menu"
                >
                  {['English', 'മലയാളം', 'हिन्दी'].map((language) => (
                    <button
                      key={language}
                      type="button"
                      className="w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-[#F0F7F0] dark:hover:bg-[#213322]"
                      role="menuitem"
                    >
                      {language}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-[#4B5563] transition-all duration-200 hover:bg-[#F0F7F0] hover:text-[#2E7D32] hover:scale-105 dark:text-gray-300 dark:hover:bg-[#17231A] dark:hover:text-[#66BB6A]"
            aria-label={`Switch to ${
              theme === 'light' ? 'dark' : 'light'
            } mode`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -45, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 45, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'light' ? (
                  <Moon size={19} />
                ) : (
                  <Sun size={19} />
                )}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* CTA */}
          <a
            href="#prices"
            className="ml-2 rounded-xl bg-[#2E7D32] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#256B2A] hover:shadow-md"
          >
            Today's Prices
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-1 sm:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-[#4B5563] transition-colors hover:bg-[#F0F7F0] dark:text-gray-300 dark:hover:bg-[#17231A]"
            aria-label={`Switch to ${
              theme === 'light' ? 'dark' : 'light'
            } mode`}
          >
            {theme === 'light' ? (
              <Moon size={19} />
            ) : (
              <Sun size={19} />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-[#1F2937] transition-colors hover:bg-[#F0F7F0] dark:text-white dark:hover:bg-[#17231A]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-[#E5E7EB] dark:border-[#2A3A2D] sm:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-[#4B5563] transition-colors hover:bg-[#F0F7F0] hover:text-[#2E7D32] dark:text-gray-300 dark:hover:bg-[#17231A] dark:hover:text-[#66BB6A]"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#prices"
                  onClick={closeMobileMenu}
                  className="mt-2 rounded-xl bg-[#2E7D32] px-4 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-[#256B2A]"
                >
                  Today's Prices
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar