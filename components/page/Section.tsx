type Props = {
  title: string;
  description?: string;
  children: React.ReactNode;
  tone?: 'white' | 'mist';
  id?: string;
};

export default function Section({ title, description, children, tone = 'white', id }: Props) {
  return (
    <section id={id} className={tone === 'mist' ? 'bg-mist' : 'bg-white'}>
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
        <h2 className="text-[26px] md:text-[34px] font-bold tracking-[-0.03em] leading-[1.3] text-ink break-keep">{title}</h2>
        {description && <p className="mt-3 text-[16px] leading-[1.7] text-ink/55 max-w-[40em] break-keep">{description}</p>}
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}
