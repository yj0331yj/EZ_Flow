import React, { useState } from 'react';
import { ChevronDown, Lightbulb } from 'lucide-react';

const InstagramConnectionForm = ({ onClose, onSave }) => {
  const [connectionName, setConnectionName] = useState('');
  const [instagramAppId, setInstagramAppId] = useState('');
  const [instagramAppSecret, setInstagramAppSecret] = useState('');
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);

  const handleSave = () => {
    onSave({ connectionName, instagramAppId, instagramAppSecret });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[32rem] flex flex-col">
        <div className="p-6 flex-1">
          <h2 className="text-lg font-semibold mb-4">Instagram 연결</h2>
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
                placeholder="내 Instagram 연결"
              />
            </div>
            {showAdvancedSettings && (
              <>
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <ChevronDown size={16} className="mr-1" />
                    Instagram 앱 ID
                  </label>
                  <input
                    type="text"
                    value={instagramAppId}
                    onChange={(e) => setInstagramAppId(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <ChevronDown size={16} className="mr-1" />
                    Instagram 앱 비밀키
                  </label>
                  <input
                    type="password"
                    value={instagramAppSecret}
                    onChange={(e) => setInstagramAppSecret(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </>
            )}
          </div>
          <div className="flex items-start mt-4">
          </div>
          <div className="mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={showAdvancedSettings}
                onChange={(e) => setShowAdvancedSettings(e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm text-gray-600">고급 설정 표시</span>
            </label>
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
            disabled={!connectionName}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstagramConnectionForm;
