import React, { useState } from 'react';
import { Search, FileSpreadsheet, Mail, MessageSquare, Brain, Calendar, Cloud, Database, FileText, Trello, GitBranch, Linkedin, Facebook, Instagram, Globe, Rss, Share2, Code, Youtube } from 'lucide-react';
import OpenAIFunctionsPopup from './app_functions/OpenAI/select_function.js';
import NotionFunctionsPopup from './app_functions/Notion/select_function.js';
import GitHubFunctionsPopup from './app_functions/Github/select_function.js';
import SlackFunctionsPopup from './app_functions/Slack/select_function.js';
import InstagramFunctionsPopup from './app_functions/Instagram/select_function.js';

const AppItem = ({ icon, name, count, color, onSelect }) => (
  <div className="flex flex-col items-center p-2 hover:bg-gray-100 cursor-pointer" onClick={() => onSelect({ icon, name, color })}>
    <div className="p-4 rounded-full mb-2" style={{ backgroundColor: color }}>
      {React.cloneElement(icon, { color: 'white', size: 32 })}
    </div>
    <span className="text-center text-sm font-medium">{name}</span>
    <span className="bg-gray-200 rounded-full px-2 py-1 text-xs mt-1">{count}</span>
  </div>
);

const XIcon = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 3.75L19.5 20.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5 3.75L4.5 20.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const KakaoIcon = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3C6.477 3 2 6.477 2 12C2 17.523 6.477 21 12 21C17.523 21 22 17.523 22 12C22 6.477 17.523 3 12 3ZM16.5 13H13V16.5C13 17.053 12.553 17.5 12 17.5C11.447 17.5 11 17.053 11 16.5V13H7.5C6.947 13 6.5 12.553 6.5 12C6.5 11.447 6.947 11 7.5 11H11V7.5C11 6.947 11.447 6.5 12 6.5C12.553 6.5 13 6.947 13 7.5V11H16.5C17.053 11 17.5 11.447 17.5 12C17.5 12.553 17.053 13 16.5 13Z" fill={color}/>
  </svg>
);

const TossIcon = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill={color}/>
  </svg>
);

const NaverIcon = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.273 3H7.727C5.119 3 3 5.119 3 7.727V16.273C3 18.881 5.119 21 7.727 21H16.273C18.881 21 21 18.881 21 16.273V7.727C21 5.119 18.881 3 16.273 3ZM15.934 13.414L11.414 19H8.066V5H11.414V10.586L15.934 5H19.282L14.066 11.414L19.282 19H15.934V13.414Z" fill={color}/>
  </svg>
);

const Popup = ({ onClose, isExpanded, onSelectIcon }) => {
  const [showOpenAIFunctions, setShowOpenAIFunctions] = useState(false);
  const [showNotionFunctions, setShowNotionFunctions] = useState(false);
  const [showGitHubFunctions, setShowGitHubFunctions] = useState(false);
  const [showSlackFunctions, setShowSlackFunctions] = useState(false);
  const [showInstagramFunctions, setShowInstagramFunctions] = useState(false);

  const handleSelectIcon = (iconData) => {
    if (iconData.name === "OpenAI") {
      setShowOpenAIFunctions(true);
    } else if (iconData.name === "Notion") {
      setShowNotionFunctions(true);
    } else if (iconData.name === "GitHub") {
      setShowGitHubFunctions(true);
    } else if (iconData.name === "Slack") {
      setShowSlackFunctions(true);
    } else if (iconData.name === "Instagram") {
      setShowInstagramFunctions(true);
    } else {
      onSelectIcon(iconData);
      onClose();
    }
  };

  const handleSelectOpenAIFunction = (functionData) => {
    onSelectIcon({ ...functionData, icon: <Brain size={24} />, color: "#10A37F" });
    onClose();
  };

  const handleSelectNotionFunction = (functionData) => {
    onSelectIcon({ ...functionData, icon: <FileText size={24} />, color: "#000000" });
    onClose();
  };
  const handleSelectGitHubFunction = (functionData) => {
    onSelectIcon({ ...functionData, icon: <GitBranch size={24} />, color: "#181717" });
    onClose();
  };
  const handleSelectSlackFunction = (functionData) => {
    onSelectIcon({ ...functionData, icon: <MessageSquare size={24} />, color: "#4A154B" });
    onClose();
  };
  const handleSelectInstagramFunction = (functionData) => {
    onSelectIcon({ ...functionData, icon: <Instagram size={24} />, color: "#E4405F" });
    onClose();
  };

  if (showOpenAIFunctions) {
    return <OpenAIFunctionsPopup onClose={() => setShowOpenAIFunctions(false)} onSelectFunction={handleSelectOpenAIFunction} />;
  }

  if (showNotionFunctions) {
    return <NotionFunctionsPopup onClose={() => setShowNotionFunctions(false)} onSelectFunction={handleSelectNotionFunction} />;
  }
  if (showGitHubFunctions) {
    return <GitHubFunctionsPopup onClose={() => setShowGitHubFunctions(false)} onSelectFunction={handleSelectGitHubFunction} />;
  }
  if (showSlackFunctions) {
    return <SlackFunctionsPopup onClose={() => setShowSlackFunctions(false)} onSelectFunction={handleSelectSlackFunction} />;
  }
  if (showInstagramFunctions) {
    return <InstagramFunctionsPopup onClose={() => setShowInstagramFunctions(false)} onSelectFunction={handleSelectInstagramFunction} />;
  }
  return (
    <>
      <div
        className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
        onClick={onClose}
      >
        <div
          className={`bg-white rounded-lg shadow-lg w-[32rem] max-h-[80vh] flex flex-col transition-all duration-300 ease-in-out ${
            isExpanded ? 'ml-64' : 'ml-16'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex-1 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">모든 앱</h2>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="앱 또는 모듈 검색"
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <AppItem icon={<FileSpreadsheet size={24} />} name="Google Sheets" count={8} color="#0F9D58" onSelect={handleSelectIcon} />
              <AppItem icon={<Mail size={24} />} name="Gmail" count={15} color="#D44638" onSelect={handleSelectIcon} />
              <AppItem icon={<MessageSquare size={24} />} name="Slack" count={12} color="#4A154B" onSelect={handleSelectIcon} />
              <AppItem icon={<Brain size={24} />} name="OpenAI" count={16} color="#10A37F" onSelect={handleSelectIcon} />
              <AppItem icon={<Calendar size={24} />} name="Google Calendar" count={5} color="#4285F4" onSelect={handleSelectIcon} />
              <AppItem icon={<Cloud size={24} />} name="Dropbox" count={7} color="#0061FF" onSelect={handleSelectIcon} />
              <AppItem icon={<Database size={24} />} name="Airtable" count={9} color="#FCB400" onSelect={handleSelectIcon} />
              <AppItem icon={<FileText size={24} />} name="Notion" count={11} color="#000000" onSelect={handleSelectIcon} />
              <AppItem icon={<Trello size={24} />} name="Trello" count={6} color="#0079BF" onSelect={handleSelectIcon} />
              <AppItem icon={<GitBranch size={24} />} name="GitHub" count={14} color="#181717" onSelect={handleSelectIcon} />
              <AppItem icon={<XIcon size={24} />} name="X" count={3} color="#000000" onSelect={handleSelectIcon} />
              <AppItem icon={<Linkedin size={24} />} name="LinkedIn" count={2} color="#0A66C2" onSelect={handleSelectIcon} />
              <AppItem icon={<Facebook size={24} />} name="Facebook" count={4} color="#1877F2" onSelect={handleSelectIcon} />
              <AppItem icon={<Instagram size={24} />} name="Instagram" count={1} color="#E4405F" onSelect={handleSelectIcon} />
              <AppItem icon={<Globe size={24} />} name="WordPress" count={10} color="#000000" onSelect={handleSelectIcon} />
              <AppItem icon={<Globe size={24} />} name="HTTP" count={8} color="#0000FF" onSelect={handleSelectIcon} />
              <AppItem icon={<Rss size={24} />} name="RSS" count={5} color="#FFA500" onSelect={handleSelectIcon} />
              <AppItem icon={<Code size={24} />} name="Text parser" count={7} color="#FF6347" onSelect={handleSelectIcon} />
              <AppItem icon={<KakaoIcon size={24} />} name="Kakao" count={6} color="#FFE812" onSelect={handleSelectIcon} />
              <AppItem icon={<TossIcon size={24} />} name="Toss" count={3} color="#0064FF" onSelect={handleSelectIcon} />
              <AppItem icon={<NaverIcon size={24} />} name="Naver" count={5} color="#03C75A" onSelect={handleSelectIcon} />
              <AppItem icon={<Youtube size={24} />} name="YouTube" count={9} color="#FF0000" onSelect={handleSelectIcon} />
            </div>
          </div>
          <div className="p-6 border-t">
            <button
              onClick={onClose}
              className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
