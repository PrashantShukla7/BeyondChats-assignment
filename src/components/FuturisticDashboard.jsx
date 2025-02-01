import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Code2,
  Settings,
  Loader2,
  Mail,
  Home,
  Activity,
  Users,
  Bell,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

const Navbar = ({ onMenuClick, isMobileMenuOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ChatBot AI
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {['Dashboard', 'Analytics', 'Users', 'Settings'].map((item) => (
              <button key={item} className="text-gray-600 hover:text-blue-600 transition-colors">
                {item}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              className="md:hidden"
              onClick={onMenuClick}
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
  );
};

const StatCard = ({ title, value, icon: Icon, color }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < value) {
        setCount(prev => Math.min(prev + Math.ceil(value / 20), value));
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [value, count]);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-2">{count.toLocaleString()}</p>
    </div>
  );
};

const ChatPreview = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "👋 Hi! How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  
  const sendMessage = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for testing! This is a preview of how your chatbot will appear to users.",
        isBot: true
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200">
      <div className="p-4 border-b bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold">Chat Preview</h3>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`max-w-[80%] p-3 rounded-2xl ${
              msg.isBot 
                ? 'bg-gray-100 text-gray-800' 
                : 'bg-blue-500 text-white'
            }`}>
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
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
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
  );
};

const DashboardView = ({ onPreviewClick }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Conversations" 
          value={15234} 
          icon={MessageSquare}
          color="bg-blue-500"
        />
        <StatCard 
          title="Active Users" 
          value={892} 
          icon={Users}
          color="bg-green-500"
        />
        <StatCard 
          title="Response Rate" 
          value={98} 
          icon={Activity}
          color="bg-purple-500"
        />
        <StatCard 
          title="Integrations" 
          value={126} 
          icon={Code2}
          color="bg-orange-500"
        />
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={onPreviewClick}
            className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 text-left group border border-blue-200"
          >
            <MessageSquare className="w-8 h-8 text-blue-500 mb-4 transform group-hover:scale-110 transition-all duration-300" />
            <h3 className="font-semibold text-lg mb-2">Preview Bot</h3>
            <p className="text-gray-600 text-sm">Test how your chatbot appears to users</p>
          </button>

          <button className="p-6 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 text-left group border border-purple-200">
            <Code2 className="w-8 h-8 text-purple-500 mb-4 transform group-hover:scale-110 transition-all duration-300" />
            <h3 className="font-semibold text-lg mb-2">Integration</h3>
            <p className="text-gray-600 text-sm">Get implementation code and guides</p>
          </button>

          <button className="p-6 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all duration-300 text-left group border border-orange-200">
            <Settings className="w-8 h-8 text-orange-500 mb-4 transform group-hover:scale-110 transition-all duration-300" />
            <h3 className="font-semibold text-lg mb-2">Settings</h3>
            <p className="text-gray-600 text-sm">Customize bot behavior and appearance</p>
          </button>
        </div>
      </div>
    </div>
  );
};

const FuturisticDashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="pt-20 px-4 space-y-4">
            {['Dashboard', 'Analytics', 'Users', 'Settings'].map((item) => (
              <button
                key={item}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <main className="pt-24 px-4 pb-12 max-w-7xl mx-auto">
        <DashboardView onPreviewClick={() => setShowPreview(true)} />
      </main>
      
      {showPreview && <ChatPreview onClose={() => setShowPreview(false)} />}
    </div>
  );
};

export default FuturisticDashboard;