#!/usr/bin/env node
/**
 * 사이트맵의 모든 주소를 IndexNow로 색인 요청한다 (네이버 · Bing · 공용).
 * 사용: npm run indexnow
 */
const HOST = 'haramevent.kr';
const KEY = '92b9cc8f8477aca2c3a5b97ff4a6ed30';
const ENDPOINTS = [
  ['네이버', 'https://searchadvisor.naver.com/indexnow'],
  ['IndexNow 공용', 'https://api.indexnow.org/indexnow'],
  ['Bing', 'https://www.bing.com/indexnow'],
];

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error('사이트맵에서 주소를 찾지 못했습니다.');
  process.exit(1);
}

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList,
});

console.log(`${urlList.length}개 주소 색인 요청`);
let failed = false;
for (const [name, endpoint] of ENDPOINTS) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  });
  const ok = res.status === 200 || res.status === 202;
  if (!ok) failed = true;
  console.log(`  ${name}: ${res.status}${ok ? '' : ' — 실패'}`);
}
process.exit(failed ? 1 : 0);
