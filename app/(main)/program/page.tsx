import ServiceDetail from '@/components/service/ServiceDetail';
import { serviceBySlug } from '@/lib/services';
import { PROGRAM_FAQ } from '@/lib/faq';

export default function Page() {
  return <ServiceDetail service={serviceBySlug('program')} faq={PROGRAM_FAQ} />;
}
