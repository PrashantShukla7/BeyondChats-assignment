import React from "react";
import { MessageSquare, Code2, Settings } from "lucide-react";

const IntegrationDashboard = ({
    onPreviewClick,
    onIntegrateClick,
    onTestClick,
}) => {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Chatbot Integration</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button
                    onClick={onPreviewClick}
                    className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 text-left group border border-blue-200"
                >
                    <MessageSquare className="w-8 h-8 text-blue-500 mb-4 transform group-hover:scale-110 transition-all duration-300" />
                    <h3 className="font-semibold text-lg mb-2">Test Chatbot</h3>
                    <p className="text-gray-600 text-sm">
                        Test how your chatbot appears to users
                    </p>
                </button>

                <button onClick={onIntegrateClick} className="p-6 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 text-left group border border-purple-200">
                    <Code2 className="w-8 h-8 text-purple-500 mb-4 transform group-hover:scale-110 transition-all duration-300" />
                    <h3 className="font-semibold text-lg mb-2">Integrate on you Website</h3>
                    <p className="text-gray-600 text-sm">
                        Get implementation code and guides
                    </p>
                </button>

                <button onClick={onTestClick} className="p-6 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all duration-300 text-left group border border-orange-200">
                    <Settings className="w-8 h-8 text-orange-500 mb-4 transform group-hover:scale-110 transition-all duration-300" />
                    <h3 className="font-semibold text-lg mb-2">Test Integration</h3>
                    <p className="text-gray-600 text-sm">
                        Test the Chatbot here
                    </p>
                </button>
            </div>
        </div>
    );
};

export default IntegrationDashboard;
