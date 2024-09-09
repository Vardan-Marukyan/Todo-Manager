import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import reportWebVitals from './reportWebVitals';
import "./assets/fonts/style.css"
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {useTheme, ThemeProvider} from "./component/themes/Themeprovider";
import {lightTheme, darkTheme} from "./component/themes/ThemesColor";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <ThemeProvider>
              <App />
          </ThemeProvider>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
