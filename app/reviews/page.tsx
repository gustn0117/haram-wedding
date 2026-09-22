import PageHero from '@/components/page/PageHero';
import CtaBand from '@/components/page/CtaBand';
import ReviewList from '@/components/page/ReviewList';
import { CONTACT_HREF } from '@/lib/nav';

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        crumb="고객후기"
        title="하람과 함께한 예식 이야기"
        description="신랑신부와 제휴 예식장이 남긴 후기입니다."
        image="웨딩 링과 예식 준비 소품"
        imageSrc="/images/editorial-2026/details.png"
      />
      <ReviewList />
      <CtaBand
        title="다음 후기의 주인공이 되어 주세요"
        description="예식장과 날짜를 알려주시면 필요한 서비스 구성을 안내해 드립니다."
        href={CONTACT_HREF}
        label="상담 문의"
      />
    </main>
  );
}
