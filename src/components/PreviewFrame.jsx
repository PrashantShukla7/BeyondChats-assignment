import { AlertCircle, X, MessageSquare, ChevronRight } from "lucide-react";
import { useState } from "react";

const PreviewFrame = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "👋 Hi! How can I help you today?", isBot: true },
    ]);

    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { text: input, isBot: false }]);
        setInput("");

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    text: "Thanks for testing! This is a preview of how your chatbot will appear to users.",
                    isBot: true,
                },
            ]);
        }, 1000);
    };
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
                    Chatbot not working as intended ?{" "}
                    <span className="underline cursor-pointer">
                        {" "}
                        Share Feedback
                    </span>
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
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-14 h-14 rounded-full cursor-pointer bg-[#2b7fff] flex justify-center items-center"
                    >
                        <MessageSquare size={30} className="text-white" />
                    </div>
                    {isOpen && (
                        <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200">
                            <div className="p-4 border-b bg-[#001534] rounded-t-2xl">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white font-semibold">
                                        Chat Preview
                                    </h3>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-white/80 hover:text-white transition-colors cursor-pointer"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex ${
                                            msg.isBot
                                                ? "justify-start"
                                                : "justify-end"
                                        }`}
                                    >
                                        <div
                                            className={`max-w-[80%] p-3 rounded-2xl ${
                                                msg.isBot
                                                    ? "bg-gray-100 text-gray-800"
                                                    : "bg-blue-500 text-white"
                                            }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 border-t">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) =>
                                            setInput(e.target.value)
                                        }
                                        onKeyPress={(e) =>
                                            e.key === "Enter" && sendMessage()
                                        }
                                        placeholder="Type a message..."
                                        className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:border-blue-500"
                                    />
                                    <button
                                        onClick={sendMessage}
                                        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PreviewFrame;
