import {
  PROGRAM_ENVIRONMENT,
  PROGRAM_MENU,
  PROGRAM_ROLES,
  PROGRAM_ROLE_RULES,
  PROGRAM_SECURITY,
  PROGRAM_STAGES,
  PROGRAM_STAGE_NOTE,
  PROGRAM_SURFACES,
} from '@/lib/program';

function Wrap({ children, tone = 'white' }: { children: React.ReactNode; tone?: 'white' | 'mist' }) {
  return (
    <section className={tone === 'mist' ? 'bg-mist' : 'bg-white'}>
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">{children}</div>
    </section>
  );
}

function H2({ children, note }: { children: React.ReactNode; note?: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 mb-8 md:mb-10">
      <h2 className="text-[24px] md:text-[30px] font-bold tracking-[-0.03em] text-ink">{children}</h2>
      {note && <p className="text-[14px] text-ink/45">{note}</p>}
    </div>
  );
}

/** 라벨 + 설명 한 줄 */
function SpecRow({ label, text }: { label: string; text: string }) {
  return (
    <div className="grid sm:grid-cols-[108px_1fr] gap-x-5 gap-y-1 py-4 border-b border-line">
      <dt className="text-[13px] font-semibold text-ink/45 pt-0.5">{label}</dt>
      <dd className="text-[15px] leading-[1.7] text-ink/75 break-keep">{text}</dd>
    </div>
  );
}

/** 예식 한 건이 거치는 7단계 */
export function ProgramStages() {
  return (
    <Wrap tone="mist">
      <H2 note="직원이 예식을 등록하는 순간 시작합니다">예식 한 건의 흐름</H2>

      <div className="border-t-2 border-ink">
        <div className="hidden md:grid grid-cols-[168px_1fr_1fr] gap-x-8 py-3 border-b border-line text-[13px] font-semibold text-ink/45">
          <p>단계</p>
          <p>직원</p>
          <p>신랑신부</p>
        </div>

        <ol>
          {PROGRAM_STAGES.map((s) => (
            <li
              key={s.no}
              className="grid md:grid-cols-[168px_1fr_1fr] gap-x-8 gap-y-3 py-5 md:py-6 border-b border-line"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-[13px] font-bold text-brand-deep tabular-nums">{s.no}</span>
                <h3 className="text-[17px] md:text-[18px] font-bold tracking-[-0.02em] text-ink">{s.name}</h3>
              </div>

              <div>
                <p className="md:hidden mb-1 text-[12px] font-semibold text-ink/40">직원</p>
                <p className="text-[15px] leading-[1.7] text-ink/75 break-keep">{s.staff}</p>
              </div>

              <div>
                <p className="md:hidden mb-1 text-[12px] font-semibold text-ink/40">신랑신부</p>
                {s.couple ? (
                  <p className="text-[15px] leading-[1.7] text-ink/75 break-keep">{s.couple}</p>
                ) : (
                  <p className="text-[15px] leading-[1.7] text-ink/35">할 일 없음</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-6 max-w-[760px] text-[14px] leading-[1.75] text-ink/50 break-keep">{PROGRAM_STAGE_NOTE}</p>
    </Wrap>
  );
}

/** 두 화면 + 메뉴 구성 + 역할 */
export function ProgramWorkspace() {
  return (
    <Wrap>
      <H2 note="권한에 따라 보이는 메뉴만 나옵니다">화면 구성과 권한</H2>

      {/* 두 화면 */}
      <div className="grid md:grid-cols-2 gap-4">
        {PROGRAM_SURFACES.map((s) => (
          <div key={s.title} className="bg-mist border border-line p-7 md:p-8">
            <h3 className="text-[19px] md:text-[21px] font-bold tracking-[-0.02em] text-ink">{s.title}</h3>
            <dl className="mt-5 border-t border-line">
              <SpecRow label="쓰는 사람" text={s.who} />
              <SpecRow label="들어가는 법" text={s.enter} />
              <SpecRow label="하는 일" text={s.does} />
            </dl>
          </div>
        ))}
      </div>

      {/* 메뉴 구성 */}
      <h3 className="mt-14 mb-6 text-[18px] md:text-[20px] font-bold tracking-[-0.02em] text-ink">직원 화면 메뉴</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROGRAM_MENU.map((g) => (
          <div key={g.group} className="border border-line p-6">
            <p className="text-[12px] font-bold tracking-[0.08em] text-brand-deep uppercase">{g.group}</p>
            <ul className="mt-4 space-y-4">
              {g.items.map((i) => (
                <li key={i.name}>
                  <p className="text-[16px] font-bold text-ink break-keep">{i.name}</p>
                  <p className="mt-1 text-[13px] leading-[1.6] text-ink/50 break-keep">{i.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 역할과 팀 */}
      <div className="mt-4 bg-ink text-white p-7 md:p-9">
        <div className="grid lg:grid-cols-[300px_1fr] gap-x-12 gap-y-7">
          <div>
            <h3 className="text-[18px] md:text-[20px] font-bold tracking-[-0.02em]">역할과 팀</h3>
            <dl className="mt-5 space-y-4">
              {PROGRAM_ROLES.map((g) => (
                <div key={g.label}>
                  <dt className="text-[12px] font-semibold tracking-[0.06em] text-white/45">{g.label}</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {g.values.map((v) => (
                      <span
                        key={v}
                        className="inline-flex items-center h-8 px-3.5 rounded-full border border-white/30 text-[13px] text-white/85"
                      >
                        {v}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <ul className="space-y-3">
            {PROGRAM_ROLE_RULES.map((r) => (
              <li key={r} className="flex gap-3 text-[15px] leading-[1.7] text-white/85 break-keep">
                <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-brand shrink-0" aria-hidden />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Wrap>
  );
}

/** 사용 환경과 보안 */
export function ProgramEnvironment() {
  return (
    <Wrap tone="mist">
      <H2 note="설치 없이 브라우저에서 바로 씁니다">사용 환경과 보안</H2>
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <h3 className="text-[18px] md:text-[20px] font-bold tracking-[-0.02em] text-ink">사용 환경</h3>
          <dl className="mt-5 border-t-2 border-ink">
            {PROGRAM_ENVIRONMENT.map((e) => (
              <SpecRow key={e.label} label={e.label} text={e.text} />
            ))}
          </dl>
        </div>
        <div>
          <h3 className="text-[18px] md:text-[20px] font-bold tracking-[-0.02em] text-ink">보안</h3>
          <dl className="mt-5 border-t-2 border-ink">
            {PROGRAM_SECURITY.map((e) => (
              <SpecRow key={e.label} label={e.label} text={e.text} />
            ))}
          </dl>
        </div>
      </div>
    </Wrap>
  );
}
