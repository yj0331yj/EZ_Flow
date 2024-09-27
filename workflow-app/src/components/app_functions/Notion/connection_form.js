import React, { useState } from 'react';
import { ChevronDown, Lightbulb } from 'lucide-react';

const NotionConnectionPopup = ({ onClose, onConfirm }) => {
  const [connectionType, setConnectionType] = useState('');
  const [connectionName, setConnectionName] = useState('');
  const [internalIntegrationToken, setInternalIntegrationToken] = useState('');
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const handleSave = () => {
    const connectionData = {
      connectionType,
      connectionName,
      ...(connectionType === 'notion_internal' && { internalIntegrationToken }),
      ...(connectionType === 'notion_public' && showAdvancedSettings && { clientId, clientSecret }),
    };
    onConfirm(connectionData);
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
                  onChange={(e) => {
                    setConnectionType(e.target.value);
                    setShowAdvancedSettings(false);
                  }}
                  className="w-full p-2 border rounded-md appearance-none bg-white"
                >
                  <option value="">선택하세요</option>
                  <option value="notion_public">Notion Public</option>
                  <option value="notion_internal">Notion Internal</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {connectionType && (
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
                  placeholder="내 Notion Public 연결"
                />
              </div>
            )}

            {connectionType === 'notion_internal' && (
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <ChevronDown size={16} className="mr-1" />
                  내부 통합 토큰
                </label>
                <input
                  type="password"
                  value={internalIntegrationToken}
                  onChange={(e) => setInternalIntegrationToken(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="내부 통합 토큰을 입력하세요"
                />
              </div>
            )}

            {connectionType === 'notion_public' && (
              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  id="showAdvancedSettings"
                  checked={showAdvancedSettings}
                  onChange={(e) => setShowAdvancedSettings(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="showAdvancedSettings" className="text-sm text-gray-600">고급 설정 표시</label>
              </div>
            )}

            {connectionType === 'notion_public' && showAdvancedSettings && (
              <>
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <ChevronDown size={16} className="mr-1" />
                    클라이언트 ID
                  </label>
                  <input
                    type="text"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="클라이언트 ID를 입력하세요"
                  />
                </div>
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <ChevronDown size={16} className="mr-1" />
                    클라이언트 시크릿
                  </label>
                  <input
                    type="password"
                    value={clientSecret}
                    onChange={(e) => setClientSecret(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="클라이언트 시크릿을 입력하세요"
                  />
                </div>
              </>
            )}
          </div>

          <div className="flex items-start mt-4">
            <Lightbulb className="text-yellow-400 mr-2 mt-1" size={20} />
            <p className="text-gray-600 text-sm">
              Notion 연결 생성 방법에 대한 자세한 정보는 <a href="#" className="text-purple-600 hover:underline">온라인 도움말</a>을 참조하세요.
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
            disabled={!connectionType || !connectionName || 
              (connectionType === 'notion_internal' && !internalIntegrationToken) ||
              (connectionType === 'notion_public' && showAdvancedSettings && (!clientId || !clientSecret))}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotionConnectionPopup;
