import Image from 'next/image';

type Props = {
  /** 이미지 대체 텍스트 */
  label: string;
  /** public 기준 이미지 경로 */
  src: string;
  className?: string;
  objectPosition?: string;
  priority?: boolean;
};

/** 기존 빗금 영역에 실제 이미지를 채우는 공용 프레임 */
export default function Hatch({
  label,
  src,
  className = '',
  objectPosition = 'center',
  priority = false,
}: Props) {
  return (
    <div className={`${/\babsolute\b/.test(className) ? '' : 'relative'} overflow-hidden bg-mist ${className}`}>
      <Image
        src={src}
        alt={label}
        fill
        priority={priority}
        sizes={
          /\babsolute\b/.test(className)
            ? '100vw'
            : '(min-width: 1280px) 50vw, (min-width: 768px) 66vw, 100vw'
        }
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}
