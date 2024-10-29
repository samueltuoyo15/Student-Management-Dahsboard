import './index.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import {Route, RouterProvider, createRoutesFromElements, createBrowserRouter} from 'react-router-dom'
import DatavisualizationPage from './Pages/DatavisualizationPage'
import ProductManagerPage from './Pages/ProductManagerPage'
function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
        <Route path="/" element={<DatavisualizationPage />} />
        <Route path="/ProductManagerPage" element={<ProductManagerPage />} />
        </>
        )
      )
    return <RouterProvider router={router} />
}

export default App
