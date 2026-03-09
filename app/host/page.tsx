import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function HostPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center mt-0">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/1lcrVrs2QRSo5D0HG03gET2jpR4.jpg"
            alt="Microphone Host"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="mb-8">
            <div className="w-12 h-1 bg-haram-gold mx-auto mb-4"></div>
            <h2 className="text-3xl font-serif font-bold mb-4">HARAM HOST</h2>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            결혼식의 품격은 목소리에서 시작됩니다. 하람 전문사회 서비스
          </h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                사회자는 단순히 진행자가 아닙니다. 사회자의 목소리, 톤, 감정은 결혼식 전체의 분위기를 결정하는 가장 중요한 요소입니다.
                하람의 전문사회는 신부신랑의 이야기를 담고, 하객들의 마음을 움직이며, 결혼식 전체의 감동을 만들어내는 전문가입니다.
              </p>
              <p>
                매끄러운 진행은 기본입니다. 하지만 하람이 추구하는 것은 그 이상입니다.
                각 순간순간에 적절한 감정을 전달하고, 뜻밖의 변수에 유연하게 대처하며,
                결혼식 전체를 통일된 분위기로 관리하는 것입니다.
              </p>
              <p>
                예식장 운영진과의 완벽한 협력, 신부신랑과의 충분한 대화, 그리고 현장에서의 즉각적인 판단력.
                이 모든 것이 조화로워야만 정말로 품격 있는 결혼식이 완성됩니다.
                하람의 전문사회는 그러한 책임감을 가지고 당신의 결혼식을 관리합니다.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              하람 전문사회의 특징
            </h2>
          </ScrollAnimation>

          <div className="space-y-12">
            {[
              {
                title: '맞춤 대본 커스터마이징',
                desc: '신부신랑의 만남의 과정, 공동의 추억, 가족의 이야기 등을 담은 오직 그들만을 위한 대본을 작성합니다. 일반적인 축사가 아닌, 감정이 담긴 진정한 이야기를 전달합니다.',
              },
              {
                title: '예식 자료 및 음원 공유',
                desc: '신부신랑의 사진, 영상, 음악, 그리고 예식 순서 등 모든 자료를 미리 공유받아 충분히 준비합니다. 어떤 순간도 예상하지 못한 변수가 없도록 사전에 완벽히 숙지합니다.',
              },
              {
                title: '예식장 운영진과의 협업 능력',
                desc: '예식장의 스태프, 음향, 조명과의 완벽한 협력으로 진행을 매끄럽게 합니다. 각 부서와의 의사소통으로 변수에 즉각 대응하고, 전체적인 예식의 흐름을 관리합니다.',
              },
            ].map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-haram-gold rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* MC Profile Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              하람의 전문사회
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <ScrollAnimation delay={0}>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://framerusercontent.com/images/HiVTdcNJH4DChc7iS46QKW0MM.jpeg"
                  alt="MC Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Profile Info */}
            <ScrollAnimation delay={0.1}>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">유상혁</h3>
                <p className="text-haram-gold font-bold text-lg mb-6">전문사회</p>

                <div className="space-y-4 text-gray-700 mb-8">
                  <div>
                    <p className="font-bold text-gray-900 mb-2">경력</p>
                    <p>10년 이상의 웨딩 사회 경력으로 500회 이상의 결혼식을 성공적으로 진행했습니다.</p>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 mb-2">특징</p>
                    <p>따뜻하고 감정이 담긴 진행으로 신부신랑과 하객들의 마음을 사로잡습니다. 매 순간의 변수에 유연하게 대응하며, 예식장과의 완벽한 협력으로 결혼식 전체의 흐름을 관리합니다.</p>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 mb-2">철학</p>
                    <p>결혼식의 품격은 보이는 것뿐만 아니라 들리는 것에서도 결정된다고 믿습니다. 신부신랑의 진정한 이야기를 담아 하객들의 가슴에 닿는 감동을 전달하는 것이 목표입니다.</p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-haram-gold text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
                >
                  상담 신청
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Process Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              전문사회 서비스 과정
            </h2>
          </ScrollAnimation>

          <div className="space-y-8">
            {[
              { step: '01', title: '초기 상담', desc: '신부신랑의 이야기, 예식 컨셉, 원하는 분위기 등을 충분히 파악합니다.' },
              { step: '02', title: '자료 수집 및 대본 작성', desc: '사진, 영상, 음악 등의 자료를 받아 감정이 담긴 대본을 작성합니다.' },
              { step: '03', title: '대본 확정 및 리허설', desc: '신부신랑과 함께 대본을 최종 확정하고 리허설을 진행합니다.' },
              { step: '04', title: '당일 진행 및 현장 관리', desc: '결혼식 당일 매끄러운 진행으로 예식 전체의 분위기를 관리합니다.' },
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="flex gap-8 pb-8 border-b border-gray-200 last:border-b-0">
                  <div className="flex-shrink-0">
                    <span className="text-4xl font-bold text-haram-gold">{item.step}</span>
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

      {/* Contact CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              품격 있는 진행을 원하신다면
            </h2>
            <div className="mb-8">
              <p className="text-gray-600 mb-4">문의 및 상담</p>
              <p className="text-3xl font-bold text-haram-gold">0507-1379-7249</p>
            </div>
            <p className="text-gray-600 mb-8">카톡/전화 상담 가능 | 평일 10:00 ~ 18:00</p>
            <Link
              href="/contact"
              className="inline-block bg-haram-gold text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all"
            >
              더 자세히 문의하기
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
