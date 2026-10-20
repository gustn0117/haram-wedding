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
      <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-24">
        <h2 className="site-heading text-[24px] md:text-[32px] text-ink break-keep">{title}</h2>
        {description && <p className="mt-3 text-[16px] leading-[1.75] text-ink/55 max-w-[44em] break-keep">{description}</p>}
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}
