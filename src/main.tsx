import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router"; // <-- changed BrowserRouter → HashRouter
// import { HomeScreen } from "@/pages/home-screen";
import { NotFound } from "@/pages/not-found";
import { RouteProvider } from "@/providers/router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import App from "./components/Components/App";

import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <HashRouter> {/* <-- use HashRouter here */}
                <RouteProvider>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </RouteProvider>
            </HashRouter>
        </ThemeProvider>
    </StrictMode>,
);
