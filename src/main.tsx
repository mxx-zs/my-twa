// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import '@twa-dev/sdk';

// this manifest is used temporarily for development purposes
// const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';
const manifestUrl = 'https://mxx-zs.github.io/my-twa/tonconnect-manifest.json';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>,
)