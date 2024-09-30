import React, { useState } from 'react';
import { ChevronDown, Lightbulb, EyeOff, Eye, AlertTriangle } from 'lucide-react';

const GitHubConnectionForm = ({ onClose, onSave }) => {
  const [connectionType, setConnectionType] = useState('');
  const [connectionName, setConnectionName] = useState('');
  const [token, setToken] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [error, setError] = useState('');
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [showClientSecret, setShowClientSecret] = useState(false);
  const [scopes, setScopes] = useState({
    repositories: false,
    repositoriesStatus: false,
    repositoriesDeployment: false,
    publicRepositories: false,
    repositoriesInvite: false,
    securityEvents: false,
    adminRepositoriesHook: false,
    writeRepositoriesHook: false,
    readRepositoriesHook: false,
    adminOrganization: false,
    writeOrganization: false,
    readOrganization: false,
    adminPublicKey: false,
    writePublicKey: false,
    readPublicKey: false,
    adminOrganizationHook: false,
    gist: false,
    notifications: false,
    user: false,
    readUser: false,
    userEmail: false,
    userFollow: false,
    project: false,
    readProject: false,
    deleteRepositories: false,
    writeDiscussion: false,
    readDiscussion: false,
    writePackages: false,
    readPackages: false,
    deletePackages: false,
    adminGpgKey: false,
    writeGpgKey: false,
    readGpgKey: false,
    codespace: false,
    workflow: false,
  });

  const handleSave = () => {
    if (!connectionType || !connectionName || (connectionType === 'github' && !token) || (connectionType === 'github_oauth' && (!clientId || !clientSecret))) {
      setError('값이 비어있으면 안 됩니다.');
      return;
    }
    onSave({ connectionType, connectionName, token, clientId, clientSecret, scopes });
  };

  const handleScopeChange = (scope) => {
    setScopes(prev => ({ ...prev, [scope]: !prev[scope] }));
  };

  const scopeTranslations = {
    repositories: '저장소',
    repositoriesStatus: '저장소 상태',
    repositoriesDeployment: '저장소 배포',
    publicRepositories: '공개 저장소',
    repositoriesInvite: '저장소 초대',
    securityEvents: '보안 이벤트',
    adminRepositoriesHook: '관리자 저장소 훅',
    writeRepositoriesHook: '저장소 훅 쓰기',
    readRepositoriesHook: '저장소 훅 읽기',
    adminOrganization: '조직 관리',
    writeOrganization: '조직 쓰기',
    readOrganization: '조직 읽기',
    adminPublicKey: '공개 키 관리',
    writePublicKey: '공개 키 쓰기',
    readPublicKey: '공개 키 읽기',
    adminOrganizationHook: '조직 훅 관리',
    gist: 'Gist',
    notifications: '알림',
    user: '사용자',
    readUser: '사용자 읽기',
    userEmail: '사용자 이메일',
    userFollow: '사용자 팔로우',
    project: '프로젝트',
    readProject: '프로젝트 읽기',
    deleteRepositories: '저장소 삭제',
    writeDiscussion: '토론 쓰기',
    readDiscussion: '토론 읽기',
    writePackages: '패키지 쓰기',
    readPackages: '패키지 읽기',
    deletePackages: '패키지 삭제',
    adminGpgKey: 'GPG 키 관리',
    writeGpgKey: 'GPG 키 쓰기',
    readGpgKey: 'GPG 키 읽기',
    codespace: '코드스페이스',
    workflow: '워크플로우',
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[32rem] flex flex-col">
        <div className="p-6 flex-1">
          <h2 className="text-lg font-semibold mb-4">GitHub 연결</h2>
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
                  <option value="github">GitHub</option>
                  <option value="github_oauth">깃허브(OAuth)</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

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
                placeholder="내 GitHub 연결"
              />
            </div>

            {connectionType === 'github' && (
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <ChevronDown size={16} className="mr-1" />
                  토큰
                </label>
                <div className="relative">
                  <input
                    type={showToken ? "text" : "password"}
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className="w-full p-2 border rounded-md pr-10"
                  />
                  <button
                    onClick={() => setShowToken(!showToken)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showToken ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                </div>
                <div className="flex items-start mt-1">
                  <Lightbulb className="text-yellow-400 mr-2 mt-1" size={16} />
                  <p className="text-xs text-gray-600">
                    <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">여기</a>에서 토큰을 생성해야 합니다.
                  </p>
                </div>
              </div>
            )}

            {connectionType === 'github_oauth' && (
              <>
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

                {showAdvancedSettings && (
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
                      />
                    </div>
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <ChevronDown size={16} className="mr-1" />
                        클라이언트 시크릿
                      </label>
                      <div className="relative">
                        <input
                          type={showClientSecret ? "text" : "password"}
                          value={clientSecret}
                          onChange={(e) => setClientSecret(e.target.value)}
                          className="w-full p-2 border rounded-md pr-10"
                        />
                        <button
                          onClick={() => setShowClientSecret(!showClientSecret)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        >
                          {showClientSecret ? <Eye size={20} /> : <EyeOff size={20} />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <ChevronDown size={16} className="mr-1" />
                        추가 스코프
                      </label>
                      <div className="space-y-2 max-h-60 overflow-y-auto border rounded-md p-2">
                        {Object.entries(scopes).map(([key, value]) => (
                          <div key={key} className="flex items-center">
                            <input
                              type="checkbox"
                              id={key}
                              checked={value}
                              onChange={() => handleScopeChange(key)}
                              className="mr-2"
                            />
                            <label htmlFor={key} className="text-sm text-gray-600">
                              {scopeTranslations[key] || key}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </>
            )}

            {error && (
              <div className="flex items-center text-red-500">
                <AlertTriangle className="mr-2" size={20} />
                <span>{error}</span>
              </div>
            )}
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
            disabled={!connectionType || !connectionName || (connectionType === 'github' && !token) || (connectionType === 'github_oauth' && (!clientId || !clientSecret))}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default GitHubConnectionForm;
