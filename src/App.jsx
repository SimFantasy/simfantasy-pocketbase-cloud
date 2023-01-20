import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RootRoutes from '@/router'
import RootStyles from '@/styles/root.style'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RootStyles />
        <RootRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
