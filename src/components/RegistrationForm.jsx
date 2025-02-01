import React, { useState } from "react";
import { Mail, Lock, User, ArrowRight, Eye, EyeClosed } from "lucide-react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const RegistrationForm = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
            toast.success("Email sent successfully");
        }
    };

    const sendEmail = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    };

    const handleResend = (e) => {
        toast.promise(sendEmail(), {
            loading: "Sending Email...",
            success: <b>Email sent successfully</b>,
            error: <b>Could not send email</b>,
        });
    };

    return (
        <div className="min-h-screen bg-[#001534] pt-5">
            <Toaster position="top-right" />
            <div className="flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 transform transition-all duration-500 ease-out mt-18">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-[#001534]">
                            {step === 1 ? "Create Account" : "Verify Email"}
                        </h2>
                        <p className="text-gray-600 mt-2">
                            {step === 1
                                ? "Get started with your free account"
                                : "Enter the code sent to your email"}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {step === 1 ? (
                            <>
                                <div className="relative group">
                                    <User
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2872f9] transition-colors"
                                        size={20}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#2872f9] outline-none transition-all duration-300"
                                        required
                                    />
                                </div>

                                <div className="relative group">
                                    <Mail
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2872f9] transition-colors"
                                        size={20}
                                    />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Email Address"
                                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#2872f9] outline-none transition-all duration-300"
                                        required
                                    />
                                </div>

                                <div className="relative group">
                                    <Lock
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2872f9] transition-colors"
                                        size={20}
                                    />
                                    <input
                                        type={
                                            isPasswordVisible
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Password"
                                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#2872f9] outline-none transition-all duration-300"
                                        required
                                    />
                                    <div className="eye">
                                        {isPasswordVisible ? (
                                            <Eye
                                                size={20}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors"
                                                onClick={() =>
                                                    setIsPasswordVisible(
                                                        !isPasswordVisible
                                                    )
                                                }
                                            />
                                        ) : (
                                            <EyeClosed
                                                size={20}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors"
                                                onClick={() =>
                                                    setIsPasswordVisible(
                                                        !isPasswordVisible
                                                    )
                                                }
                                            />
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#64ee81] hover:bg-[#64ee81]/90 text-[#001534] font-semibold py-3 rounded-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    Continue
                                    <ArrowRight size={20} />
                                </button>

                                <div className="relative flex items-center gap-3 my-8">
                                    <div className="flex-grow border-t border-gray-300"></div>
                                    <span className="text-gray-500">or</span>
                                    <div className="flex-grow border-t border-gray-300"></div>
                                </div>

                                <button
                                    type="button"
                                    className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-3 rounded-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <i className="ri-google-fill"></i>
                                    Continue with Google
                                </button>
                            </>
                        ) : (
                            <div className="space-y-6 flex flex-col items-center">
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4].map((_, i) => (
                                        <input
                                            key={i}
                                            type="text"
                                            maxLength={1}
                                            className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-200 rounded-lg focus:border-[#2872f9] outline-none transition-all duration-300"
                                            value={verificationCode[i] || ""}
                                            onChange={(e) => {
                                                const newCode =
                                                    verificationCode.split("");
                                                newCode[i] = e.target.value;
                                                setVerificationCode(
                                                    newCode.join("")
                                                );
                                                if (
                                                    e.target.value &&
                                                    e.target.nextSibling
                                                ) {
                                                    e.target.nextSibling.focus();
                                                }
                                            }}
                                        />
                                    ))}
                                </div>

                                <Link
                                    to="/organization"
                                    type="submit"
                                    className="w-full bg-[#64ee81] hover:bg-[#64ee81]/90 text-[#001534] font-semibold py-3 rounded-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    Verify Email
                                    <ArrowRight size={20} />
                                </Link>

                                <p className="text-center text-gray-600">
                                    Didn't receive the code?
                                    <button
                                        type="button"
                                        className="text-[#2872f9] hover:underline ml-1 cursor-pointer"
                                        onClick={handleResend}
                                    >
                                        Resend
                                    </button>
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
