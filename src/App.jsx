import React from "react";
import RegistrationForm from "./components/RegistrationForm.jsx";
import { Route, Routes } from "react-router-dom";
import OrganizationSetup from "./components/OrganizationSetup.jsx";
import ChatbotIntegration from "./components/ChatbotIntegration.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<RegistrationForm />} />
                <Route path="/organization" element={<OrganizationSetup />} />
                <Route path="/integrate" element={<ChatbotIntegration />} />
            </Routes>
        </>
    );
};

export default App;
