import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { All_Projects, All_Experience, ErrorPage } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>,
      <Route path='projects' element={<All_Projects />} errorElement={<ErrorPage />} />
      <Route path='experience' element={<All_Experience />} errorElement={<ErrorPage />} />
    </Route>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
