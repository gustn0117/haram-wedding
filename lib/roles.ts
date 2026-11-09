// 채용 공고 — 화면과 구인 구조화 데이터가 같은 내용을 쓴다.
export type Role = {
  title: string;
  description: string;
  tasks: string[];
  imageSrc: string;
};

export const ROLES: Role[] = [
  {
    title: '예식도우미 (컨시어지 매니저)',
    description:
      '제휴 예식장에서 하객 안내, 축의금 접수대, 신부대기실, 식순 진행을 담당합니다. 자체 교육 과정과 현장 실무 평가를 거쳐 배치되며, 근무 지역과 요일은 상담에서 조율합니다.',
    tasks: ['하객 동선 안내와 접수대 운영', '신부대기실과 양가 부모님 의전', '식순 타임라인 확인과 업체 소통'],
    imageSrc: '/images/editorial-2026/concierge-desk.webp',
  },
  {
    title: '웨딩 포토부스 스태프',
    description:
      '포토부스 장비 설치와 철수, 하객 촬영 안내, 즉석 인화와 소모품 관리를 담당합니다. 장비 사용법은 교육 과정에서 익힙니다.',
    tasks: ['부스 설치와 장비 점검', '하객 촬영 안내와 소품 관리', '인화물과 디지털 파일 관리'],
    imageSrc: '/images/editorial-2026/photobooth.webp',
  },
  {
    title: '예식사회자',
    description:
      '신랑신부와 비대면으로 대본을 협의하고, 큐 시트에 맞춰 입장부터 퇴장까지 본식을 진행합니다. 음향팀과 큐를 맞추는 사전 작업이 포함됩니다.',
    tasks: ['대본 작성과 비대면 협의', '큐 시트 기반 음향팀 동기화', '입장부터 퇴장까지 본식 진행'],
    imageSrc: '/images/editorial-2026/host-vocal.webp',
  },
  {
    title: '축가 보컬리스트',
    description:
      '신랑신부와 곡목과 키를 협의하고 본식에서 라이브 축가를 부릅니다. 예식 전날 음향팀과 사운드 체크를 함께 진행합니다.',
    tasks: ['곡목, 키, 편곡 사전 협의', '음향팀과 사운드 체크', '본식 라이브 공연'],
    imageSrc: '/images/editorial-2026/host-vocal.webp',
  },
];

export const ROLE_POSTINGS = ROLES.map((r) => ({ title: r.title, description: r.description }));
