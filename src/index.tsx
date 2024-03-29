import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./shared/config/i18n/i18n";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import App from "./app/App";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)