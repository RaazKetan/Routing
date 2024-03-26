import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home';
import ProductPage from './pages/Products';
import './App.css'

const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/products', element: <ProductPage/>},
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
