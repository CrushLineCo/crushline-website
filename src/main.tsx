import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'

import { Amplify } from 'aws-amplify'
import { loadAmplifyOutputs } from './amplifyConfig'

const root = ReactDOM.createRoot(document.getElementById('root')!);

(async () => {
  const outputs = await loadAmplifyOutputs();
  Amplify.configure(outputs);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})();
