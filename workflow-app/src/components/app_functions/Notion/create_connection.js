import React, { useState } from 'react';
import { ChevronDown, Lightbulb } from 'lucide-react';

const NotionCreateConnection = ({ onClose, onSave }) => {
  const [connectionType, setConnectionType] = useState('');

  const handleSave = () => {
    onSave({ connectionType });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[32rem] flex flex-col">
        <div className="p-6 flex-1">
          <h2 className="text-lg font-semibold mb-4">Notion 연결</h2>
          <div className="space-y-4">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <ChevronDown size={16} className="mr-1" />
                연결 유형
              </label>
              <div className="relative">
                <select
                  value={connectionType}
                  onChange={(e) => setConnectionType(e.target.value)}
                  className="w-full p-2 border rounded-md appearance-none bg-white"
                >
                  <option value="">선택하세요</option>
                  <option value="notion_public">Notion Public</option>
                  <option value="notion_internal">Notion Internal</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="flex items-start mt-4">
            <Lightbulb className="text-yellow-400 mr-2 mt-1" size={20} />
            <p className="text-gray-600 text-sm">
              Notion에 대한 연결을 생성하는 방법에 대한 자세한 정보는 <a href="#" className="text-purple-600 hover:underline">온라인 도움말</a>을 참조하세요.
            </p>
          </div>
        </div>
        <div className="p-6 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md mr-2"
          >
            닫기
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-purple-600 text-white rounded-md"
            disabled={!connectionType}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotionCreateConnection;
