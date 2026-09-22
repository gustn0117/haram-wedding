// 하람 서비스 정의 — 견적서(HRM·26·005) 기준, 가격 제외

export type ServiceSlug = 'concierge' | 'host' | 'vocal' | 'photobooth' | 'marketing' | 'program';

export type Fact = { label: string; value: string; note: string };
export type Step = { when: string; what: string };
export type Bar = { label: string; value: number };

export type Service = {
  slug: ServiceSlug;
  path: string;
  name: string;
  /** 메뉴·카드에 쓰는 한 줄 설명 */
  short: string;
  /** 누구를 위한 서비스인지 */
  audience: '예식장' | '신랑신부 · 예식장';
  quote: string;
  summary: string;
  facts: Fact[];
  included: string[];
  flow: Step[];
  /** 서비스별 고유 블록 */
  pipeline?: { title: string; desc: string }[];
  metrics?: { title: string; note: string; unit: string; max: number; rows: Bar[] };
  options?: { name: string; desc: string }[];
  funnel?: { stage: string; work: string }[];
  ledger?: { time: string; hall: string; staff: string; state: '완료' | '진행' | '대기' }[];
  image: string;
  imageSrc: string;
  heroImageSrc: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'concierge',
    path: '/concierge',
    name: '예식 컨시어지',
    short: '예식도우미가 현장 운영 전체를 맡습니다',
    audience: '예식장',
    quote: '예식장의 하루를, 하나의 흐름으로.',
    summary:
      '예식장의 현장 운영을 통째로 맡는 하람의 기본 서비스, 예도(예식도우미)입니다. 항공·호텔 등 서비스 계열 지망생과 경험자로 구성된 인력을 제공하며, 자체 교육 과정을 이수한 인력만 현장에 투입합니다. 웨딩홀 전용 관리 프로그램을 함께 제공하고, 예식장 직원도 전용 계정으로 운영 현황을 직접 볼 수 있습니다.',
    facts: [
      { label: '인력', value: '교육 이수자만', note: '자체 교육 과정 통과 인력' },
      { label: '프로그램', value: '전용 계정', note: '예식장 직원도 운영 현황 열람' },
      { label: '운영 범위', value: '하객 안내부터 퇴장까지', note: '예식 현장 전 과정' },
      { label: '편성', value: '홀·회차 맞춤', note: '홀 구성 기준 인력 편성' },
    ],
    pipeline: [
      { title: '인력 제공', desc: '항공·호텔 등 서비스 계열 지망생과 경험자' },
      { title: '교육', desc: '예식 운영 매뉴얼과 응대 표준 교육 과정' },
      { title: '평가', desc: '현장 실무 평가를 통과한 인력만 투입 대상으로 등록' },
      { title: '배치', desc: '홀 구성과 회차에 맞춰 편성해 투입' },
    ],
    included: [
      '항공·호텔 등 서비스 계열 인력 제공',
      '자체 교육 과정 이수자만 현장 투입',
      '예식 현장 매니지먼트 (하객 안내부터 퇴장까지)',
      '웨딩홀 전용 관리 프로그램 제공',
      '예식장 직원 전용 계정 지급, 운영 현황 열람',
    ],
    flow: [
      { when: '1단계', what: '홀 구성과 회차 파악, 인력 편성 협의' },
      { when: '2단계', what: '교육 이수 인력 배정, 운영 매뉴얼 세팅' },
      { when: '3단계', what: '관리 프로그램 개설, 전용 계정 지급' },
      { when: '예식 당일', what: '현장 전체 운영, 종료 후 디브리프' },
    ],
    image: '예식장 안내 데스크와 운영 체크리스트',
    imageSrc: '/images/editorial-2026/concierge-desk.png',
    heroImageSrc: '/images/editorial-2026/concierge-desk.png',
  },
  {
    slug: 'host',
    path: '/host',
    name: '예식사회자',
    short: '대본부터 본식까지 흐름을 잇는 전문사회자',
    audience: '신랑신부 · 예식장',
    quote: '예식의 흐름을 만드는, 한 사람의 목소리.',
    summary:
      '결혼식의 시작과 끝을 잇는 전문사회자입니다. 신랑신부, 양가와 톤앤매너를 비대면으로 계속 협의하며 대본을 다듬습니다. 큐 시트에 맞춘 멘트로 흐름이 끊기지 않고, 음향팀·식순·입장 큐와 1초 단위로 맞물려 진행합니다.',
    facts: [
      { label: '인원', value: '1인', note: '전문사회자 단독 진행' },
      { label: '진행 범위', value: '전 식', note: '입장부터 퇴장까지' },
      { label: '대본 협의', value: '횟수 제한 없음', note: '비대면으로 계속 협의' },
      { label: '음향 연동', value: '큐 시트 동기화', note: '음향팀과 1초 단위 정합' },
    ],
    metrics: {
      title: '진행 품질 지표',
      note: '누적 200건 평균, 100점 만점',
      unit: '점',
      max: 100,
      rows: [
        { label: '식순 진행 정확도', value: 96 },
        { label: '큐 동기화 정합', value: 98 },
        { label: '응대 매너 평가', value: 94 },
        { label: '즉흥 대응 만족도', value: 91 },
        { label: '고객 평균 평점', value: 95 },
      ],
    },
    included: [
      '대본 작성과 비대면 협의 (횟수 제한 없음)',
      '예식 시나리오 작성, 멘트 정리',
      '본식 진행 (입장부터 퇴장까지)',
      '큐 시트 기반 음향팀 동기화',
      '행사 종료 직후 1차 디브리프',
    ],
    flow: [
      { when: 'D-14부터', what: '대본 작성, 비대면 협의 시작' },
      { when: 'D-7', what: '최종 시나리오 확정' },
      { when: 'D-3', what: '큐 시트를 음향팀과 맞춤' },
      { when: '예식 당일', what: '본식 진행, 종료 직후 디브리프' },
    ],
    image: '웨딩홀 마이크와 사회자 큐시트',
    imageSrc: '/images/editorial-2026/host-vocal.png',
    heroImageSrc: '/images/editorial-2026/host-vocal.png',
  },
  {
    slug: 'vocal',
    path: '/vocal',
    name: '축가',
    short: '보컬리스트가 부르는 라이브 축가',
    audience: '신랑신부 · 예식장',
    quote: '두 사람을 위한, 단 한 곡의 무게.',
    summary:
      '라이브로 직접 부르는 축가는 영상 재생과 전혀 다른 무게를 가집니다. 가창력 있는 보컬리스트가 신랑신부와 곡목, 키, 분위기를 미리 협의해 가장 알맞은 순간에 노래를 헌정합니다. 음향팀과의 사운드 체크까지 함께 운영합니다.',
    facts: [
      { label: '인원', value: '1인', note: '보컬리스트' },
      { label: '곡 수', value: '1~2곡', note: '세트당' },
      { label: '편곡', value: '키·편곡 협의', note: '신랑신부와 사전 결정' },
      { label: '반주', value: 'MR·AR·라이브', note: '반주 방식 선택' },
    ],
    metrics: {
      title: '장르별 구성 비율',
      note: '누적 200곡 기준',
      unit: '%',
      max: 40,
      rows: [
        { label: '팝 발라드', value: 38 },
        { label: '케이팝', value: 22 },
        { label: '드라마 OST', value: 20 },
        { label: '클래식', value: 12 },
        { label: '신청곡', value: 8 },
      ],
    },
    included: [
      '곡목 사전 협의 (1~2곡)',
      '키 조정, 편곡 협의',
      'MR·AR 준비 또는 라이브 반주 협업',
      '본식 라이브 공연',
      '음향팀과의 사운드 체크',
    ],
    flow: [
      { when: 'D-14', what: '곡목 협의, 분위기 결정' },
      { when: 'D-7', what: '키와 편곡 확정' },
      { when: 'D-1', what: '사운드 체크, 리허설' },
      { when: '예식 당일', what: '본식 라이브 공연' },
    ],
    image: '웨딩홀 무대와 공연용 마이크',
    imageSrc: '/images/editorial-2026/host-vocal.png',
    heroImageSrc: '/images/editorial-2026/host-vocal.png',
  },
  {
    slug: 'photobooth',
    path: '/photobooth',
    name: '웨딩 포토부스',
    short: '하객이 찍고 바로 가져가는 즉석 인화',
    audience: '신랑신부 · 예식장',
    quote: '식이 끝나도 손에 남는, 그날의 한 장.',
    summary:
      '하객이 직접 찍고 즉석에서 인화해 가져가는 웨딩 포토부스입니다. 운영 스태프가 현장에 상주해 촬영 안내부터 인화, 소모품 관리까지 맡습니다. 건당 운영과 월 대여 중 예식장 사정에 맞는 방식을 고를 수 있습니다.',
    facts: [
      { label: '스태프', value: '1인 상주', note: '1인 추가 선택 가능' },
      { label: '인화', value: '즉석 인화', note: '소모품 전량 포함' },
      { label: '데이터', value: '클라우드 백업', note: '촬영 데이터 보관' },
      { label: '운영 방식', value: '건당·월 대여', note: '주말 정기 운영 가능' },
    ],
    options: [
      { name: '건당 운영 · 스태프 1인', desc: '예식 한 건 단위로 장비와 스태프 1인이 운영합니다.' },
      { name: '건당 운영 · 스태프 2인', desc: '하객이 많은 예식에 스태프 1인을 추가합니다.' },
      { name: '월 대여', desc: '예식장에 장비를 두고 주말 정기 운영합니다. 정기 점검과 매뉴얼 인계가 포함됩니다.' },
    ],
    included: [
      '포토부스 장비 일괄 세팅과 철수',
      '운영 스태프 상주 (기본 1인, 추가 1인 선택)',
      '즉석 인화, 소모품 전량 포함',
      '데이터 백업, 클라우드 저장',
      '월 대여 시 정기 점검과 매뉴얼 인계',
    ],
    flow: [
      { when: '1단계', what: '운영 방식 선택 (건당 또는 월 대여)' },
      { when: '2단계', what: '장비 세팅, 운영 가이드 인계' },
      { when: '예식 당일', what: '스태프 상주 운영, 즉석 인화' },
      { when: '매월', what: '정기 점검, 데이터 백업, 정산' },
    ],
    image: '웨딩 포토부스와 즉석 인화 사진',
    imageSrc: '/images/editorial-2026/photobooth.png',
    heroImageSrc: '/images/editorial-2026/photobooth.png',
  },
  {
    slug: 'marketing',
    path: '/marketing',
    name: '웨딩홀 마케팅',
    short: '예약률을 올리는 월 단위 마케팅 운영',
    audience: '예식장',
    quote: '홀을 채우는 일까지, 운영의 일부로.',
    summary:
      '예식장의 예약률을 직접 끌어올리는 월 단위 마케팅 운영입니다. 콘텐츠 제작부터 채널 운영, 문의 응대 동선 설계까지 한 번에 맡아 상담 유입을 만듭니다. 예식 컨시어지와 함께 진행할 수도, 마케팅만 따로 진행할 수도 있습니다.',
    facts: [
      { label: '계약 단위', value: '월 단위', note: '매월 상시 운영' },
      { label: '콘텐츠', value: '기획·제작', note: '웨딩홀 콘텐츠 정기 업로드' },
      { label: '광고', value: '집행·예산 관리', note: '채널별 광고 운영' },
      { label: '리포트', value: '월간 성과', note: '다음 달 운영안 제안' },
    ],
    funnel: [
      { stage: '콘텐츠 노출', work: '홀 콘텐츠 제작, 정기 업로드' },
      { stage: '관심·조회', work: '채널 운영, 광고 집행' },
      { stage: '문의 접수', work: '문의 응대 동선 설계' },
      { stage: '상담 예약', work: '상담 전환 점검, 응대 스크립트' },
      { stage: '계약', work: '월간 리포트, 다음 달 운영안' },
    ],
    included: [
      '웨딩홀 콘텐츠 기획과 제작',
      '채널 운영, 정기 업로드',
      '광고 집행, 예산 운용 관리',
      '문의 응대 동선 설계, 상담 전환 점검',
      '월간 성과 리포트, 다음 달 운영안 제안',
    ],
    flow: [
      { when: '1주차', what: '홀 현황 진단, 타깃과 메시지 설계' },
      { when: '2주차', what: '콘텐츠 제작, 채널 세팅' },
      { when: '매월', what: '정기 업로드, 광고 집행, 문의 응대' },
      { when: '월말', what: '성과 리포트, 다음 달 운영안 확정' },
    ],
    image: '플라워 장식이 놓인 웨딩홀 전경',
    imageSrc: '/images/editorial-2026/intro-vertical.png',
    heroImageSrc: '/images/editorial-2026/home-hero.png',
  },
  {
    slug: 'program',
    path: '/program',
    name: '예식 취합 프로그램',
    short: '흩어진 예식 정보를 한 화면에서 관리',
    audience: '예식장',
    quote: '흩어진 예식 정보를, 한 화면으로.',
    summary:
      '예약, 식순, 담당 스태프, 협력 업체 정보가 서로 다른 곳에 흩어져 있으면 회차가 몰리는 주말에 누락이 생깁니다. 예식 취합 프로그램은 예식장이 관리하는 모든 예식 정보를 한 화면에 모아, 담당자가 바뀌어도 같은 기준으로 운영되게 합니다.',
    facts: [
      { label: '홀 수', value: '제한 없음', note: '홀 개수와 무관' },
      { label: '계약 단위', value: '월 단위', note: '매월 상시 운영' },
      { label: '큐 시트', value: '디지털 작성·공유', note: '식순과 큐 시트 온라인 관리' },
      { label: '데이터', value: '백업·기록 조회', note: '기간별 운영 기록' },
    ],
    ledger: [
      { time: '11:00', hall: '그랜드홀', staff: '김 · 이', state: '완료' },
      { time: '13:00', hall: '그랜드홀', staff: '김 · 박', state: '진행' },
      { time: '13:30', hall: '채플홀', staff: '정 · 최', state: '진행' },
      { time: '15:00', hall: '그랜드홀', staff: '김 · 이', state: '대기' },
      { time: '15:30', hall: '채플홀', staff: '정 · 한', state: '대기' },
    ],
    included: [
      '예식 일정과 회차 통합 관리',
      '식순·큐 시트 디지털 작성과 공유',
      '담당 스태프와 협력 업체 배정 관리',
      '회차별 진행 현황 실시간 확인',
      '데이터 백업, 기간별 운영 기록 조회',
    ],
    flow: [
      { when: '1단계', what: '계정 개설, 홀 정보 등록' },
      { when: '2단계', what: '기존 예약 데이터 이관' },
      { when: '3단계', what: '담당자 교육, 운영 기준 세팅' },
      { when: '매월', what: '상시 운영, 데이터 백업' },
    ],
    image: '예식 운영 서류와 체크리스트',
    imageSrc: '/images/editorial-2026/operations.png',
    heroImageSrc: '/images/editorial-2026/operations.png',
  },
];

export const serviceBySlug = (slug: ServiceSlug) => SERVICES.find((s) => s.slug === slug)!;
