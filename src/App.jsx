import { createBrowserRouter,Route,RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home';
import ProductPage from './pages/Products';
import './App.css'


const routeDefinations = createBrowserRouter(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductPage />} />
  </Route>
);
// const router = createBrowserRouter([
//   {path: '/', element: <HomePage />},
//   {path: '/products', element: <ProductPage/>},
// ])
const router = createBrowserRouter(routeDefinations)
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
