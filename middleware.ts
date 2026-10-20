import { NextResponse, type NextRequest } from 'next/server';
import { SITES } from '@/lib/sites';

const HOST_TO_SLUG = new Map<string, string>();
for (const site of SITES) {
  HOST_TO_SLUG.set(site.host, site.slug);
  HOST_TO_SLUG.set(`${site.slug}.localhost`, site.slug); // 로컬 개발용
}

/** 서브도메인으로 들어온 요청을 /sites/<slug>/... 로 넘긴다. */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0].toLowerCase();
  const slug = host ? HOST_TO_SLUG.get(host) : undefined;
  if (!slug) return NextResponse.next();

  const { pathname, search } = request.nextUrl;

  // IndexNow 인증 키 파일은 호스트와 무관하게 public/ 의 파일을 그대로 내보낸다
  if (/^\/[0-9a-f]{32}\.txt$/.test(pathname)) return NextResponse.next();

  // 전용 사이트에는 본사 전용 경로를 노출하지 않는다
  if (pathname.startsWith('/sites/') || pathname.startsWith('/admin')) {
    return NextResponse.rewrite(new URL('/sites/not-found', request.url));
  }

  const url = request.nextUrl.clone();
  url.pathname = `/sites/${slug}${pathname === '/' ? '' : pathname}`;
  url.search = search;
  return NextResponse.rewrite(url);
}

export const config = {
  // 정적 파일과 API는 그대로 둔다
  // robots.txt·sitemap.xml 은 호스트마다 달라야 하므로 확장자 제외 규칙에서 빼둔다
  matcher: ['/((?!_next/|api/|favicon|.*\\.(?:png|jpe?g|webp|gif|svg|ico|js|css|woff2?|json)$).*)'],
};
