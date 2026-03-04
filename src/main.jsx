import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './stores/stores.jsx'
import './i18n/index.js'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
