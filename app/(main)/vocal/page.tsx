import ServiceDetail from '@/components/service/ServiceDetail';
import { serviceBySlug } from '@/lib/services';
import { VOCAL_FAQ } from '@/lib/faq';

export default function Page() {
  return <ServiceDetail service={serviceBySlug('vocal')} faq={VOCAL_FAQ} />;
}
