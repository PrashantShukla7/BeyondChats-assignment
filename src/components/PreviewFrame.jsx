import {
    AlertCircle,
    MessageSquare
} from "lucide-react";
import { useState } from "react";

const PreviewFrame = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed inset-0 bg-white z-50">
            <div className="bg-[#001534] p-4 text-white flex items-center justify-between">
                <button
                    onClick={onClose}
                    className="text-white hover:text-gray-200 flex items-center gap-2 transition-all duration-300 cursor-pointer"
                >
                    ← Back to Integration
                </button>
                <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition-all duration-300">
                    <AlertCircle className="w-4 h-4" />
                    Chatbot not working as intended ? <span className="underline cursor-pointer"> Share Feedback</span>
                </button>
            </div>
            <div className="h-[calc(100vh-64px)] relative">
                <iframe
                    src="about:blank"
                    className="w-full h-full border-none"
                    title="Website Preview"
                />
                <div
                    className={`fixed bottom-6 right-6 transition-all duration-500 transform ${
                        isOpen
                            ? "translate-y-0"
                            : "translate-y-[calc(100%-64px)]"
                    }`}
                >
                    <div className="bg-white rounded-lg shadow-2xl border-2 border-gray-200">
                        <div
                            className="p-4 cursor-pointer flex items-center justify-between"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="font-medium">Chat with us</span>
                            <button className="w-8 h-8 rounded-full bg-[#2872f9] text-white flex items-center justify-center">
                                <MessageSquare className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="h-[400px] p-4 border-t-2">
                            <div className="text-center text-gray-500 h-full flex items-center justify-center">
                                Chatbot Interface Preview
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewFrame;
