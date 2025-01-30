import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { All_Projects, All_Experience, ErrorPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/projects',
    element: <All_Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/experience',
    element: <All_Experience />,
    errorElement: <ErrorPage />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RouterProvider router={router} />
    </BrowserRouter>
  </StrictMode>,
)
