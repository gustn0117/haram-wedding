'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: 'easeOut' },
  }),
};

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/qrDW2av5Tu0YgzisKviZ93qgpE.png"
            alt="HARAM Wedding"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
            className="text-[4rem] md:text-[5rem] font-light tracking-[0.3em] mb-6 font-display"
          >
            하람
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeIn}
            className="text-lg md:text-2xl font-light leading-relaxed tracking-wide"
          >
            &ldquo; 예식의 품질은 현장에서 결정됩니다 &rdquo;
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            custom={0}
            variants={fadeIn}
          >
            <p className="text-[15px] md:text-[17px] leading-[2.2] text-gray-500 font-light">
              결혼식의 완성도는 기획이나 설명이 아니라
              <br />
              당일 현장이 얼마나 정리되어 있느냐에 달려 있습니다.
              <br /><br />
              하람은 결혼식 당일 현장에서 발생하는 흐름, 동선, 분위기, 변수를
              <br />
              경험을 바탕으로 관리하는 회사입니다.
              <br /><br />
              화려함보다는 안정감, 연출보다는 정돈된 분위기.
              <br />
              하람은 결혼식다운 결혼식을 목표로 합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              href: '/photobooth',
              img: 'https://framerusercontent.com/images/6N1mDmTXg1MfQTQiGpBPeqSqE40.png',
              title: '포토부스',
              line1: '추억을 선물하는 셀프 포토존',
              line2: '감성까지 담았습니다',
            },
            {
              href: '/host',
              img: 'https://framerusercontent.com/images/QymrN1DNcUPDOCnpsHJcitDswrk.png',
              title: '전문사회',
              line1: '진행은 매끄럽게',
              line2: '분위기는 따뜻하게',
            },
            {
              href: '/concierge',
              img: 'https://framerusercontent.com/images/nWAdkvqfbxvcttAg2x2PWOqDosI.png',
              title: '컨시어지',
              line1: '준비부터 마무리까지',
              line2: '하람이 책임집니다',
            },
          ].map((card, i) => (
            <motion.div
              key={card.href}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i * 0.15}
              variants={fadeIn}
            >
              <Link href={card.href} className="block group">
                <div className="relative w-full aspect-[4/5] rounded-[30px] overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm font-light leading-relaxed text-gray-200">
                      {card.line1}<br />{card.line2}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
