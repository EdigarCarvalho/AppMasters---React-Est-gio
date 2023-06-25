import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {GlobalStyle} from './style.ts'
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>

  </React.StrictMode>
)
