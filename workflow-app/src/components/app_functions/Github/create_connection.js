import React, { useState } from 'react';
import { Lightbulb, AlertTriangle } from 'lucide-react';
import GitHubConnectionForm from './connection_form';

const GitHubCreateConnection = ({ onClose, onSave }) => {
  const [showConnectionForm, setShowConnectionForm] = useState(false);
  const [error, setError] = useState('');

  const handleCreateConnection = () => {
    setShowConnectionForm(true);
    setError('');
  };

  const handleSave = (connectionData) => {
    if (!connectionData.connectionType || !connectionData.connectionName) {
      setError('값이 비어있으면 안 됩니다.');
      return;
    }
    onSave(connectionData);
    onClose();
  };

  if (showConnectionForm) {
    return <GitHubConnectionForm onClose={() => setShowConnectionForm(false)} onSave={handleSave} />;
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
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-lg">연결 생성</span>
          </button>
          {error && (
            <div className="flex items-center text-red-500 mb-4">
              <AlertTriangle className="mr-2" size={20} />
              <span>{error}</span>
            </div>
          )}
          <div className="flex items-start mb-4">
            <Lightbulb className="text-yellow-400 mr-2 mt-1" size={20} />
            <p className="text-gray-600 text-sm">
              GitHub에 대한 연결을 생성하는 방법에 대한 자세한 정보는 <a href="#" className="text-purple-600 hover:underline">온라인 도움말</a>을 참조하세요.
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
            className="px-4 py-2 bg-purple-600 text-white rounded-md opacity-50 cursor-not-allowed"
            disabled
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default GitHubCreateConnection;
