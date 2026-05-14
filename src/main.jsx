import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Cobastate } from './App.jsx' // import App dan Cobastate dari file App.jsx

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'; // import library React Router

// membuat router default
const router = createBrowserRouter([
  {
    path: "/", // URL default
    element: (
      <div className='flex justify-center items-center min-h-screen'>
        <button
          className='p-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-150'
          onClick={() => window.location.href = "/login"}
        >
          Hai, ayo login dahulu!
        </button>
      </div>
    ), // element yang akan ditampilkan saat membuka URL default
  },

  {
    path: "/login", // URL untuk halaman login
    element: <App />
  },
  {
    path: "/cobastate", // URL untuk halaman cobastate
    element: <Cobastate />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* menjalankan router */}
    <RouterProvider router={router} />
  </StrictMode>,
)