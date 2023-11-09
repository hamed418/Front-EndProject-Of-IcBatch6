
import './App.css';
import AuthContextProvider from './contexts/Auth';
import Router from './routes/Router';
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const client = new QueryClient();
const App =()=>{

  return (
    <div className='App'>
   <QueryClientProvider client={client}>
   <ReactQueryDevtools initialIsOpen={false}/>

   <AuthContextProvider>
   <Router/>
   </AuthContextProvider>
   </QueryClientProvider>
    </div>
  )
}

export default App