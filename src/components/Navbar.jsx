import { MessageSquare, Bell, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="bg-gray-50">
            <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                <MessageSquare className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Beyond
                            </span>
                        </div>

                        <div className="hidden md:flex items-center gap-6">
                            {[
                                {
                                    to: "/",
                                    label: "Register",
                                },
                                {
                                    to: "/organization",
                                    label: "Organization",
                                },
                                {
                                    to: "/integrate",
                                    label: "Integration",
                                },
                            ].map((item) => (
                                <Link
                                    to={item.to}
                                    key={item}
                                    className="text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <button
                                className="md:hidden"
                                onClick={() =>
                                    setIsMobileMenuOpen(!isMobileMenuOpen)
                                }
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 md:hidden">
                    <div className="pt-20 px-4 space-y-4 bg-white">
                        {["Dashboard", "Analytics", "Users", "Settings"].map(
                            (item) => (
                                <button
                                    key={item}
                                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    {item}
                                </button>
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
