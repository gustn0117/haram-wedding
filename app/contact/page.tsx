'use client';

import Image from 'next/image';
import ScrollAnimation from '@/components/ScrollAnimation';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('문의가 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-96 flex items-center justify-center mt-0">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/6N1mDmTXg1MfQTQiGpBPeqSqE40.png"
            alt="Contact Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <h1 className="text-5xl font-bold leading-tight">
            하람과 함께할 준비가 되셨나요?
            <br />
            <span className="text-haram-gold">하람</span>과 함께 특별한 날을 만들어보세요
          </h1>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {/* Phone */}
            <ScrollAnimation delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 bg-haram-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">☎</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">문의하기</h3>
                <p className="text-haram-gold font-bold text-xl mb-2">010-7930-1332</p>
                <p className="text-gray-600">평일 10:00 ~ 18:00</p>
              </div>
            </ScrollAnimation>

            {/* Email */}
            <ScrollAnimation delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-haram-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✉</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">이메일</h3>
                <p className="text-haram-gold font-bold mb-2">contact@haram.kr</p>
                <p className="text-gray-600">빠른 회신을 위해 전화 문의 권장</p>
              </div>
            </ScrollAnimation>

            {/* Location */}
            <ScrollAnimation delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-haram-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">위치</h3>
                <p className="text-gray-700 mb-2">경기도 수원시 영통구</p>
                <p className="text-gray-600">상담은 온/오프라인 모두 가능합니다</p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Main Message */}
          <ScrollAnimation delay={0.3}>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-haram-gold tracking-widest mb-4 block">HOW WE CAN HELP YOU</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                궁금한 점은 언제든 편하게 물어보세요!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                하람은 항상 당신의 특별한 날을 응원합니다.<br />
                작은 질문부터 큰 요청까지 언제든지 편하게 문의주세요.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimation>
            <form onSubmit={handleSubmit} className="bg-white p-12 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-10">문의 양식</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    성명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="신부신랑의 성명을 입력해주세요"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-haram-gold transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-haram-gold transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  전화번호 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="010-0000-0000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-haram-gold transition-all"
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  메시지 <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="궁금한 점이나 요청사항을 자유롭게 입력해주세요.
- 원하시는 서비스 (컨시어지, 포토부스, 전문사회)
- 예정된 결혼식 날짜
- 예식장
- 기타 특별한 요청사항"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-haram-gold transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-haram-gold text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                메시지 보내기
              </button>

              <p className="text-xs text-gray-500 text-center mt-6">
                입력하신 정보는 문의 응답 목적으로만 사용되며, 별도의 동의 없이 제3자에게 제공되지 않습니다.
              </p>
            </form>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              자주 묻는 질문
            </h2>
          </ScrollAnimation>

          <div className="space-y-4">
            {[
              {
                q: '전체 서비스를 함께 이용할 수 있나요?',
                a: '네, 가능합니다. 컨시어지, 포토부스, 전문사회를 패키지로 함께 이용하실 수 있으며, 각각의 특별 할인이 적용됩니다.',
              },
              {
                q: '예약은 얼마나 전에 해야 하나요?',
                a: '일반적으로 결혼식 2-3개월 전에 예약하시는 것을 권장합니다. 다만, 날짜에 따라 가능 여부가 달라질 수 있으니 확인 부탁드립니다.',
              },
              {
                q: '선금은 얼마나 해야 하나요?',
                a: '일반적으로 계약금은 전체 비용의 30-50%이며, 나머지는 결혼식 1주일 전에 완납해주시면 됩니다.',
              },
              {
                q: '특별한 요청이 있으면 어떻게 하나요?',
                a: '모든 요청은 상담을 통해 가능한지 검토합니다. 신부신랑의 특별한 요청과 꿈을 최대한 존중하고 실현시키기 위해 최선을 다하겠습니다.',
              },
              {
                q: '예식장이 정해지지 않았는데 상담받을 수 있나요?',
                a: '물론입니다! 예식장이 정해지지 않았어도 상담은 가능합니다. 오히려 예식장 선택 전에 상담받으시면 하람과 잘 맞는 예식장을 함께 찾을 수 있습니다.',
              },
              {
                q: '취소나 날짜 변경이 가능한가요?',
                a: '예식 일정 변경은 가능한 범위 내에서 응해드립니다. 자세한 취소/변경 정책은 계약서에 명시되어 있으며, 상담 시 자세히 설명해드리겠습니다.',
              },
            ].map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 0.05}>
                <details className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
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

      {/* Call to Action Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-haram-gold/10 to-haram-gold/5">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              특별한 하루, 하람과 함께 만들어보세요
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              결혼식의 완성도는 당일 현장이 얼마나 정리되어 있느냐에 달려 있습니다.<br />
              하람은 당신의 결혼식을 완벽하게 관리하고, 최고의 경험을 선사할 준비가 되어 있습니다.
            </p>
            <div className="space-y-4">
              <p className="text-2xl font-bold text-haram-gold">010-7930-1332</p>
              <p className="text-gray-600">카톡 문의도 가능합니다 | 평일 10:00 ~ 18:00</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
