import memoryCenter from "../assets/images/memory-center.png";
import memoryLeft from "../assets/images/memory-left.png";
import memoryRight from "../assets/images/memory-right.png";

function MemorySection() {
  return (
    <section
      id="memory"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F5] to-[#FFF8F4] px-6 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] text-center">
        {/* Title */}
        <p className="text-[28px] font-bold tracking-[-0.04em] text-[#B29F98] sm:text-[34px] lg:text-[40px]">
          지금 이 순간,
        </p>

        <h2 className="mt-7 text-[36px] font-bold leading-[1.35] tracking-[-0.05em] text-[#672D2D] sm:text-[48px] lg:text-[58px]">
          우리가 가장 <span className="text-[#FF837B]">그리워할 날들</span>{" "}
          입니다
        </h2>

        {/* Image area */}
        <div className="relative mt-14 flex min-h-[470px] items-center justify-center sm:mt-16 lg:min-h-[560px]">
          {/* Left blurred image */}
          <div className="absolute left-[-150px] top-1/2 hidden w-[360px] -translate-y-1/2 overflow-hidden lg:block xl:left-[-70px] xl:w-[400px]">
            <img
              src={memoryLeft}
              alt=""
              aria-hidden="true"
              className="h-[300px] w-full object-cover opacity-35 blur-[3px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FFF9F5] via-transparent to-transparent" />
          </div>

          {/* Center image */}
          <div className="relative z-10 border-[12px] border-[#6F3B22] bg-[#6F3B22] shadow-[0_20px_60px_rgba(90,48,35,0.12)] sm:border-[14px]">
            <img
              src={memoryCenter}
              alt="함께 일상을 보내는 부모님의 모습"
              className="h-[320px] w-[360px] object-cover sm:h-[390px] sm:w-[500px] lg:h-[420px] lg:w-[560px]"
            />
          </div>

          {/* Right blurred image */}
          <div className="absolute right-[-150px] top-1/2 hidden w-[360px] -translate-y-1/2 overflow-hidden lg:block xl:right-[-70px] xl:w-[400px]">
            <img
              src={memoryRight}
              alt=""
              aria-hidden="true"
              className="h-[300px] w-full object-cover opacity-35 blur-[3px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#FFF9F5] via-transparent to-transparent" />
          </div>
        </div>

        {/* Quote */}
        <p className="mt-8 text-[22px] font-bold leading-relaxed tracking-[-0.04em] text-[#6D3232] sm:text-[28px] lg:text-[34px]">
          "통화는 매주 하는데... 무슨 얘기였는지 기억이 안나요"
        </p>
      </div>
    </section>
  );
}

export default MemorySection;
