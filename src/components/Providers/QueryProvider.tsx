'use client'
import { getQueryClient } from '@/config'
import { QueryClientProvider } from '@tanstack/react-query'
import type * as React from 'react'

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  )
}
