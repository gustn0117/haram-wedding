import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden mt-0">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/qrDW2av5Tu0YgzisKviZ93qgpE.png"
            alt="Wedding Hall Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="mb-8">
            <div className="text-6xl font-bold mb-2 font-serif">HR</div>
            <div className="w-16 h-1 bg-haram-gold mx-auto mb-8"></div>
          </div>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            예식의 품질은 현장에서 결정됩니다
          </h1>
          <p className="text-xl text-gray-100">
            하람 웨딩 컨시어지, 포토부스, 전문사회
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <div className="mb-8">
              <div className="inline-block">
                <div className="w-12 h-1 bg-haram-gold mx-auto mb-4"></div>
                <h2 className="text-3xl font-bold text-haram-gold mb-4">하람</h2>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <p className="text-4xl font-bold text-gray-900 mb-8 leading-relaxed">
              " 예식의 품질은 현장에서 결정됩니다 "
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <p className="text-lg text-gray-700 leading-relaxed space-y-6">
              <span className="block">
                결혼식의 완성도는 기획이나 설명이 아니라 당일 현장이 얼마나 정리되어 있느냐에 달려 있습니다.
                하람은 결혼식 당일 현장에서 발생하는 흐름, 동선, 분위기, 변수를 경험을 바탕으로 관리하는 회사입니다.
              </span>
              <span className="block">
                화려함보다는 안정감, 연출보다는 정돈된 분위기. 하람은 결혼식다운 결혼식을 목표로 합니다.
              </span>
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Photobooth */}
            <ScrollAnimation delay={0}>
              <Link href="/photobooth">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                  <Image
                    src="https://framerusercontent.com/images/CWkUc0kVkEmNhMQZVago8hE.png"
                    alt="포토부스"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                      <span className="text-haram-gold font-bold text-lg">📸</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center">포토부스</h3>
                    <p className="text-sm text-center">추억을 선물하는 셀프 포토존 / 감성까지 담았습니다</p>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>

            {/* Card 2 - Host */}
            <ScrollAnimation delay={0.1}>
              <Link href="/host">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                  <Image
                    src="https://framerusercontent.com/images/nWAdkvqfbxvcttAg2x2PWOqDosI.png"
                    alt="전문사회"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                      <span className="text-haram-gold font-bold text-lg">🎤</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center">전문사회</h3>
                    <p className="text-sm text-center">진행은 매끄럽게 / 분위기는 따뜻하게</p>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>

            {/* Card 3 - Concierge */}
            <ScrollAnimation delay={0.2}>
              <Link href="/concierge">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                  <Image
                    src="https://framerusercontent.com/images/QymrN1DNcUPDOCnpsHJcitDswrk.png"
                    alt="컨시어지"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                      <span className="text-haram-gold font-bold text-lg">✓</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center">컨시어지</h3>
                    <p className="text-sm text-center">준비부터 마무리까지 / 하람이 책임집니다</p>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}
