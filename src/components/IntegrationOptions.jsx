import React from 'react';
import { Mail } from 'lucide-react';
import CodeSnippet from './CodeSnippet';

const IntegrationOptions = ({ onBack, dummyScript }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#001534]">Integration Options</h2>
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-gray-700 flex items-center gap-2 cursor-pointer"
        >
          ← Back
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#2872f9]/20 transition-all duration-300">
          <h3 className="font-semibold text-lg mb-4">Add to Your Website</h3>
          <p className="text-gray-600 mb-4">
            Copy and paste this code into the {'<head>'} section of your website:
          </p>
          <CodeSnippet code={dummyScript} />
        </div>

        <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#2872f9]/20 transition-all duration-300">
          <h3 className="font-semibold text-lg mb-4">Email Instructions</h3>
          <p className="text-gray-600 mb-4">
            We'll send detailed integration instructions to your developer.
          </p>
          <button className="w-full bg-[#2872f9] text-white py-3 rounded-lg hover:bg-[#2872f9]/90 flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300">
            <Mail className="w-5 h-5" />
            Send to Developer
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationOptions;