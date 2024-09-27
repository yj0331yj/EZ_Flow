import React, { useState } from 'react';
import { GitCommit, GitFork, Users, User, FileText, Search, Code, GitBranch, Tag, AlertCircle, GitPullRequest, File, Flag, UserPlus, Database, Eye } from 'lucide-react';
import GitHubConnectionPopup from './connection_form';

const GitHubFunctionsPopup = ({ onClose, onSelectFunction }) => {
  const [showConnectionPopup, setShowConnectionPopup] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState(null);

  const functions = [
    {
      name: "커밋 감시",
      description: "새 커밋이 생성되면 트리거됩니다.",
      icon: <GitCommit size={24} />
    },
    {
      name: "커밋 댓글 감시",
      description: "새 커밋 댓글이 생성되면 트리거됩니다.",
      icon: <GitCommit size={24} />
    },
    {
      name: "댓글 생성",
      description: "새 댓글을 생성합니다.",
      icon: <GitCommit size={24} />
    },
    {
      name: "댓글 업데이트",
      description: "기존 댓글을 업데이트합니다.",
      icon: <GitCommit size={24} />
    },
    {
      name: "댓글 가져오기",
      description: "기존 댓글을 검색합니다.",
      icon: <GitCommit size={24} />
    },
    {
      name: "댓글 검색",
      description: "댓글을 검색하거나 모두 나열합니다.",
      icon: <Search size={24} />
    },
    {
      name: "댓글 삭제",
      description: "기존 댓글을 삭제합니다.",
      icon: <GitCommit size={24} />
    },
    {
      name: "포크 감시",
      description: "새 포크가 생성되면 트리거됩니다.",
      icon: <GitFork size={24} />
    },
    {
      name: "조직 감시",
      description: "새 조직이 생성되면 트리거됩니다.",
      icon: <Users size={24} />
    },
    {
      name: "조직 가져오기",
      description: "기존 조직을 검색합니다.",
      icon: <Users size={24} />
    },
    {
      name: "조직 구성원 검색",
      description: "조직 구성원을 검색하거나 모두 나열합니다.",
      icon: <Search size={24} />
    },
    {
      name: "사용자 가져오기",
      description: "기존 사용자를 검색합니다.",
      icon: <User size={24} />
    },
    {
      name: "저장소 감시",
      description: "새 저장소가 생성되면 트리거됩니다.",
      icon: <Eye size={24} />
    },
    {
      name: "저장소 가져오기",
      description: "기존 저장소를 검색합니다.",
      icon: <FileText size={24} />
    },
    {
      name: "라벨 감시",
      description: "새 라벨이 생성되면 트리거됩니다.",
      icon: <Tag size={24} />
    },
    {
      name: "이슈 감시",
      description: "이슈가 생성되거나 업데이트되면 트리거됩니다.",
      icon: <AlertCircle size={24} />
    },
    {
      name: "이슈 생성",
      description: "새 이슈를 생성합니다.",
      icon: <AlertCircle size={24} />
    },
    {
      name: "이슈 업데이트",
      description: "기존 이슈를 업데이트합니다.",
      icon: <AlertCircle size={24} />
    },
    {
      name: "라벨 추가",
      description: "이슈나 풀 리퀘스트에 라벨을 추가합니다.",
      icon: <Tag size={24} />
    },
    {
      name: "이슈 가져오기",
      description: "기존 이슈를 검색합니다.",
      icon: <AlertCircle size={24} />
    },
    {
      name: "라벨 삭제",
      description: "이슈에서 라벨을 제거합니다.",
      icon: <Tag size={24} />
    },
    {
      name: "이슈 삭제",
      description: "기존 이슈를 삭제합니다.",
      icon: <AlertCircle size={24} />
    },
    {
      name: "풀 리퀘스트 감시",
      description: "풀 리퀘스트가 생성되거나 업데이트되면 트리거됩니다.",
      icon: <GitPullRequest size={24} />
    },
    {
      name: "풀 리퀘스트 가져오기",
      description: "기존 풀 리퀘스트를 검색합니다.",
      icon: <GitPullRequest size={24} />
    },
    {
      name: "풀 리퀘스트 검색",
      description: "풀 리퀘스트를 검색하거나 모두 나열합니다.",
      icon: <Search size={24} />
    },
    {
      name: "Gist 감시",
      description: "Gist가 생성되거나 업데이트되면 트리거됩니다.",
      icon: <File size={24} />
    },
    {
      name: "Gist 가져오기",
      description: "기존 Gist를 검색합니다.",
      icon: <File size={24} />
    },
    {
      name: "Gist 검색",
      description: "Gist를 검색하거나 모두 나열합니다.",
      icon: <Search size={24} />
    },
    {
      name: "마일스톤 감시",
      description: "마일스톤이 생성되거나 업데이트되면 트리거됩니다.",
      icon: <Flag size={24} />
    },
    {
      name: "마일스톤 가져오기",
      description: "기존 마일스톤을 검색합니다.",
      icon: <Flag size={24} />
    },
    {
      name: "마일스톤 검색",
      description: "마일스톤을 검색하거나 모두 나열합니다.",
      icon: <Search size={24} />
    },
    {
      name: "담당자 추가",
      description: "이슈나 풀 리퀘스트에 담당자를 추가합니다.",
      icon: <UserPlus size={24} />
    },
    {
      name: "담당자 가져오기",
      description: "기존 담당자를 검색합니다.",
      icon: <User size={24} />
    },
    {
      name: "담당자 검색",
      description: "담당자를 검색하거나 모두 나열합니다.",
      icon: <Search size={24} />
    },
    {
      name: "담당자 삭제",
      description: "이슈나 풀 리퀘스트에서 담당자를 제거합니다.",
      icon: <User size={24} />
    },
    {
      name: "브랜치 감시",
      description: "새 브랜치가 생성되면 트리거됩니다.",
      icon: <GitBranch size={24} />
    },
    {
      name: "브랜치 가져오기",
      description: "기존 브랜치를 검색합니다.",
      icon: <GitBranch size={24} />
    },
    {
      name: "브랜치 검색",
      description: "브랜치를 검색하거나 모두 나열합니다.",
      icon: <Search size={24} />
    },
    {
      name: "릴리스 감시",
      description: "새 릴리스가 생성되면 트리거됩니다.",
      icon: <Tag size={24} />
    },
    {
      name: "릴리스 가져오기",
      description: "기존 릴리스를 검색합니다.",
      icon: <Tag size={24} />
    },
    {
      name: "릴리스 검색",
      description: "릴리스를 검색하거나 모두 나열합니다.",
      icon: <Search size={24} />
    },
    {
      name: "GraphQL 쿼리 실행",
      description: "임의의 승인된 GraphQL 쿼리를 수행합니다.",
      icon: <Database size={24} />
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
    return <GitHubConnectionPopup onClose={() => setShowConnectionPopup(false)} onConfirm={handleConfirmConnection} />;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[32rem] max-h-[80vh] flex flex-col">
        <div className="p-6 flex-1 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">GitHub 기능 선택</h2>
          <div className="grid grid-cols-1 gap-4">
            {functions.map((func, index) => (
              <button
                key={index}
                className="p-4 border rounded-md hover:bg-gray-100 text-left flex items-center"
                onClick={() => handleFunctionSelect(func)}
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  {func.icon}
                </div>
                <div className="ml-4">
                  <div className="font-semibold">{func.name}</div>
                  <div className="text-sm text-gray-600">{func.description}</div>
                </div>
              </button>
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

export default GitHubFunctionsPopup;
