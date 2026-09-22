type P = { className?: string };
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, viewBox: '0 0 24 24', 'aria-hidden': true };

export const IconChevronLeft = ({ className = 'w-5 h-5' }: P) => <svg className={className} {...base}><path d="m15 18-6-6 6-6" /></svg>;
export const IconChevronRight = ({ className = 'w-5 h-5' }: P) => <svg className={className} {...base}><path d="m9 18 6-6-6-6" /></svg>;
export const IconArrowUpRight = ({ className = 'w-4 h-4' }: P) => <svg className={className} {...base}><path d="M7 17 17 7M8 7h9v9" /></svg>;
export const IconArrowUp = ({ className = 'w-4 h-4' }: P) => <svg className={className} {...base}><path d="M12 19V5M5 12l7-7 7 7" /></svg>;
export const IconPhone = ({ className = 'w-5 h-5' }: P) => <svg className={className} {...base}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>;
export const IconBuilding = ({ className = 'w-5 h-5' }: P) => <svg className={className} {...base}><path d="M4 21V7l8-4 8 4v14M9 21v-5h6v5M8 10h.01M12 10h.01M16 10h.01M8 13h.01M12 13h.01M16 13h.01M3 21h18" /></svg>;
export const IconDocument = ({ className = 'w-5 h-5' }: P) => <svg className={className} {...base}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></svg>;
export const IconChat = ({ className = 'w-5 h-5' }: P) => <svg className={className} {...base}><path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.1A8 8 0 1 1 20 12" /><path d="M9 11h.01M12 11h.01M15 11h.01" /></svg>;
export const IconUsers = ({ className = 'w-5 h-5' }: P) => <svg className={className} {...base}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6" /></svg>;
export const IconSparkle = ({ className = 'w-5 h-5' }: P) => <svg className={className} {...base}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>;
export const IconCamera = ({ className = 'w-5 h-5' }: P) => <svg className={className} {...base}><path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" /><circle cx="12" cy="13.5" r="3.5" /></svg>;
export const IconMic = ({ className = 'w-5 h-5' }: P) => <svg className={className} {...base}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>;
export const IconClipboard = ({ className = 'w-5 h-5' }: P) => <svg className={className} {...base}><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3h6v1M9 11h6M9 15h4" /></svg>;
export const IconMusic = ({ className = 'w-5 h-5' }: P) => <svg className={className} {...base}><path d="M9 18V5l11-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="17" cy="16" r="3" /></svg>;
export const IconChart = ({ className = 'w-5 h-5' }: P) => <svg className={className} {...base}><path d="M3 20h18M6 16v-4M11 16V8M16 16v-6M20 5l-5 4-4-2-5 4" /></svg>;
