import { useEffect, useRef, useState } from "react";
import ShareButton from "./ShareButton";
import {
    CheckCircle,
    Settings,
    MessageSquare,
    Twitter,
    Linkedin,
    Facebook,
} from "lucide-react";
import Confetti from 'react-confetti'

const SuccessScreen = () => {
    const [showConfetti, setShowConfetti] = useState(true);
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (containerRef.current) {
            setDimensions({
                width: containerRef.current.offsetWidth,
                height: containerRef.current.offsetHeight,
            });
        }

        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div ref={containerRef} className="relative">
            {showConfetti && (
                <Confetti
                    width={dimensions.width}
                    height={dimensions.height}
                    opacity={0.7}
                    recycle={false}
                    numberOfPieces={200}
                    className="absolute top-0 left-0"
                />
            )}
            <div className="text-center space-y-6">
                <div className="relative inline-block">
                    <div className="absolute inset-0 animate-ping bg-green-500/20 rounded-full" />
                    <CheckCircle className="w-16 h-16 text-[#64ee81] relative" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-[#001534] mb-2">
                        Integration Successful!
                    </h2>
                    <p className="text-gray-600">
                        Your chatbot is now ready to help your customers
                    </p>
                </div>
                <div className="max-w-md mx-auto space-y-4">
                    <button className="w-full bg-[#2872f9] text-white py-3 px-4 rounded-lg hover:bg-[#2872f9]/90 flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300">
                        <Settings className="w-5 h-5" />
                        Explore Admin Panel
                    </button>
                    <button className="w-full bg-[#64ee81] text-[#001534] py-3 px-4 rounded-lg hover:bg-[#64ee81]/90 flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300">
                        <MessageSquare className="w-5 h-5" />
                        Start Talking to Your Chatbot
                    </button>
                </div>
                <div className="pt-6 border-t">
                    <p className="text-gray-600 mb-4">Share your success</p>
                    <div className="flex justify-center gap-4">
                        <ShareButton
                            icon={Twitter}
                            color="#1DA1F2"
                            label="Share on Twitter"
                        />
                        <ShareButton
                            icon={Linkedin}
                            color="#0A66C2"
                            label="Share on LinkedIn"
                        />
                        <ShareButton
                            icon={Facebook}
                            color="#1877F2"
                            label="Share on Facebook"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessScreen;