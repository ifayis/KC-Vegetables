import { Moon, Sun } from 'lucide-react'
import { useTheme } from './context/ThemeContext'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <main className="min-h-screen bg-[#FFFDF5] p-10 text-[#1F2937] dark:bg-[#0F1A12] dark:text-gray-100">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-[#2E7D32] dark:text-[#66BB6A]">
              Vegetable Market
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              Fresh Vegetables.
              <br />
              Fair Prices. Every Day.
            </h1>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-[#E5E7EB] bg-white p-3 transition-transform hover:scale-105 dark:border-[#2A3A2D] dark:bg-[#17231A]"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>
        </div>

        <div className="mt-10 rounded-2xl border border-[#E5E7EB] bg-white p-6 dark:border-[#2A3A2D] dark:bg-[#17231A]">
          <p className="text-gray-600 dark:text-gray-300">
            Today's vegetable market prices, all in one place.
          </p>

          <div className="mt-6 flex gap-3">
            <button className="rounded-xl bg-[#2E7D32] px-5 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#256B2A]">
              View Today's Prices
            </button>

            <button className="rounded-xl border border-[#E5E7EB] px-5 py-3 font-semibold transition-all hover:-translate-y-0.5 dark:border-[#2A3A2D]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App