import React, { useState } from 'react';
import { MessageCircle, Search, FileText, List, PlusCircle, Edit, Trash, Hash, Archive, Repeat, ThumbsUp, Star, Bookmark, Pin, User, Bell, Activity, Terminal, Clock, Users, Settings } from 'lucide-react';
import SlackConnectionPopup from './connection_form';

const FunctionItem = ({ icon, name, description, isACID, isInstant, onSelect }) => (
  <button
    type="button"
    className="w-full p-4 border rounded-md hover:bg-gray-100 text-left flex items-center"
    onClick={() => onSelect({ name, description, icon, isACID, isInstant })}
  >
    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
      {icon}
    </div>
    <div className="ml-4 flex-grow">
      <div className="font-semibold flex items-center">
        {name}
        {isACID && (
          <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-purple-600 rounded">
            ACID
          </span>
        )}
        {isInstant && (
          <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded">
            INSTANT
          </span>
        )}
      </div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  </button>
);

const SlackFunctionsPopup = ({ onClose, onSelectFunction }) => {
  const [showConnectionPopup, setShowConnectionPopup] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState(null);
  
  const functions = [
    { name: "공개 채널 메시지 감시", description: "공개 채널에 새 메시지가 추가되면 트리거됩니다.", icon: <MessageCircle size={24} />, isACID: true },
    { name: "비공개 채널 메시지 감시", description: "비공개 채널에 새 메시지가 추가되면 트리거됩니다.", icon: <MessageCircle size={24} />, isACID: true },
    { name: "직접 메시지 감시", description: "직접 메시지 채널에 새 메시지가 추가되면 트리거됩니다.", icon: <MessageCircle size={24} />, isACID: true },
    { name: "멀티파티 직접 메시지 감시", description: "멀티파티 직접 메시지 채널에 새 메시지가 추가되면 트리거됩니다.", icon: <MessageCircle size={24} />, isACID: true },
    { name: "메시지 검색", description: "검색 쿼리와 일치하는 메시지를 반환합니다.", icon: <Search size={24} /> },
    { name: "비공개 채널 메시지 가져오기", description: "지정된 비공개 채널에서 주어진 ID의 메시지를 반환합니다.", icon: <FileText size={24} /> },
    { name: "공개 채널 메시지 가져오기", description: "지정된 공개 채널에서 주어진 ID의 메시지를 반환합니다.", icon: <FileText size={24} /> },
    { name: "답변 목록", description: "대화에 게시된 메시지 스레드를 검색합니다.", icon: <List size={24} /> },
    { name: "메시지 생성", description: "메시지를 생성합니다.", icon: <PlusCircle size={24} /> },
    { name: "메시지 업데이트", description: "메시지를 업데이트합니다.", icon: <Edit size={24} /> },
    { name: "메시지 삭제", description: "메시지를 제거합니다.", icon: <Trash size={24} /> },
    { name: "채널 생성", description: "채널을 생성합니다.", icon: <Hash size={24} /> },
    { name: "채널 아카이브", description: "채널을 아카이브합니다.", icon: <Archive size={24} /> },
    { name: "채널 아카이브 해제", description: "채널의 아카이브를 해제합니다.", icon: <Repeat size={24} /> },
    { name: "반응 목록", description: "사용자가 만든 반응을 반환합니다.", icon: <ThumbsUp size={24} /> },
    { name: "반응 추가", description: "항목에 반응을 추가합니다.", icon: <ThumbsUp size={24} /> },
    { name: "반응 제거", description: "반응을 제거합니다.", icon: <ThumbsUp size={24} /> },
    { name: "별표 추가", description: "채널에 별표를 추가합니다.", icon: <Star size={24} /> },
    { name: "별표 제거", description: "채널에서 별표를 제거합니다.", icon: <Star size={24} /> },
    { name: "항목 저장", description: "저장된 항목에 항목을 추가합니다.", icon: <Bookmark size={24} /> },
    { name: "저장된 항목 제거", description: "저장된 항목을 제거합니다.", icon: <Bookmark size={24} /> },
    { name: "메시지 고정", description: "채널에 메시지를 고정합니다.", icon: <Pin size={24} /> },
    { name: "메시지 고정 해제", description: "채널에서 메시지 고정을 해제합니다.", icon: <Pin size={24} /> },
    { name: "사용자 감시", description: "새 사용자가 추가되거나 기존 사용자가 변경될 때 트리거됩니다. 마지막 시나리오 실행 이후 최신 변경 사항만 표시합니다.", icon: <User size={24} />, isACID: true },
    { name: "사용자 검색", description: "등록된 이메일 주소로 단일 사용자를 검색합니다.", icon: <Search size={24} /> },
    { name: "사용자 목록", description: "워크스페이스의 모든 사용자 목록을 반환합니다.", icon: <List size={24} /> },
    { name: "사용자 정보 가져오기", description: "워크스페이스 멤버의 세부 정보를 반환합니다.", icon: <User size={24} /> },
    { name: "사용자 초대", description: "1-30명의 사용자를 공개 또는 비공개 채널에 초대합니다.", icon: <PlusCircle size={24} /> },
    { name: "사용자 추방", description: "채널에서 사용자를 제거합니다.", icon: <Trash size={24} /> },
    { name: "알림 목록", description: "특정 사용자가 생성했거나 받은 모든 알림을 나열합니다.", icon: <Bell size={24} /> },
    { name: "알림 가져오기", description: "알림에 대한 세부 정보를 반환합니다.", icon: <Bell size={24} /> },
    { name: "알림 생성", description: "알림을 생성합니다.", icon: <PlusCircle size={24} /> },
    { name: "알림 완료", description: "알림을 완료합니다.", icon: <Bell size={24} /> },
    { name: "알림 삭제", description: "알림을 제거합니다.", icon: <Trash size={24} /> },
    { name: "새 이벤트", description: "새 메시지나 기타 이벤트가 생성될 때 트리거됩니다.", icon: <Activity size={24} />, isACID: true, isInstant: true },
    { name: "상태 설정", description: "사용자의 현재 상태를 업데이트합니다.", icon: <Edit size={24} /> },
    { name: "API 호출 실행", description: "임의의 승인된 API 호출을 수행합니다.", icon: <Terminal size={24} /> },
    { name: "파일 감시", description: "새 파일이 추가될 때 트리거됩니다.", icon: <FileText size={24} />, isACID: true },
    { name: "파일 목록", description: "팀 내의 파일 목록을 반환합니다.", icon: <List size={24} /> },
    { name: "파일 가져오기", description: "파일에 대한 세부 정보를 반환합니다.", icon: <FileText size={24} /> },
    { name: "파일 다운로드", description: "파일을 다운로드합니다.", icon: <FileText size={24} /> },
    { name: "파일 업로드", description: "파일을 생성하거나 업로드합니다.", icon: <PlusCircle size={24} /> },
    { name: "텍스트 파일 생성", description: "텍스트 파일을 생성합니다.", icon: <FileText size={24} /> },
    { name: "파일 삭제", description: "파일을 삭제합니다.", icon: <Trash size={24} /> },
    { name: "채널 목록", description: "워크스페이스의 채널 목록을 반환합니다.", icon: <List size={24} /> },
    { name: "채널 가져오기", description: "채널에 대한 세부 정보를 반환합니다.", icon: <Hash size={24} /> },
    { name: "채널 멤버 목록", description: "채널의 멤버를 검색합니다.", icon: <Users size={24} /> },
    { name: "채널 주제 설정", description: "채널의 주제를 변경합니다.", icon: <Settings size={24} /> },
    { name: "채널 용도 설정", description: "채널의 용도를 변경합니다.", icon: <Settings size={24} /> },
    { name: "채널 참가", description: "기존 채널에 참가합니다.", icon: <PlusCircle size={24} /> },
    { name: "채널 나가기", description: "채널을 나갑니다.", icon: <Trash size={24} /> }
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
    return <SlackConnectionPopup onClose={() => setShowConnectionPopup(false)} onConfirm={handleConfirmConnection} />;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[32rem] max-h-[80vh] flex flex-col">
        <div className="p-6 flex-1 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Slack 기능 선택</h2>
          <div className="grid grid-cols-1 gap-4">
            {functions.map((func, index) => (
              <FunctionItem
                key={index}
                icon={func.icon}
                name={func.name}
                description={func.description}
                isACID={func.isACID}
                isInstant={func.isInstant}
                onSelect={handleFunctionSelect}
              />
            ))}
          </div>
        </div>
        <div className="p-6 border-t">
          <button
            type="button"
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

export default SlackFunctionsPopup;
