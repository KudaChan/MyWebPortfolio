import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import './index.css';
import App from './App';
import { ErrorPage } from './pages';

// Lazy load route components
const All_Projects = lazy(() => import('./pages/all-projects'));
const All_Experience = lazy(() => import('./pages/all-experience'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/projects',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <All_Projects />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/experience',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <All_Experience />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  }
], {
  basename: '/'
});

// Optimize Sentry configuration
Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: true,
    }),
  ],
  tracesSampleRate: import.meta.env.PROD ? 0.2 : 1.0,
  replaysSessionSampleRate: import.meta.env.PROD ? 0.1 : 1.0,
  replaysOnErrorSampleRate: 1.0,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
