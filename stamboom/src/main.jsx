import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Loading from './components/i18n/Loading'
import App from './App'
import { AuthProvider } from './context/AuthProvider';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading/>}>
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  </Suspense>
)
