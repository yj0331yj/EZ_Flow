import React, { useState } from 'react';
import { Camera, Download, FileText, Album } from 'lucide-react';
import InstagramCreateConnection from './create_connection';

const FunctionItem = ({ icon, name, description, onSelect }) => (
  <button
    className="w-full p-4 border rounded-md hover:bg-gray-100 text-left flex items-center"
    onClick={() => onSelect({ name, description, icon })}
  >
    {icon}
    <div className="ml-4">
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  </button>
);

const InstagramFunctionsPopup = ({ onClose, onSelectFunction }) => {
  const [showConnectionPopup, setShowConnectionPopup] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState(null);

  const functions = [
    {
      name: "Watch Media",
      description: "새 미디어가 추가되면 트리거됩니다.",
      icon: <Camera size={24} />
    },
    {
      name: "Download Media",
      description: "미디어를 다운로드합니다.",
      icon: <Download size={24} />
    },
    {
      name: "Get Media",
      description: "미디어에 대한 세부 정보를 반환합니다.",
      icon: <FileText size={24} />
    },
    {
      name: "Get Album Media",
      description: "앨범의 모든 미디어 파일을 반환합니다.",
      icon: <Album size={24} />
    }
  ];

  const handleFunctionSelect = (func) => {
    setSelectedFunction(func);
    setShowConnectionPopup(true);
  };

  const handleConfirmConnection = (connectionData) => {
    onSelectFunction({ ...selectedFunction, connection: connectionData });
    onClose();
  };

  if (showConnectionPopup) {
    return <InstagramCreateConnection onClose={() => setShowConnectionPopup(false)} onSave={handleConfirmConnection} />;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[32rem] max-h-[80vh] flex flex-col">
        <div className="p-6 flex-1 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Instagram 기능 선택</h2>
          <div className="grid grid-cols-1 gap-4">
            {functions.map((func, index) => (
              <FunctionItem
                key={index}
                icon={func.icon}
                name={func.name}
                description={func.description}
                onSelect={() => handleFunctionSelect(func)}
              />
            ))}
          </div>
        </div>
        <div className="p-6 border-t">
          <button
            onClick={onClose}
            className="w-full py-2 bg-red-500 text-white rounded-md"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstagramFunctionsPopup;
