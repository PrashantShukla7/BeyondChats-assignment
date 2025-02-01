import React from "react";

import { CheckCircle } from 'lucide-react';

const Completion = () => {
    return (
        <div className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-[#64ee81] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#001534] mb-2">
                Setup Complete!
            </h2>
            <p className="text-gray-600 mb-8">
                Your organization has been set up and your chatbot is ready to
                use.
            </p>
            <button className="px-6 py-3 bg-[#64ee81] text-[#001534] font-semibold rounded-lg hover:bg-[#64ee81]/90 transition-colors">
                Go to Dashboard
            </button>
        </div>
    );
};

export default Completion;
