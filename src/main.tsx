import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'

import outputs from '../amplify_outputs.json' // adjust path if amplify_outputs.json is at repo root
import { Amplify } from 'aws-amplify'

Amplify.configure(outputs)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
