import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./app/store.ts";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
