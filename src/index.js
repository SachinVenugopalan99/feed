import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './global/GlobalStyle';
import { ThemeProvider } from './hooks/useThemeContext';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor, store} from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider>
    <BrowserRouter>
      <App />
      <GlobalStyle/>
    </BrowserRouter>  
    </ThemeProvider>
    </PersistGate>
    </Provider>
    </React.StrictMode>
);

