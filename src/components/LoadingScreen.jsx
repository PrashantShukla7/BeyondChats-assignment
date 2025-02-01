import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
      <div>
        <Loader2 className="w-12 h-12 text-[#2872f9] mx-auto animate-spin" />
      </div>
      <h2 className="text-xl font-semibold mt-4">Testing Integration...</h2>
      <p className="text-gray-600">This may take a few moments</p>
    </div>
  );
};

export default LoadingScreen;