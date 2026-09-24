import { BRAND, PHONE, SERVICE_AREAS, SITE_URL, absUrl } from '@/lib/seo';
import { SERVICES } from '@/lib/services';

/**
 * llms.txt — 생성형 검색(AI 답변)이 사이트를 요약할 때 참고하는 평문 요약.
 * 사이트에 실제로 있는 내용만 담는다.
 */
export function GET() {
  const services = SERVICES.map(
    (s) => `- [${s.name}](${absUrl(s.path)}): ${s.short}. ${s.summary}`,
  ).join('\n');

  const body = `# ${BRAND} (HARAM)

> 예식장의 운영 파트너. 예식도우미(예식 컨시어지), 예식사회자, 축가, 웨딩 포토부스, 웨딩홀 마케팅, 예식 취합 프로그램을 한 팀이 운영합니다.

- 사업자: 하람 (대표 김영진, 사업자등록번호 412-21-01283)
- 소재지: 경기도 수원시 영통구
- 상담: ${PHONE.replace('+82-', '0')} (평일 10:00–18:00)
- 운영 지역: ${SERVICE_AREAS.join(', ')}
- 홈페이지: ${SITE_URL}

## 서비스

${services}

## 자주 묻는 질문의 핵심

- 예식 컨시어지는 예식장과 계약하는 B2B 서비스입니다. 개인(신랑신부) 단독 신청은 받지 않습니다.
- 예식사회자, 축가, 웨딩 포토부스는 신랑신부와 예식장 모두 신청할 수 있습니다.
- 예식도우미는 항공·호텔 등 서비스 계열 인력 중 자체 교육과 현장 실무 평가를 통과한 인원만 투입합니다.
- 제휴는 최소 3개월 단위 협업을 권장하며, 1회 체험 운영도 가능합니다.
- 가격은 홀 구성, 월간 예식 건수, 서비스 범위에 따라 상담으로 정합니다.

## 페이지

- [서비스 전체](${absUrl('/services')})
- [하람소개](${absUrl('/about')})
- [예식장 제휴 안내](${absUrl('/partnership')})
- [인재 채용](${absUrl('/careers')})
- [상담 문의](${absUrl('/contact')})
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
