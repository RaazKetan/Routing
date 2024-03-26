import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home';
import ProductPage from './pages/Products';
import RootLayout from './pages/Root';
import './App.css'



const router = createBrowserRouter([
  {path: '/', 
  element:<RootLayout/>,
  children:[
    {path: '/products', element: <ProductPage/>},
    {path: '/', element: <HomePage/>}
  ] 
  }
])
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
