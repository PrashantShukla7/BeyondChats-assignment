const ShareButton = ({ icon: Icon, color, label }) => (
  <button 
    className="p-3 rounded-full transition-all duration-300 hover:scale-110"
    style={{ backgroundColor: color }}
  >
    <Icon className="w-5 h-5 text-white" />
    <span className="sr-only">{label}</span>
  </button>
);

export default ShareButton