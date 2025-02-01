import React, { useState, useEffect } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import OrganizationForm from "./OrganizationForm.jsx";
import WebsiteAnalysis from "./WebsiteAnalysis.jsx";
import Completion from "./Completion.jsx";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

// Dummy data for demonstration
const DUMMY_PAGES = [
    {
        id: 1,
        url: "/about",
        status: "completed",
        chunks: [
            "Company X is a leading provider of AI solutions.",
            "Our mission is to make AI accessible to everyone.",
        ],
    },
    {
        id: 2,
        url: "/products",
        status: "completed",
        chunks: [
            "Our flagship product is an AI-powered chatbot.",
            "Features include natural language processing and custom training.",
            "Integrates seamlessly with existing systems.",
        ],
    },
    { id: 3, url: "/pricing", status: "processing", chunks: [] },
    { id: 4, url: "/blog/ai-trends-2024", status: "pending", chunks: [] },
    { id: 5, url: "/contact", status: "pending", chunks: [] },
];

const OrganizationSetup = () => {
    const [step, setStep] = useState(1);
    const [orgData, setOrgData] = useState({
        name: "",
        website: "",
        description: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [pages, setPages] = useState(DUMMY_PAGES);
    const [selectedPage, setSelectedPage] = useState(null);
    const [progress, setProgress] = useState(0);

    const fetchMetaDescription = async (url) => {
        try {
            setIsLoading(true);
            const encodedUrl = encodeURIComponent(url);
            const response = await axios.get(
                `https://opengraph.io/api/1.1/site/${encodedUrl}?app_id=${import.meta.env.VITE_OPENGRAPH_API_KEY}`
            );
            const desc =
                response.data.openGraph.description ||
                response.data.hybridGraph.description;
            if (!desc){
              setIsLoading(false)
              return toast.error("Couldn't find description");
            } 
            setOrgData((prev) => ({
                ...prev,
                description: desc,
            }));
            setIsLoading(false);
        } catch (error) {
            toast.error("Sorry! Something went wrong");
        }
        finally {
          setIsLoading(false)
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 300);
        return () => clearInterval(interval);
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case "completed":
                return "text-green-500";
            case "processing":
                return "text-blue-500";
            case "pending":
                return "text-gray-400";
            default:
                return "text-gray-400";
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case "completed":
                return <CheckCircle className="w-5 h-5" />;
            case "processing":
                return <Loader2 className="w-5 h-5 animate-spin" />;
            case "pending":
                return <AlertCircle className="w-5 h-5" />;
            default:
                return <AlertCircle className="w-5 h-5" />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <Toaster position="top-right" />
            <div className="max-w-4xl mx-auto px-4 mt-14">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Progress Steps */}
                    <div className="flex items-center justify-between mb-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                        step >= i
                                            ? "bg-[#64ee81] text-[#001534]"
                                            : "bg-gray-200 text-gray-500"
                                    }`}
                                >
                                    {i}
                                </div>
                                {i < 3 && (
                                    <div
                                        className={`w-24 h-1 mx-2 ${
                                            step > i
                                                ? "bg-[#64ee81]"
                                                : "bg-gray-200"
                                        }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {step === 1 && (
                        <OrganizationForm
                            orgData={orgData}
                            setOrgData={setOrgData}
                            isLoading={isLoading}
                            setStep={setStep}
                            fetchMetaDescription={fetchMetaDescription}
                        />
                    )}

                    {step === 2 && (
                        <WebsiteAnalysis
                            getStatusColor={getStatusColor}
                            getStatusIcon={getStatusIcon}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            pages={pages}
                            setPages={setPages}
                            progress={progress}
                            setStep={setStep}
                        />
                    )}

                    {step === 3 && <Completion />}
                </div>
            </div>
        </div>
    );
};

export default OrganizationSetup;
