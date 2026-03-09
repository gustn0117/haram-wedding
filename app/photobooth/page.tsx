import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function PhotoboothPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center mt-0">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/TkNsVG4KOclPeoyIabHUAYEMyA.jpeg"
            alt="Photobooth Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="mb-8">
            <div className="w-12 h-1 bg-haram-gold mx-auto mb-4"></div>
            <h2 className="text-3xl font-serif font-bold mb-4">HARAM PHOTOBOOTH</h2>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            기억에 남는 결혼식에는 늘 하람 포토부스가 있습니다
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <ScrollAnimation>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://framerusercontent.com/images/vHzi7eom4S8qifSAVtxexAi4hu4.jpeg"
                  alt="Couple Photo"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Right Content */}
            <ScrollAnimation delay={0.1}>
              <div>
                <h3 className="text-4xl font-bold text-haram-gold mb-6">
                  사진은 남고, 감정은 오래갑니다
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed space-y-4 mb-6">
                  <span className="block">
                    하람 포토부스는 단순한 사진을 넘어서, 결혼식의 감정과 분위기를 담아냅니다.
                    신부신랑과 하객들이 함께 만드는 특별한 순간들을 아름답게 기록합니다.
                  </span>
                  <span className="block">
                    맞춤형 템플릿 디자인, 감성 있는 소품, 그리고 세심한 운영으로
                    당신의 결혼식을 더욱 특별하게 만들어줍니다.
                  </span>
                  <span className="block">
                    결혼식이 끝난 후에도 포토방명록을 통해 손님들의 축하 메시지와
                    웃음이 담긴 사진을 오래도록 간직할 수 있습니다.
                  </span>
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Template Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              고객님을 위한 맞춤형 템플릿 제작
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <ScrollAnimation key={item} delay={item * 0.1}>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://framerusercontent.com/images/Ip0ZG0cQhehbsedUqY3eGatF0fc.jpeg"
                    alt={`Template ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.3}>
            <p className="text-center text-gray-600 mt-12 text-lg">
              신부신랑의 컨셉과 스타일에 맞는 맞춤형 템플릿을 제작해드립니다.<br />
              색감, 디자인, 레이아웃 등 모든 요소를 함께 협의하여 완성합니다.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              예약 및 진행과정 안내
            </h2>
          </ScrollAnimation>

          <div className="space-y-8">
            {[
              { step: '1', title: '네이버 톡톡, 인스타 DM 문의', desc: '편하신 채널로 문의주세요. 상세한 안내와 포토부스 샘플을 보여드립니다.' },
              { step: '2', title: '네이버폼 예약서 작성 후 스토어 결제', desc: '예약서를 작성하시고 선택된 패키지로 결제를 진행합니다.' },
              { step: '3', title: '템플릿 디자인 확정 및 최종 확인', desc: '원하시는 템플릿 디자인을 최종 확정하고 추가 사항을 확인합니다.' },
              { step: '4', title: '행사 진행 및 포토방명록 전달', desc: '결혼식 당일 포토부스를 진행하고 완성된 포토방명록을 전달드립니다.' },
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="flex gap-8 pb-8 border-b border-gray-200 last:border-b-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-haram-gold rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              포토부스 패키지
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Package 1 */}
            <ScrollAnimation delay={0}>
              <div className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-haram-gold">
                <h3 className="text-3xl font-bold text-haram-gold mb-4">하람 포토부스 패키지</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-gray-900">500,000</span>
                  <span className="text-gray-600 text-lg ml-2">원/1회</span>
                </div>
                <ul className="space-y-4 text-gray-700 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-haram-gold font-bold mt-1">✓</span>
                    <span>포토부스 운영 2시간</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-haram-gold font-bold mt-1">✓</span>
                    <span>맞춤형 템플릿 디자인</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-haram-gold font-bold mt-1">✓</span>
                    <span>포토방명록 제작</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-haram-gold font-bold mt-1">✓</span>
                    <span>소품 및 의상 제공</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-haram-gold font-bold mt-1">✓</span>
                    <span>전문 스태프 배치</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            {/* Package 2 */}
            <ScrollAnimation delay={0.1}>
              <div className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-haram-gold">
                <h3 className="text-3xl font-bold text-haram-gold mb-4">혜택가</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-gray-900">360,000</span>
                  <span className="text-gray-600 text-lg ml-2">원/1회</span>
                </div>
                <ul className="space-y-4 text-gray-700 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-haram-gold font-bold mt-1">✓</span>
                    <span>포토부스 운영 2시간</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-haram-gold font-bold mt-1">✓</span>
                    <span>맞춤형 템플릿 디자인</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-haram-gold font-bold mt-1">✓</span>
                    <span>포토방명록 제작</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-haram-gold font-bold mt-1">✓</span>
                    <span>소품 및 의상 제공</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-haram-gold font-bold mt-1">✓</span>
                    <span>전문 스태프 배치</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600">
                  컨시어지 또는 전문사회 이용 고객 대상
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="bg-gradient-to-r from-haram-gold/10 to-haram-gold/5 p-12 rounded-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">우리 둘 Event</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                신랑신부는 물론 결혼식에 참여하는 모든 손님들이 함께 즐길 수 있는 특별한 이벤트입니다.
                포토부스를 통해 만들어지는 소중한 추억들이 결혼식의 완성도를 높이고,
                모든 참석자들에게 잊지 못할 특별한 경험을 선사합니다.
              </p>
              <p className="text-gray-600">
                자세한 내용은 문의주세요. 맞춤형 이벤트 구성이 가능합니다.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              자주 묻는 질문
            </h2>
          </ScrollAnimation>

          <div className="space-y-4">
            {[
              {
                q: '포토부스 템플릿은 어떻게 디자인하나요?',
                a: '신부신랑님과의 상담을 통해 결혼식의 컨셉, 색감, 스타일 등을 파악하여 맞춤형 템플릿을 디자인합니다. 여러 안을 제시하고 최종 확정까지 함께 진행합니다.',
              },
              {
                q: '포토부스 운영 시간을 늘릴 수 있나요?',
                a: '네, 가능합니다. 추가 시간은 시간당 별도 요금이 적용됩니다. 상담 시 자세한 가격을 안내해드립니다.',
              },
              {
                q: '포토방명록은 언제 받을 수 있나요?',
                a: '결혼식 후 약 1주일 이내에 완성된 포토방명록을 받으실 수 있습니다. 배송이나 직접 수령 모두 가능합니다.',
              },
              {
                q: '소품과 의상은 몇 종류인가요?',
                a: '기본 패키지에는 10가지 이상의 소품과 신부용 추가 의상이 포함됩니다. 추가 소품 대여는 별도 상담이 필요합니다.',
              },
              {
                q: '포토부스가 설치되는 데 시간이 얼마나 걸리나요?',
                a: '일반적으로 30분 정도 소요됩니다. 예식장 상황에 따라 다를 수 있으니, 사전에 협의하겠습니다.',
              },
              {
                q: '다른 서비스와 함께 이용할 수 있나요?',
                a: '네, 컨시어지나 전문사회 서비스를 함께 이용하실 경우 혜택가가 적용됩니다. 패키지 구성도 가능합니다.',
              },
            ].map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 0.05}>
                <details className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <summary className="cursor-pointer font-bold text-gray-900 flex items-center justify-between">
                    <span>{faq.q}</span>
                    <span className="text-haram-gold">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed pt-4 border-t border-gray-200">
                    {faq.a}
                  </p>
                </details>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              특별한 포토부스 경험을 원하신다면
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-haram-gold text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all"
            >
              문의하기
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
