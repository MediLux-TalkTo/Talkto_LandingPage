import voicePersonaPhone from "../assets/images/voice-persona-phone.png";

function VoicePersonaSection() {
  return (
    <section
      id="experience"
      className="overflow-hidden bg-[#FFFDFB] px-6 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Top area */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          {/* Left text */}
          <div className="pt-4 lg:pt-10">
            <p className="text-[28px] font-bold leading-tight tracking-[-0.04em] text-[#44534D] sm:text-[36px] lg:text-[42px]">
              일상의 통화가 모여
            </p>

            <h2 className="mt-4 text-[40px] font-extrabold leading-[1.2] tracking-[-0.05em] text-[#35433E] sm:text-[52px] lg:text-[62px]">
              <span className="text-[#20C986]">다시 대화</span>할 수 있도록
            </h2>

            <div className="mt-40 lg:mt-80">
              <p className="text-[20px] font-bold tracking-[-0.03em] text-[#20C986]">
                Voice Persona
              </p>

              <p className="mt-3 text-[30px] font-extrabold tracking-[-0.04em] text-[#20C986] sm:text-[36px]">
                보이스 페르소나
              </p>
            </div>
          </div>

          {/* Right phone image */}
          <div className="flex justify-center lg:justify-end lg:pr-28 xl:pr-36 lg:-translate-y-10">
            <img
              src={voicePersonaPhone}
              alt="TalkTo 보이스 페르소나 대화 화면"
              className="h-[650px] w-auto object-contain sm:h-[720px] lg:h-[900px] xl:h-[980px]"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-28 max-w-[720px] lg:mt-36">
          <p className="text-[18px] font-semibold leading-[1.8] tracking-[-0.03em] text-[#7D847F] sm:text-[22px]">
            통화 녹음 업로드로 목소리를 모아
            <br />
            그리운 분의 페르소나 AI를 만들어 다시 이야기 해볼 수 있어요
          </p>
        </div>
      </div>
    </section>
  );
}

export default VoicePersonaSection;
