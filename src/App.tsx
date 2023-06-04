import React from 'react'
import PrincipalRoutes from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast';

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
                <Toaster /> 
            </QueryClientProvider>
        </div>
        
    )
}

export default App
