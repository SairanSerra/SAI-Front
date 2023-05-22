import React from 'react'
import PrincipalRoutes from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'

const App:React.FC = () => {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient} >
            <PrincipalRoutes />  
        </QueryClientProvider>
        
    )
}

export default App
