// ContextAPI.js
import React, { createContext, useState, useContext } from 'react'

interface CompletedContextType {
  datas: string[]
  addItem: (newItem: string) => void
  removeItem: (indexToRemove: number) => void
  completedCount: number
  incrementCompletedCount: (index: number) => void
  decrementCompletedCount: () => void
  completedItems: number[]
}

const CompletedContext = createContext<CompletedContextType | undefined>(undefined)

export const CompletedProvider: React.FC<{ children: React.ReactNode; initialDatas: string[] }> = ({
  children,
  initialDatas,
}) => {
  const [datas, setDatas] = useState<string[]>(initialDatas)
  const [completedCount, setCompletedCount] = useState(0)
  const [completedItems, setCompletedItems] = useState<number[]>([])

  const addItem = (newItem: string) => {
    setDatas(prevDatas => [...prevDatas, newItem])
  }

  const removeItem = (indexToRemove: number) => {
    setDatas(prevDatas => prevDatas.filter((_, index) => index !== indexToRemove))
    setCompletedCount(prevCount => Math.max(0, prevCount - 1))
    setCompletedItems(prevItems => prevItems.filter(itemIndex => itemIndex !== indexToRemove))
  }

  const incrementCompletedCount = (index: number) => {
    if (!completedItems.includes(index)) {
      setCompletedCount(prevCount => prevCount + 1)
      setCompletedItems(prevItems => [...prevItems, index])
    }
  }

  const decrementCompletedCount = () => {
    setCompletedCount(prevCount => Math.max(0, prevCount - 1))
  }

  return (
    <CompletedContext.Provider

      value={{
        datas,
        addItem,
        removeItem,
        completedCount,
        incrementCompletedCount,
        decrementCompletedCount,
        completedItems,
      }}
    >
      {children}
    </CompletedContext.Provider>
  )
}
export const useCompleted = () => {
  const context = useContext(CompletedContext)
  if (!context) {
    throw new Error('useCompleted deve ser usado dentro de um CompletedProvider')
  }
  return context
}