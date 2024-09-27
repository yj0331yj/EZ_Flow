import React, { useState } from 'react';
import { ChevronDown, Lightbulb, Plus } from 'lucide-react';

const SlackConnectionForm = ({ onClose, onSave }) => {
  const [connectionName, setConnectionName] = useState('');
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);

  const handleSave = () => {
    onSave({ connectionName });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[32rem] flex flex-col">
        <div className="p-6 flex-1">
          <h2 className="text-lg font-semibold mb-4">Slack 연결</h2>
          <div className="space-y-4">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <ChevronDown size={16} className="mr-1" />
                연결 이름
              </label>
              <input
                type="text"
                value={connectionName}
                onChange={(e) => setConnectionName(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="My Slack (user) connection"
              />
            </div>
            
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <ChevronDown size={16} className="mr-1" />
                추가 스코프
              </label>
              <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                <Plus size={16} className="mr-1" />
                스코프 추가
              </button>
              <div className="flex items-start mt-1">
                <Lightbulb className="text-yellow-400 mr-2 mt-1" size={16} />
                <p className="text-xs text-gray-600">
                  추가 스코프는 Make an API Call 모듈에 필요합니다. 
                  자세한 내용은 <a href="#" className="text-purple-600 hover:underline">Slack API 문서</a>를 참조하세요. 
                  이 연결로 수행할 모든 API 호출에 대한 스코프를 추가하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t flex justify-between items-center">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={showAdvancedSettings}
              onChange={(e) => setShowAdvancedSettings(e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm text-gray-700">고급 설정 표시</span>
          </label>
          <div>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md mr-2"
            >
              닫기
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-purple-600 text-white rounded-md"
              disabled={!connectionName}
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlackConnectionForm;
