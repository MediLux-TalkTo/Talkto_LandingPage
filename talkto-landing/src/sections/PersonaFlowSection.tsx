type PersonaFlowItem = {
  question: string;
  personaAnswer: string;
  recordingTitle: string;
  recordingContent: string;
};

const personaFlowItems: PersonaFlowItem[] = [
  {
    question: "김치 어떻게 담가요?",
    personaAnswer:
      "김치는 배추를 소금에 절이는게 반이야. 급하면 꼭 티가 나. 너는 어릴 때부터 내가 담근 겉절이만 먹었잖니.",
    recordingTitle: "어머니의 김치",
    recordingContent:
      "김치를 담그려면 배추 사서 소금에 절이는 거부터 하면 돼. 그게 반이야. 이게 급하면 또 안되는 법이야. 배추 절이는 것부터 기다려야 돼. 넌 예전부터 내가 담근 겉절이만 먹었잖아.",
  },
  {
    question: "엄마 고향 이야기 해줘요",
    personaAnswer:
      "고향에 감나무 있던거 기억나니? 가을이 되면 온 동네 애들이 다 모였었는데. 너도 거기서 많이 놀았어.",
    recordingTitle: "어머니의 어린 시절 이야기",
    recordingContent:
      "그때는 마당에 감나무가 있었거든. 가을이면 온 동네 애들이 다 모여서 감 따 먹고 놀았지. 할머니가 곶감 만들어서 처마에 쭉 매달아 두면 그게 또 그렇게 맛있었어. 너도 어릴 때 그거 좋아했잖니.",
  },
  {
    question: "요즘 고민이 있어요",
    personaAnswer:
      "무슨 고민이 있어? 넌 항상 현명하게 잘 해나가서 든든해. 너무 힘들어하지 말고 쉴 땐 쉬어야돼.",
    recordingTitle: "힘들거나 고민이 있을 때",
    recordingContent:
      "왜 그래. 항상 잘 해왔으면서. 넌 현명해서 뭘 해도 될 거야. 내가 제일 자랑스러운게 넌데. 너무 조급해하지 말고, 힘들어하지 말고 가끔은 쉬어.",
  },
];

function Waveform() {
  const bars = [
    14, 25, 18, 36, 22, 31, 17, 29, 39, 21, 33, 19, 27, 42, 24, 35, 20, 31, 17,
    37, 23, 29, 40, 18, 34, 26, 32, 21,
  ];

  return (
    <div className="flex h-10 flex-1 items-center gap-[3px]">
      {bars.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className="w-[2px] rounded-full bg-[#FFA47D]"
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  );
}

function RecordingCard({ title, content }: { title: string; content: string }) {
  return (
    <article className="w-full rounded-[24px] border border-[#EEE9E4] bg-white px-6 py-6 shadow-[0_8px_20px_rgba(77,64,52,0.08)]">
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label={`${title} 녹음 재생`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFA47D] text-[14px] text-white"
        >
          ▶
        </button>

        <div className="min-w-0 flex-1">
          <Waveform />

          <div className="mt-1 flex items-center justify-between text-[11px] text-[#99938D]">
            <span>00:00</span>
            <span>12:34</span>
          </div>
        </div>
      </div>

      <div className="my-4 h-px bg-[#EEE9E4]" />

      <h3 className="text-[19px] font-semibold tracking-[-0.03em] text-[#625B55]">
        {title}
      </h3>

      <p className="mt-4 text-[12px] text-[#AAA39D]">내용</p>

      <p className="mt-2 text-[14px] leading-[1.8] tracking-[-0.02em] text-[#99928C]">
        {content}
      </p>
    </article>
  );
}

function PersonaFlowSection() {
  return (
    <section
      id="persona-flow"
      className="overflow-hidden bg-[#FFFDF9] px-6 py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Desktop column headings */}
        <div className="hidden grid-cols-[0.9fr_1.35fr_1fr] gap-12 px-4 text-center lg:grid">
          <p className="text-[22px] font-extrabold text-[#129A5A]">질문</p>

          <p className="text-[22px] font-extrabold text-[#129A5A]">
            보이스 페르소나
          </p>

          <p className="text-[22px] font-extrabold text-[#129A5A]">원본 녹음</p>
        </div>

        {/* Flow rows */}
        <div className="mt-16 space-y-16 lg:mt-20 lg:space-y-20">
          {personaFlowItems.map((item, index) => (
            <div
              key={item.question}
              className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.35fr_1fr] lg:gap-12"
            >
              {/* Horizontal connecting line */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[8%] right-[8%] top-1/2 hidden h-px -translate-y-1/2 bg-[#E8E0D9] lg:block"
              />

              {/* Question */}
              <div className="relative z-10 flex flex-col items-center lg:items-start">
                <p className="mb-3 text-[15px] font-bold text-[#129A5A] lg:hidden">
                  질문
                </p>

                <div className="rounded-full bg-[#E1F8EC] px-7 py-4 text-[17px] font-semibold tracking-[-0.03em] text-[#168C59] sm:text-[18px]">
                  {item.question}
                </div>
              </div>

              {/* Persona answer */}
              <div className="relative z-10 flex flex-col items-center">
                <p className="mb-3 text-[15px] font-bold text-[#129A5A] lg:hidden">
                  보이스 페르소나
                </p>

                <div className="w-full rounded-[28px] border border-[#F1ECE7] bg-[#FFFCFA] px-8 py-8 shadow-[0_7px_0_rgba(83,74,66,0.12)] sm:px-10 sm:py-9">
                  <p className="text-[18px] leading-[1.9] tracking-[-0.035em] text-[#514A45] sm:text-[21px]">
                    {item.personaAnswer}
                  </p>
                </div>
              </div>

              {/* Original recording */}
              <div className="relative z-10 flex flex-col items-center lg:items-stretch">
                <p className="mb-3 text-[15px] font-bold text-[#129A5A] lg:hidden">
                  원본 녹음
                </p>

                <RecordingCard
                  title={item.recordingTitle}
                  content={item.recordingContent}
                />
              </div>

              {/* 모바일 행 구분선 */}
              {index !== personaFlowItems.length - 1 && (
                <div className="mt-8 h-px bg-[#EEE8E2] lg:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PersonaFlowSection;
