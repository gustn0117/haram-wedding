import ServiceTeaser from '@/components/page/ServiceTeaser';
import { serviceBySlug } from '@/lib/services';
import { siteBySlug } from '@/lib/sites';

export default function Page() {
  return <ServiceTeaser site={siteBySlug('photobooth')} service={serviceBySlug('photobooth')} />;
}
