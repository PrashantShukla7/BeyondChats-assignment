import { useState } from "react";

import { Copy, CheckCircle } from 'lucide-react';

const CodeSnippet = ({ code }) => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = async () => {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
  
    return (
      <div className="relative group">
        <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto border-2 border-gray-200 transition-all duration-300 group-hover:border-[#2872f9]/20">
          {code}
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-lg shadow-sm transition-all duration-300 flex items-center gap-2"
        >
          {copied ? (
            <>
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span className="text-sm">Copy</span>
            </>
          )}
        </button>
      </div>
    );
  };

  export default CodeSnippet;