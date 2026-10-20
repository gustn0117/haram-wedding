import ServiceDetail from '@/components/service/ServiceDetail';
import { serviceBySlug } from '@/lib/services';

export default function Page() {
  return <ServiceDetail service={serviceBySlug('vocal')} />;
}
