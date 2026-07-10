import memoriesIcon from "../assets/images/memories-icon.png";
import personaIcon from "../assets/images/persona-icon.png";
import previewMemoryPhone from "../assets/images/preview-memory-phone.png";
import previewPersonaPhone from "../assets/images/preview-persona-phone.png";

function ServicePreviewSection() {
  return (
    <section
      id="service-preview"
      className="relative overflow-hidden bg-[#FFFDF9] px-6 py-24 sm:py-28 lg:py-36"
    >
      {/* Background circles */}
      <div className="pointer-events-none absolute left-[4%] top-[5%] h-[180px] w-[180px] rounded-full bg-[#FFF9DD] opacity-60" />
      <div className="pointer-events-none absolute -left-14 top-[18%] h-[170px] w-[170px] rounded-full bg-[#F4FCFA] opacity-70" />
      <div className="pointer-events-none absolute right-[-30px] top-[-30px] h-[210px] w-[210px] rounded-full bg-[#FFF4F5] opacity-65" />
      <div className="pointer-events-none absolute right-[7%] top-[17%] h-[180px] w-[180px] rounded-full bg-[#F6FCFA] opacity-70" />

      <div className="pointer-events-none absolute -left-14 bottom-[25%] h-[220px] w-[220px] rounded-full bg-[#FFF6FA] opacity-70" />
      <div className="pointer-events-none absolute left-[5%] bottom-[5%] h-[160px] w-[160px] rounded-full bg-[#FFF8E8] opacity-60" />
      <div className="pointer-events-none absolute left-[18%] bottom-[-80px] h-[260px] w-[260px] rounded-full bg-[#FFF7F2] opacity-65" />
      <div className="pointer-events-none absolute right-[4%] bottom-[6%] h-[170px] w-[170px] rounded-full bg-[#FFF9DD] opacity-50" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Section title */}
        <p className="text-[26px] font-bold tracking-[-0.04em] text-[#7D8579] sm:text-[30px] lg:text-[34px]">
          서비스 미리보기
        </p>

        {/* Memories preview */}
        <div className="mt-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Left phone */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={previewMemoryPhone}
              alt="TalkTo 기록 화면 미리보기"
              className="h-[560px] w-auto object-contain sm:h-[660px] lg:h-[820px]"
            />
          </div>

          {/* Right description card */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[620px] rounded-[28px] border border-[#E8ECE6] bg-white/90 px-10 py-10 shadow-[0_8px_0_rgba(76,87,78,0.10)] backdrop-blur-sm sm:px-12 sm:py-12">
              <div className="absolute -right-10 -top-16 hidden lg:block">
                <div className="rotate-[8deg] rounded-[26px] bg-[#FFF7F5] p-5 shadow-[0_8px_20px_rgba(84,71,64,0.12)]">
                  <img
                    src={memoriesIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-24 w-24 object-contain"
                  />
                </div>
              </div>

              <p className="text-[20px] font-bold text-[#20C986] sm:text-[24px]">
                Memories
              </p>

              <h2 className="mt-2 text-[34px] font-extrabold tracking-[-0.04em] text-[#20C986] sm:text-[42px]">
                기록
              </h2>

              <p className="mt-9 text-[16px] font-medium leading-[1.8] tracking-[-0.03em] text-[#747B75] sm:text-[18px]">
                파일을 하나씩 찾지 않아도 됩니다.
                <br />
                궁금한 기억을 평소 물어보듯 검색하고, 찾은 순간을
                <br className="hidden sm:block" />
                원본 목소리로 듣고, 그 목소리로 대화까지 이어갑니다.
              </p>

              <p className="mt-8 text-[15px] font-bold tracking-[-0.03em] text-[#139860] sm:text-[17px]">
                검색 탭 아래의 키워드를 눌러 각각의 화면을 확인하세요
              </p>
            </div>
          </div>
        </div>

        {/* Voice Persona preview */}
        <div className="mt-28 grid grid-cols-1 items-center gap-16 lg:mt-44 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          {/* Left description card */}
          <div className="relative order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="relative w-full max-w-[620px] rounded-[28px] border border-[#E8ECE6] bg-white/90 px-10 py-10 shadow-[0_8px_0_rgba(76,87,78,0.10)] backdrop-blur-sm sm:px-12 sm:py-12">
              <div className="absolute -right-10 -top-16 hidden lg:block">
                <div className="-rotate-[8deg] rounded-[26px] bg-[#FFF7F5] p-5 shadow-[0_8px_20px_rgba(84,71,64,0.12)]">
                  <img
                    src={personaIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-24 w-24 object-contain"
                  />
                </div>
              </div>

              <p className="text-[20px] font-bold text-[#20C986] sm:text-[24px]">
                Voice Persona
              </p>

              <h2 className="mt-2 text-[34px] font-extrabold tracking-[-0.04em] text-[#20C986] sm:text-[42px]">
                보이스 페르소나
              </h2>

              <p className="mt-9 text-[16px] font-medium leading-[1.8] tracking-[-0.03em] text-[#747B75] sm:text-[18px]">
                목소리, 말투, 성향, 가치관, 대화 방식 그대로,
                <br />
                부모님과 다시 이야기하는 듯한 AI 음성 대화를 만들어요
              </p>

              <p className="mt-8 text-[15px] font-bold tracking-[-0.03em] text-[#139860] sm:text-[17px]">
                검색 탭 아래의 키워드를 눌러 각각의 화면을 확인하세요
              </p>
            </div>
          </div>

          {/* Right phone */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <img
              src={previewPersonaPhone}
              alt="TalkTo 보이스 페르소나 화면 미리보기"
              className="h-[560px] w-auto object-contain sm:h-[660px] lg:h-[820px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePreviewSection;
