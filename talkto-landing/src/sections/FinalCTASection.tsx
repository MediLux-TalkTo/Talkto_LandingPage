import { Link } from "react-router-dom";
import talkToLogo from "../assets/logo/talkto-logo.svg";
function FinalCTASection() {
  return (
    <section id="reservation" className="relative overflow-hidden bg-[#FFFDF9]">
      {/* CTA area */}
      <div className="relative flex min-h-[780px] items-center justify-center px-6 py-24 sm:min-h-[860px] lg:min-h-[920px]">
        {/* Background circles */}
        <div className="pointer-events-none absolute left-[7%] top-[7%] h-[260px] w-[260px] rounded-full bg-[#FFF9D9] opacity-55" />
        <div className="pointer-events-none absolute -left-16 top-[28%] h-[220px] w-[220px] rounded-full bg-[#F7FCFA] opacity-80" />
        <div className="pointer-events-none absolute right-[-90px] top-[-40px] h-[340px] w-[340px] rounded-full bg-[#FFF6F7] opacity-60" />
        <div className="pointer-events-none absolute right-[8%] top-[42%] h-[260px] w-[260px] rounded-full bg-[#F2FCFA] opacity-75" />
        <div className="pointer-events-none absolute bottom-[-50px] left-[9%] h-[260px] w-[260px] rounded-full bg-[#F3FBFA] opacity-75" />
        <div className="pointer-events-none absolute bottom-[-40px] right-[5%] h-[280px] w-[280px] rounded-full bg-[#FFF9E9] opacity-65" />
        <div className="pointer-events-none absolute bottom-[-170px] left-[46%] h-[420px] w-[420px] rounded-full bg-[#FFF8F3] opacity-60" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          {/* Main title */}
          <p className="text-[32px] font-bold tracking-[-0.04em] text-[#3F4D47] sm:text-[40px] lg:text-[52px]">
            일상의 통화를
          </p>

          <h2 className="mt-4 text-[42px] font-extrabold leading-[1.25] tracking-[-0.06em] text-[#3F4D47] sm:text-[58px] lg:text-[74px]">
            <span className="text-[#20C986]">다시 나눌 수 있는 추억</span>
            <span className="ml-3">이 되도록</span>
          </h2>

          {/* Decorative stars */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[68%] top-[8%] hidden lg:block"
          >
            <span className="absolute text-[56px] text-[#FFF5D6] drop-shadow-sm">
              ✦
            </span>
            <span className="absolute left-14 top-12 text-[38px] text-[#FFF0EA] drop-shadow-sm">
              ✦
            </span>
          </div>

          {/* Beta text */}
          <div className="mt-28 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:mt-32">
            <img
              src={talkToLogo}
              alt="TalkTo"
              className="h-[42px] w-auto sm:h-[50px] lg:h-[58px]"
            />

            <p className="text-[20px] font-medium tracking-[-0.03em] text-[#2F3431] sm:text-[26px] lg:text-[30px]">
              의 첫 베타 사용자로 함께해 주세요
            </p>
          </div>

          {/* CTA button */}
          <Link
            to="/reservation"
            className="mt-10 inline-flex h-[64px] min-w-[250px] items-center justify-center rounded-full border-2 border-[#8F7DF3] bg-gradient-to-r from-[#28D1B6] to-[#78D55E] px-10 text-[22px] font-extrabold text-white shadow-[0_8px_20px_rgba(32,201,134,0.22)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(32,201,134,0.3)] sm:h-[72px] sm:min-w-[290px] sm:text-[26px]"
          >
            사전 등록하기
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#E8E8E1] bg-white/50">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-6 py-7 text-[#777D75] sm:flex-row sm:items-center sm:justify-between lg:px-12 xl:px-20">
          <Link
            to="/"
            aria-label="TalkTo 메인으로 이동"
            className="flex items-center"
          >
            <img
              src={talkToLogo}
              alt="TalkTo"
              className="h-7 w-auto object-contain"
            />
          </Link>

          <p className="text-[13px] leading-relaxed sm:text-right sm:text-[15px]">
            © 2026 TalkTo 베타 화면과 혜택은 운영 과정에서 일부 조정될 수
            있습니다.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default FinalCTASection;
