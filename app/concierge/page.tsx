import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function ConciergePage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center mt-0">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/qrDW2av5Tu0YgzisKviZ93qgpE.png"
            alt="Concierge Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-6">
              <div className="w-12 h-1 bg-haram-gold mb-4"></div>
              <h2 className="text-2xl font-serif font-bold mb-2">HARAM CONCIERGE</h2>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              완벽한 하루를 위한 최고의 선택, 하람 컨시어지
            </h1>
            <p className="text-lg text-gray-100">
              결혼식 당일을 완벽하게 관리하고, 예식의 품질을 높이는 최고의 파트너입니다.
            </p>
          </div>

          {/* Right Logo */}
          <div className="flex items-center justify-center">
            <div className="relative w-72 h-72">
              <Image
                src="https://framerusercontent.com/images/G8F9Yul7jpSbk2uctO4inp2txc.png"
                alt="HARAM Concierge Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <ScrollAnimation>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  예식장과 직접 계약하는 B2B 서비스입니다
                </h3>
                <p className="text-lg text-haram-gold font-bold mb-6">
                  웨딩홀의 품격을 높이는 현장 파트너
                </p>
                <h4 className="text-4xl font-bold text-haram-gold mb-6">
                  하람 컨시어지
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  하람 컨시어지는 예식장과 직접 계약하여 진행되는 B2B 서비스입니다. 결혼식 당일 현장에서 발생하는 모든 변수를 관리하고, 예식의 품질을 보장합니다. 예식장의 품격을 높이고, 신부신랑과 하객들이 만족할 수 있는 완벽한 하루를 만들어냅니다.
                </p>
              </div>
            </ScrollAnimation>

            {/* Right Image */}
            <ScrollAnimation delay={0.1}>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://framerusercontent.com/images/C2rsGbpi0ZqznAojpgdRZrJQA.jpeg"
                  alt="Concierge Service"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-bold text-haram-gold tracking-widest mb-4">● FEATURE</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                예식장의 품격, 하람과 함께 완성하세요
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              '실시간 예식 흐름 통제',
              '예식장 전용 메뉴얼 제공',
              '이미지 통일성 확보',
              '인력 교육 및 지속적 트레이닝 시스템',
              '계약형 B2B 안정성 보장',
              '전담 운영 매니저 배정',
            ].map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-haram-gold/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl text-haram-gold">◆</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{feature}</h3>
                  <p className="text-sm text-gray-600">
                    리허설부터 입장 타이밍, 사회자등 관계자 연결까지. 완벽한 과정을 만들어냅니다.
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Services Process Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="mb-16">
              <span className="text-xs font-bold text-haram-gold tracking-widest mb-4 block">services</span>
              <h2 className="text-4xl font-bold text-gray-900">
                제휴부터 현장 운영까지, 전 과정 안내
              </h2>
            </div>
          </ScrollAnimation>

          <div className="space-y-8">
            {[
              { step: '01', title: '상담 및 제휴 제안' },
              { step: '02', title: '맞춤 메뉴얼 설계' },
              { step: '03', title: '현장 리허설 및 시뮬레이션' },
              { step: '04', title: '웨딩 전담 인력 투입' },
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="flex items-center gap-8 pb-8 border-b border-gray-200 last:border-b-0">
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-bold text-haram-gold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-bold text-haram-gold tracking-widest mb-4">● TESTIMONIAL</span>
              <h2 className="text-4xl font-bold text-gray-900">
                "하람과 함께 한 예식장의 이야기"
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: '안산 0000웨딩', review: '하람과의 협력으로 예식장의 신뢰도가 크게 향상되었습니다. 신부신랑과 하객들로부터 긍정적인 평가를 받았습니다.' },
              { name: '천안 0웨딩', review: '현장 운영이 훨씬 더 체계적이고 효율적이 되었습니다. 스태프들도 하람의 교육을 받으며 전문성이 높아졌습니다.' },
              { name: '평택 0000웨딩', review: '하람 컨시어지 덕분에 예식장의 이미지가 한 단계 업그레이드 되었습니다. 계속 함께하고 싶은 파트너입니다.' },
            ].map((testimonial, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="text-haram-gold text-4xl mb-4">"</div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.review}</p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-haram-gold text-lg">★</span>
                    ))}
                  </div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                </div>
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
              예식장의 품격을 높이는 가장 확실한 방법
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
