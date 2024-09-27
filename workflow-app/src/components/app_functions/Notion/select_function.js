import React, { useState } from 'react';
import { Search, Database, FileText, Plus, Edit, List, User, Globe } from 'lucide-react';
import NotionConnectionPopup from './connection_form';

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
  const [showConnectionPopup, setShowConnectionPopup] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState(null);

  const functions = [
    {
      name: "객체 검색",
      description: "페이지, 데이터베이스 또는 데이터베이스 항목의 객체를 검색합니다.",
      icon: <Search size={24} />
    },
    {
      name: "데이터베이스 가져오기",
      description: "지정된 데이터베이스를 가져옵니다.",
      icon: <Database size={24} />
    },
    {
      name: "페이지 가져오기",
      description: "지정된 페이지를 가져옵니다.",
      icon: <FileText size={24} />
    },
    {
      name: "데이터베이스 생성",
      description: "지정된 페이지에 새 데이터베이스를 하위 페이지로 생성합니다.",
      icon: <Plus size={24} />
    },
    {
      name: "페이지 생성",
      description: "지정된 페이지에 새 페이지를 생성합니다.",
      icon: <Plus size={24} />
    },
    {
      name: "데이터베이스 업데이트",
      description: "기존 데이터베이스를 업데이트합니다.",
      icon: <Edit size={24} />
    },
    {
      name: "페이지 업데이트",
      description: "기존 페이지를 업데이트합니다.",
      icon: <Edit size={24} />
    },
    {
      name: "페이지 콘텐츠 나열",
      description: "페이지 콘텐츠 목록을 검색합니다.",
      icon: <List size={24} />
    },
    {
      name: "페이지 속성 항목 나열",
      description: "페이지 속성 항목의 목록을 검색합니다. 가능한 속성 유형은 제목, 텍스트, 관계 및 사람입니다.",
      icon: <List size={24} />
    },
    {
      name: "페이지 콘텐츠 가져오기",
      description: "지정된 페이지 콘텐츠/블록을 가져옵니다.",
      icon: <FileText size={24} />
    },
    {
      name: "페이지 콘텐츠 추가",
      description: "새 페이지 콘텐츠를 추가합니다.",
      icon: <Plus size={24} />
    },
    {
      name: "페이지 콘텐츠 업데이트",
      description: "기존 페이지 콘텐츠/블록을 업데이트합니다.",
      icon: <Edit size={24} />
    },
    {
      name: "페이지 콘텐츠 삭제",
      description: "페이지 콘텐츠/블록을 보관 처리합니다.",
      icon: <FileText size={24} />
    },
    {
      name: "API 호출 실행",
      description: "임의의 승인된 API 호출을 수행합니다.",
      icon: <Globe size={24} />
    },
    {
      name: "사용자 나열",
      description: "사용자 목록을 검색합니다.",
      icon: <User size={24} />
    }
  ];

  const handleFunctionSelect = (func) => {
    setSelectedFunction(func);
    setShowConnectionPopup(true);
  };

  const handleConfirmConnection = () => {
    onSelectFunction(selectedFunction);
    onClose();
  };

  if (showConnectionPopup) {
    return <NotionConnectionPopup onClose={() => setShowConnectionPopup(false)} onConfirm={handleConfirmConnection} />;
  }

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

export default NotionFunctionsPopup;
