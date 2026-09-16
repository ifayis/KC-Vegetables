import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#1F2937] dark:bg-[#0F1A12] dark:text-gray-100">
      <Navbar />

      <main id="home" className="flex min-h-[80vh] items-center justify-center">
        <h1 className="text-4xl font-bold">
          Vegetable Market
        </h1>
      </main>
    </div>
  )
}

export default App