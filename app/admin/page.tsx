'use client';

import { useState, useEffect, useCallback } from 'react';

interface Inquiry {
  id: number;
  name: string;
  phone: string;
  service: string | null;
  wedding_date: string | null;
  email: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}

const serviceLabels: Record<string, string> = {
  concierge: '컨시어지',
  photobooth: '포토부스',
  host: '전문사회',
  package: '패키지',
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    const res = await fetch('/api/admin', {
      headers: { 'x-admin-password': password },
    });
    if (res.ok) {
      const data = await res.json();
      setInquiries(data);
    }
    setLoading(false);
  }, [password]);

  const handleLogin = async () => {
    const res = await fetch('/api/admin', {
      headers: { 'x-admin-password': password },
    });
    if (res.ok) {
      setAuthed(true);
      const data = await res.json();
      setInquiries(data);
    } else {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  const toggleRead = async (inquiry: Inquiry) => {
    await fetch('/api/admin', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-password': password,
      },
      body: JSON.stringify({ id: inquiry.id, is_read: !inquiry.is_read }),
    });
    fetchInquiries();
  };

  const deleteInquiry = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    await fetch(`/api/admin?id=${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-password': password },
    });
    setSelected(null);
    fetchInquiries();
  };

  useEffect(() => {
    if (authed) {
      const interval = setInterval(fetchInquiries, 30000);
      return () => clearInterval(interval);
    }
  }, [authed, fetchInquiries]);

  const filtered = inquiries.filter((i) => {
    if (filter === 'unread') return !i.is_read;
    if (filter === 'read') return i.is_read;
    return true;
  });

  const unreadCount = inquiries.filter((i) => !i.is_read).length;

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-10">
            <p className="heading-en text-[40px] text-[#1a1a1a] tracking-[0.12em]">HARAM</p>
            <p className="text-[12px] text-gray-400 mt-2 tracking-wide">Admin Console</p>
          </div>
          <div className="bg-white p-8 border border-gray-200">
            <label className="block text-[11px] text-gray-500 mb-2">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-100 text-[14px] focus:outline-none focus:border-[#b89d6a]/40 mb-6"
              placeholder="비밀번호를 입력하세요"
              autoFocus
            />
            <button
              onClick={handleLogin}
              className="w-full py-3 bg-[#1a1a1a] text-white text-[13px] hover:bg-[#b89d6a] transition-colors"
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <p className="heading-en text-[22px] text-[#1a1a1a] tracking-[0.1em]">HARAM</p>
            <span className="text-[11px] text-gray-400 border-l border-gray-200 pl-6">문의 관리</span>
          </div>
          <div className="flex items-center gap-4">
            {unreadCount > 0 && (
              <span className="px-3 py-1 bg-[#b89d6a] text-white text-[11px] rounded-full">
                {unreadCount}건 미확인
              </span>
            )}
            <button
              onClick={() => { setAuthed(false); setPassword(''); setInquiries([]); }}
              className="text-[12px] text-gray-400 hover:text-gray-600 transition-colors"
            >
              로그아웃
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filter tabs */}
        <div className="flex items-center gap-1 mb-6">
          {([
            ['all', `전체 (${inquiries.length})`],
            ['unread', `미확인 (${unreadCount})`],
            ['read', `확인완료 (${inquiries.length - unreadCount})`],
          ] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 text-[12px] transition-colors ${
                filter === key
                  ? 'bg-[#1a1a1a] text-white'
                  : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={fetchInquiries}
            className="ml-auto px-4 py-2 text-[12px] bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M2 8a6 6 0 0110.89-3.48M14 8a6 6 0 01-10.89 3.48" strokeLinecap="round" />
              <path d="M14 2v4h-4M2 14v-4h4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            새로고침
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* List */}
          <div className="lg:col-span-1 space-y-2">
            {loading && <p className="text-[13px] text-gray-400 py-8 text-center">불러오는 중...</p>}
            {!loading && filtered.length === 0 && (
              <p className="text-[13px] text-gray-400 py-8 text-center">문의가 없습니다.</p>
            )}
            {filtered.map((inq) => (
              <button
                key={inq.id}
                onClick={() => setSelected(inq)}
                className={`w-full text-left p-5 border transition-all ${
                  selected?.id === inq.id
                    ? 'border-[#b89d6a] bg-white shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {!inq.is_read && (
                      <span className="w-2 h-2 bg-[#b89d6a] rounded-full shrink-0" />
                    )}
                    <span className="text-[14px] font-normal">{inq.name}</span>
                  </div>
                  <span className="text-[10px] text-gray-300">
                    {new Date(inq.created_at).toLocaleDateString('ko-KR')}
                  </span>
                </div>
                <p className="text-[12px] text-gray-400 truncate">{inq.message}</p>
                <div className="flex items-center gap-2 mt-2">
                  {inq.service && (
                    <span className="text-[10px] px-2 py-0.5 bg-[#FAF8F5] text-[#b89d6a]">
                      {serviceLabels[inq.service] || inq.service}
                    </span>
                  )}
                  <span className="text-[10px] text-gray-300">{inq.phone}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="lg:col-span-2">
            {selected ? (
              <div className="bg-white border border-gray-200 p-8">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h2 className="text-[22px] font-light">{selected.name}</h2>
                    <p className="text-[12px] text-gray-400 mt-1">
                      {new Date(selected.created_at).toLocaleString('ko-KR')}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleRead(selected)}
                      className={`px-4 py-2 text-[11px] border transition-colors ${
                        selected.is_read
                          ? 'border-gray-200 text-gray-400 hover:bg-gray-50'
                          : 'border-[#b89d6a] text-[#b89d6a] hover:bg-[#b89d6a]/5'
                      }`}
                    >
                      {selected.is_read ? '미확인으로 변경' : '확인 완료'}
                    </button>
                    <button
                      onClick={() => deleteInquiry(selected.id)}
                      className="px-4 py-2 text-[11px] border border-red-200 text-red-400 hover:bg-red-50 transition-colors"
                    >
                      삭제
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-5 bg-[#FAF8F5]">
                  <div>
                    <p className="text-[10px] text-gray-400 mb-1">전화번호</p>
                    <p className="text-[13px]">{selected.phone}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 mb-1">서비스</p>
                    <p className="text-[13px]">
                      {selected.service ? serviceLabels[selected.service] || selected.service : '-'}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 mb-1">예식일</p>
                    <p className="text-[13px]">{selected.wedding_date || '-'}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 mb-1">이메일</p>
                    <p className="text-[13px]">{selected.email || '-'}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-gray-400 mb-3">메시지</p>
                  <p className="text-[14px] text-gray-600 leading-[2] whitespace-pre-wrap">
                    {selected.message}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex gap-3">
                  <a
                    href={`tel:${selected.phone}`}
                    className="px-5 py-3 bg-[#1a1a1a] text-white text-[12px] hover:bg-[#b89d6a] transition-colors inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.35 1.9.68 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.56 2.81.68a2 2 0 011.72 2.03z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    전화 걸기
                  </a>
                  {selected.email && (
                    <a
                      href={`mailto:${selected.email}`}
                      className="px-5 py-3 border border-gray-200 text-[12px] text-gray-600 hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 7l-10 6L2 7" />
                      </svg>
                      이메일 보내기
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 p-8 flex items-center justify-center min-h-[400px]">
                <p className="text-[13px] text-gray-300">좌측에서 문의를 선택하세요</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
