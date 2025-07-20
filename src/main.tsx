import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomeScreen } from "@/pages/home-screen";
import { NotFound } from "@/pages/not-found";
import { RouteProvider } from "@/providers/router-provider";
import { ThemeProvider } from "@/providers/theme";
// import { NavMenuItemLink } from "./components/marketing/header-navigation/base-components/nav-menu-item";
// import { Header } from "./components/marketing/header-navigation/components/header";
// import { Calendar } from "./components/application/date-picker/calendar";
// import { Form } from "./components/base/form/form";
// import { DatePicker } from "./components/application/date-picker/date-picker";

import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <RouteProvider>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="*" element={<NotFound />} />
                        {/* <Route path="/test" element={<NavMenuItemLink href="/" title="Home" />} />
                        <Route path="/header" element={<Header />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/form" element={<Form />} />
                        <Route path="/date-picker" element={<DatePicker />} /> */}
                        {/* <Route path="/team-section-simple-01" element={<TeamSectionSimple01 />} /> */}
                    </Routes>
                </RouteProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
