import ServiceDetail from '@/components/service/ServiceDetail';
import { serviceBySlug } from '@/lib/services';
import { CONCIERGE_FAQ } from '@/lib/faq';

export default function Page() {
  return <ServiceDetail service={serviceBySlug('concierge')} faq={CONCIERGE_FAQ} />;
}
