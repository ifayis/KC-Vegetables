import { createContext, useContext, useState } from 'react'

const MarketFilterContext = createContext(null)

export function MarketFilterProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  return (
    <MarketFilterContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </MarketFilterContext.Provider>
  )
}

export function useMarketFilter() {
  const context = useContext(MarketFilterContext)

  if (!context) {
    throw new Error(
      'useMarketFilter must be used inside MarketFilterProvider',
    )
  }

  return context
}