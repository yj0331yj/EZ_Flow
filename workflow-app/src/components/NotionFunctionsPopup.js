import React from 'react';
import { Database, FileText, Plus, Edit } from 'lucide-react';

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

const NotionFunctionsPopup = ({ onClose, onSelectFunction }) => {
  const functions = [
    {
      name: "데이터베이스 항목 가져오기",
      description: "지정된 데이터베이스 항목을 가져옵니다.",
      icon: <Database size={24} />
    },
    {
      name: "데이터베이스 항목 생성",
      description: "데이터베이스에 새 항목을 생성합니다.",
      icon: <Plus size={24} />
    },
    {
      name: "데이터베이스 항목 내용 추가",
      description: "새로운 데이터베이스 항목 내용을 추가합니다.",
      icon: <FileText size={24} />
    },
    {
      name: "데이터베이스 항목 업데이트",
      description: "기존 데이터베이스 항목을 업데이트합니다.",
      icon: <Edit size={24} />
    }
  ];

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[32rem] max-h-[80vh] flex flex-col">
        <div className="p-6 flex-1 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Notion 기능 선택</h2>
          <div className="grid grid-cols-1 gap-4">
            {functions.map((func, index) => (
              <FunctionItem
                key={index}
                icon={func.icon}
                name={func.name}
                description={func.description}
                onSelect={() => onSelectFunction(func)}
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

export default NotionFunctionsPopup;
