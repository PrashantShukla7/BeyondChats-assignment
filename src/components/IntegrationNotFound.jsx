import React, { useState } from 'react';
import { AlertTriangle, Terminal, Copy, ExternalLink, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

const IntegrationNotFound = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [copied, setCopied] = useState(false);

  const troubleshootingSteps = [
    {
      title: "Check Script Installation",
      content: "Verify that the chatbot script is properly installed in your website's <head> section:",
      code: `<script>
  window.CHATBOT_ID = 'your-unique-id';
  sample codeSnippet
</script>`
    },
    {
      title: "Verify API Key",
      content: "Ensure your API key is valid and properly configured in the script."
    },
    {
      title: "Check Domain Configuration",
      content: "Confirm that your domain is whitelisted in the chatbot settings."
    }
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        {/* Header Section */}
        <div className="p-8 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Integration Not Detected</h2>
              <p className="text-gray-600 mt-1">We couldn't find the chatbot integration on your website</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 cursor-pointer">
              <Terminal className="w-4 h-4" />
              View Installation Guide
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 cursor-pointer">
              <ExternalLink className="w-4 h-4" />
              Contact Support
            </button>
          </div>
        </div>

        {/* Troubleshooting Section */}
        <div className="p-8">
          <h3 className="text-lg font-semibold mb-4">Troubleshooting Steps</h3>
          <div className="space-y-4">
            {troubleshootingSteps.map((step, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl hover:border-blue-200 transition-colors"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer"
                  onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-medium">
                      {index + 1}
                    </div>
                    <span className="font-medium text-gray-900">{step.title}</span>
                  </div>
                  {expandedSection === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {expandedSection === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 mb-4">{step.content}</p>
                    {step.code && (
                      <div className="relative bg-gray-50 rounded-lg p-4">
                        <pre className="text-sm text-gray-800 overflow-x-auto">
                          {step.code}
                        </pre>
                        <button
                          onClick={() => handleCopy(step.code)}
                          className="absolute top-2 right-2 p-2 hover:bg-gray-200 rounded-md transition-colors"
                        >
                          {copied ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          ) : (
                            <Copy className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Status Check Section */}
        <div className="p-8 bg-gray-50 rounded-b-2xl border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Still having issues?</h4>
              <p className="text-gray-600 text-sm mt-1">
                Our support team is available 24/7 to help you with the integration
              </p>
            </div>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              Run Status Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationNotFound;