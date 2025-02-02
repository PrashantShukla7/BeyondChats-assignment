import React, { useState } from "react";
import LoadingScreen from "./LoadingScreen.jsx";
import SuccessScreen from "./SuccessScreen.jsx";
import IntegrationOptions from "./IntegrationOptions.jsx";
import IntegrationDashboard from "./IntegrationDashboard.jsx";
import PreviewFrame from "./PreviewFrame";
import IntegrationNotFound from "./IntegrationNotFound.jsx";

const ChatbotIntegration = () => {
    const [showPreview, setShowPreview] = useState(false);
    const [showIntegrationOptions, setShowIntegrationOptions] = useState(false);
    const [integrationStatus, setIntegrationStatus] = useState("pending");
    const [testing, setTesting] = useState(false);

    const DUMMY_SCRIPT = `<script>
  window.CHATBOT_ID = 'your-unique-id';
  sample codeSnippet
</script>`;

    const handleTestIntegration = () => {
        setTesting(true);
        setTimeout(() => {
          const isSuccessful = Math.random() < 0.7;
            setTesting(false);
            setIntegrationStatus(isSuccessful ? "success" : "failure");
        }, 2000);
    };

    const renderContent = () => {
        if (showPreview) {
            return <PreviewFrame onClose={() => setShowPreview(false)} />;
        }

        if (testing) {
            return <LoadingScreen />;
        }

        if (integrationStatus === "success") {
            return (
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <SuccessScreen />
                </div>
            );
        }
        if (integrationStatus === "failure") {
            return (
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <IntegrationNotFound />
                </div>
            );
        }

        if (showIntegrationOptions) {
            return (
                <IntegrationOptions
                    onBack={() => setShowIntegrationOptions(false)}
                    dummyScript={DUMMY_SCRIPT}
                />
            );
        }

        return (
            <IntegrationDashboard
                onPreviewClick={() => setShowPreview(true)}
                onIntegrateClick={() => setShowIntegrationOptions(true)}
                onTestClick={handleTestIntegration}
            />
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-4 mt-16">
                {renderContent()}
            </div>
        </div>
    );
};

export default ChatbotIntegration;
