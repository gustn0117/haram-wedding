type Props = {
  /** 들어갈 사진 설명 — 촬영·교체 시 참고용 */
  label: string;
  /** 권장 사이즈 (예: 1920×1080) */
  size?: string;
  tone?: 'light' | 'dark';
  className?: string;
  captionPosition?: 'bottom-left' | 'top-right' | 'center' | 'hero';
};

/** 실제 사진이 들어가기 전의 이미지 자리 (빗금 처리) */
export default function Hatch({ label, size, tone = 'light', className = '', captionPosition = 'bottom-left' }: Props) {
  const dark = tone === 'dark';
  const pos = {
    'bottom-left': 'left-4 bottom-4',
    'top-right': 'right-4 top-4',
    center: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    // 헤더·퀵메뉴에 가리지 않는 위치
    hero: 'right-6 lg:right-[116px] top-[84px] md:top-[132px]',
  }[captionPosition];

  return (
    <div role="img" aria-label={`이미지 준비 중: ${label}`}
      className={`${dark ? 'hatch-dark' : 'hatch'} ${/\babsolute\b/.test(className) ? '' : 'relative'} overflow-hidden ${className}`}>
      <span className={`absolute ${pos} inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium leading-none whitespace-nowrap ${
        dark ? 'bg-black/45 text-white/70 backdrop-blur-sm' : 'bg-white/85 text-ink/55'
      }`}>
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.6" />
          <path d="m21 16-5-5-8 8" />
        </svg>
        {label}
        {size && <span className={dark ? 'text-white/35' : 'text-ink/35'}>{size}</span>}
      </span>
    </div>
  );
}
