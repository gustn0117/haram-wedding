#!/usr/bin/env node
/**
 * 사이트맵을 읽어 모든 주소를 IndexNow로 색인 요청한다 (네이버 · Bing · 공용).
 * 사용: npm run indexnow            — 띄워져 있는 사이트 전부
 *      npm run indexnow photobooth — 특정 호스트만
 */
const KEY = '92b9cc8f8477aca2c3a5b97ff4a6ed30';
const HOSTS = [
  'haramevent.kr',
  'photobooth.haramevent.kr',
  'concierge.haramevent.kr',
  'host.haramevent.kr',
];
const ENDPOINTS = [
  ['네이버', 'https://searchadvisor.naver.com/indexnow'],
  ['IndexNow 공용', 'https://api.indexnow.org/indexnow'],
  ['Bing', 'https://www.bing.com/indexnow'],
];

const filter = process.argv[2];
const targets = filter ? HOSTS.filter((h) => h.includes(filter)) : HOSTS;
let failed = false;

for (const host of targets) {
  let urlList = [];
  try {
    const res = await fetch(`https://${host}/sitemap.xml`);
    if (!res.ok) throw new Error(`sitemap ${res.status}`);
    const xml = await res.text();
    urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  } catch (err) {
    console.log(`\n${host}: 건너뜀 (${err.message})`);
    continue;
  }
  if (urlList.length === 0) {
    console.log(`\n${host}: 주소 없음, 건너뜀`);
    continue;
  }

  const body = JSON.stringify({
    host,
    key: KEY,
    keyLocation: `https://${host}/${KEY}.txt`,
    urlList,
  });

  console.log(`\n${host} — ${urlList.length}개 주소`);
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
}

process.exit(failed ? 1 : 0);
