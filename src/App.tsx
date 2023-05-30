import React from 'react'
import PrincipalRoutes from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'

const App:React.FC = () => {

    const queryClient = new QueryClient({
        defaultOptions:{
            queries:{
                refetchOnWindowFocus: false
            }
        }
    })

    return (
        <div>
            <QueryClientProvider client={queryClient} >
                <PrincipalRoutes />  
            </QueryClientProvider>
        </div>
        
    )
}

export default App
