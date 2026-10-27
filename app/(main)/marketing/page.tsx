import ServiceDetail from '@/components/service/ServiceDetail';
import { serviceBySlug } from '@/lib/services';
import { MARKETING_FAQ } from '@/lib/faq';

export default function Page() {
  return <ServiceDetail service={serviceBySlug('marketing')} faq={MARKETING_FAQ} />;
}
