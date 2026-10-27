import ServiceDetail from '@/components/service/ServiceDetail';
import { serviceBySlug } from '@/lib/services';
import { HOST_FAQ } from '@/lib/faq';

export default function Page() {
  return <ServiceDetail service={serviceBySlug('host')} faq={HOST_FAQ} />;
}
