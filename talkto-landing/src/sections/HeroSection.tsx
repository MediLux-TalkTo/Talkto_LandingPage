import heroPhoneImage from "../assets/images/hero-phone.png";
import talkToLogo from "../assets/logo/talkto-logo.svg";

import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FFFDF9] pt-[72px]"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-[41%] top-[27%] h-[250px] w-[250px] rounded-full bg-[#FFF5ED] opacity-80 blur-sm" />
      <div className="pointer-events-none absolute bottom-[9%] left-[43%] h-[210px] w-[210px] rounded-full bg-[#F4FCF7] opacity-90" />
      <div className="pointer-events-none absolute bottom-[6%] right-[20%] h-[230px] w-[230px] rounded-full bg-[#F0FAF8] opacity-80" />
      <div className="pointer-events-none absolute right-[7%] top-[51%] h-[190px] w-[190px] rounded-full bg-[#F3FCFB] opacity-90" />

      <div className="relative mx-auto grid min-h-[830px] max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-10 xl:px-20">
        {/* Text content */}
        <div className="z-10 max-w-[620px]">
          <p className="mb-4 text-[28px] font-bold leading-tight tracking-[-0.04em] text-[#3E4C47] sm:text-[34px] lg:text-[38px]">
            다시 만날 수는 없어도,
          </p>

          <h1 className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[42px] font-extrabold leading-[1.15] tracking-[-0.05em] text-[#35413D] sm:text-[54px] lg:text-[60px]">
            <span className="inline-flex items-center">
              <img
                src={talkToLogo}
                alt="TalkTo"
                className="mr-2 h-[56px] w-auto sm:h-[64px]"
              />
            </span>

            <span>로 다시 전화하듯</span>
          </h1>

          <p className="mt-12 max-w-[600px] text-[16px] font-medium leading-[1.9] tracking-[-0.02em] text-[#4D504E] sm:text-[18px]">
            TalkTo는 가족과 통화하며 나눈 일상 속 기억을 기록하여 언제든
            <br className="hidden sm:block" />
            원본 목소리로 들려주고, 그분의 기억과 말투, 성격과 가치관을
            <br className="hidden sm:block" />
            담아 기억 속의 목소리로 대화를 이어갑니다.
          </p>

          <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/reservation"
              className="inline-flex h-[54px] min-w-[190px] items-center justify-center rounded-full border-2 border-[#8D82F5] bg-gradient-to-r from-[#25D0B3] to-[#7BD65A] px-7 text-[17px] font-bold text-white shadow-[0_5px_15px_rgba(34,201,134,0.18)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(34,201,134,0.28)]"
            >
              사전 등록하기
            </Link>

            <a
              href="http://pf.kakao.com/_nNwwX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[48px] items-center justify-center rounded-lg bg-[#DDF8E7] px-5 text-[14px] font-bold text-[#168C59] transition-colors hover:bg-[#CFF3DE]"
            >
              + 카카오톡 채널 추가하기
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative z-10 flex min-h-[560px] items-center justify-center lg:min-h-[760px] lg:justify-end">
          {/* Decorative star */}
          <div className="absolute left-[5%] top-[14%] hidden h-24 w-24 rotate-12 lg:block">
            <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-[#FFF7D4] shadow-sm" />
            <div className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-[#FFF7D4] shadow-sm" />
            <div className="absolute left-[16%] top-[16%] h-[3px] w-[68%] rotate-45 bg-[#FFF7D4]" />
            <div className="absolute left-[16%] top-[16%] h-[3px] w-[68%] -rotate-45 bg-[#FFF7D4]" />
          </div>

          <div className="absolute left-[17%] top-[28%] hidden h-10 w-10 rotate-45 bg-[#FFF0E8] shadow-sm lg:block" />

          <img
            src={heroPhoneImage}
            alt="TalkTo 모바일 애플리케이션 화면"
            className="relative z-10 w-full max-w-[440px] object-contain sm:max-w-[500px] lg:max-w-[580px]"
          />

          {/* Bottom fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[220px] w-full bg-gradient-to-t from-[#FFFDF9] via-[#FFFDF9]/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

/// <reference types="vite/client" />
