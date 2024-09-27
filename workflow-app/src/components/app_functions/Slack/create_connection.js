import React from 'react';
import { Lightbulb } from 'lucide-react';
import SlackConnectionForm from ./connection_form';

const SlackCreateConnection = ({ onClose, onSave }) => {
  const [showOpenAIForm, setShowOpenAIForm] = useState(false);

  const handleCreateConnection = () => {
    setShowSlackForm(true);
  };
  if (showSlackForm) {
    return <SlackConnectionForm onClose={() => setShowSlackForm(false)} onSave={onConfirm} />;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[32rem] flex flex-col">
        <div className="p-6 flex-1">
          <h2 className="text-lg font-semibold mb-4">연결</h2>
          <button
            onClick={handleCreateConnection}
            className="bg-purple-700 text-white p-4 rounded-md flex items-center mb-4 w-full hover:bg-purple-800 transition-colors"
          >
            <div className="mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 2C13.1193 2 12 3.11929 12 4.5V9.5C12 10.8807 13.1193 12 14.5 12C15.8807 12 17 10.8807 17 9.5V4.5C17 3.11929 15.8807 2 14.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.5 10H19.5C18.1193 10 17 11.1193 17 12.5C17 13.8807 18.1193 15 19.5 15H20.5C21.8807 15 23 13.8807 23 12.5C23 11.1193 21.8807 10 20.5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 14C8.11929 14 7 15.1193 7 16.5V21.5C7 22.8807 8.11929 24 9.5 24C10.8807 24 12 22.8807 12 21.5V16.5C12 15.1193 10.8807 14 9.5 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.5 10H4.5C5.88071 10 7 11.1193 7 12.5C7 13.8807 5.88071 15 4.5 15H3.5C2.11929 15 1 13.8807 1 12.5C1 11.1193 2.11929 10 3.5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-lg">연결 생성</span>
          </button>
          <div className="flex items-start mb-4">
            <Lightbulb className="text-yellow-400 mr-2 mt-1" size={20} />
            <p className="text-gray-600 text-sm">
              Slack에 대한 연결을 생성하는 방법에 대한 자세한 정보는 <a href="#" className="text-purple-600 hover:underline">온라인 도움말</a>을 참조하세요.
            </p>
          </div>
        </div>
        <div className="p-6 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md mr-2"
          >
            취소
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-purple-600 text-white rounded-md"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlackCreateConnection;
