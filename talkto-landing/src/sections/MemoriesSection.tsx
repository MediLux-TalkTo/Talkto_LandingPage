import memoriesPhone from "../assets/images/memories-phone.png";

type MemoryItem = {
  keyword: string;
  title: string;
  summary: string;
  dateText: string;
  originalText: string;
  sourceText: string;
};

const memoryItems: MemoryItem[] = [
  {
    keyword: "내 이름 유래",
    title: "아버지가 말씀하신 이름의 유래",
    summary:
      "아버지는 당신의 이름을 오래 사랑받으라는 마음으로 고민하며 지으셨어요.",
    dateText: "2023.06.08. 아버지의 음성녹음에서 검색되었어요",
    originalText: "오래 사랑 받으라고 지은 이름이니까 잘 살아야한다",
    sourceText: "2:37부터 · 아버지와의 주말 통화",
  },
  {
    keyword: "좋아하던 노래",
    title: "어머니가 가장 좋아하시던 노래",
    summary:
      "어머니는 이문세의 노래들을 좋아하셨어요. 통화에서 언급된 노래들이에요.",
    dateText: "2023.06.08. 어머니의 음성녹음에서 검색되었어요",
    originalText: "이문세 노래들이 어렸을 땐 몰랐는데 가사가 울림이 있어",
    sourceText: "2:37부터 · 어머니와의 주말 통화",
  },
  {
    keyword: "힘들었던 날",
    title: "어머니의 위로",
    summary: "어머니께서 힘들다고 한 당신에게 가장 많이 하신 말씀이에요.",
    dateText: "2023.06.08. 어머니의 음성녹음에서 검색되었어요",
    originalText: "딸 괜찮아 다 지나가 조금만 더 버텨",
    sourceText: "2:37부터 · 어머니와의 주말 통화",
  },
];

function Waveform() {
  const bars = [
    8, 12, 18, 10, 22, 15, 28, 17, 12, 20, 31, 14, 18, 25, 13, 19, 10, 24, 16,
    29, 12, 18, 22, 11, 16, 20, 14, 26, 12, 18,
  ];

  return (
    <div className="flex h-8 flex-1 items-end gap-[3px]">
      {bars.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className="w-[2px] rounded-full bg-[#FFB08A]"
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  );
}

function MemoryCard({ item }: { item: MemoryItem }) {
  return (
    <article className="relative w-full rounded-[24px] border border-[#DDF5E8] bg-white p-6 shadow-[0_12px_28px_rgba(28,174,112,0.14)]">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#FFC766] text-sm text-white">
          ✦
        </div>

        <div>
          <p className="text-[13px] font-bold text-[#5B5B55]">AI 제안</p>
          <p className="mt-1 text-[10px] text-[#A5A29D]">
            통화 속 말씀을 그대로 옮겼어요
          </p>
        </div>
      </div>

      <h3 className="mt-6 text-[21px] font-bold tracking-[-0.04em] text-[#3F423F]">
        {item.title}
      </h3>

      <div className="mt-4 rounded-[14px] border border-[#F0E7DA] bg-[#FFFCF6] px-4 py-3">
        <p className="text-[13px] leading-[1.7] text-[#74716C]">
          {item.summary}
        </p>
      </div>

      <p className="mt-5 text-[11px] text-[#A6A29D]">
        이 답변은 저장된 음성 원본을 바탕으로 AI가 작성했어요.
      </p>

      <div className="my-5 h-px bg-[#ECE8E3]" />

      <p className="text-[11px] font-medium text-[#17A367]">
        ✦ {item.dateText}
      </p>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8F8EE] text-lg">
          👵
        </div>

        <p className="line-clamp-2 text-[15px] leading-[1.5] text-[#4E504D]">
          {item.originalText}
        </p>
      </div>

      <div className="mt-4 flex items-end gap-3">
        <Waveform />

        <span className="shrink-0 text-[11px] font-semibold text-[#FF806D]">
          2:37
          <span className="text-[#8E8A85]"> / 18:42</span>
        </span>
      </div>

      <button
        type="button"
        className="mt-5 flex w-full items-center justify-between rounded-[14px] bg-[#FFF8EF] px-4 py-3 text-left"
      >
        <span className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFB38D] text-xs text-white">
            ▶
          </span>

          <span>
            <span className="block text-[13px] font-bold text-[#5A5752]">
              기록에서 보기
            </span>

            <span className="mt-1 block text-[10px] text-[#A7A29D]">
              {item.sourceText}
            </span>
          </span>
        </span>

        <span className="text-[#97918B]">›</span>
      </button>

      <div className="mt-5 flex items-center justify-end gap-2 text-[12px] font-medium text-[#1DA56B]">
        저장하고 공유하기
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#E4F8EC]">
          ⇩
        </span>
      </div>
    </article>
  );
}

function MemoriesSection() {
  return (
    <section
      id="archive"
      className="relative overflow-hidden bg-[#FFFDF9] px-6 py-24 sm:py-28 lg:py-36"
    >
      {/* Background circles */}
      <div className="pointer-events-none absolute -left-20 top-16 h-[330px] w-[330px] rounded-full bg-[#FFF8F1] opacity-70" />
      <div className="pointer-events-none absolute left-[33%] top-10 h-[360px] w-[360px] rounded-full bg-[#FFF9F4] opacity-70" />
      <div className="pointer-events-none absolute right-[-80px] top-20 h-[350px] w-[350px] rounded-full bg-[#FFF4F4] opacity-70" />
      <div className="pointer-events-none absolute bottom-16 left-[15%] h-[300px] w-[300px] rounded-full bg-[#F7FCF8] opacity-80" />
      <div className="pointer-events-none absolute bottom-10 right-[16%] h-[300px] w-[300px] rounded-full bg-[#FFF7F6] opacity-70" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="flex items-start justify-between gap-8">
          <div>
            <p className="text-[30px] font-bold tracking-[-0.04em] text-[#44534D] sm:text-[38px] lg:text-[46px]">
              업로드된 통화를
            </p>

            <h2 className="mt-4 text-[42px] font-extrabold leading-[1.2] tracking-[-0.05em] text-[#34423D] sm:text-[54px] lg:text-[64px]">
              <span className="text-[#20C986]">쉽게 요약</span>할 수 있도록
            </h2>
          </div>

          <div className="hidden text-right lg:block">
            <p className="text-[22px] font-bold text-[#20C986]">Memories</p>
            <p className="mt-2 text-[38px] font-extrabold text-[#20C986]">
              기록
            </p>
          </div>
        </div>

        {/* Phone background */}
        <div className="pointer-events-none absolute right-[5%] top-[0px] hidden lg:block">
          <img
            src={memoriesPhone}
            alt=""
            aria-hidden="true"
            className="w-[580px] rotate-[8deg] object-contain opacity-90 xl:w-[680px]"
          />
        </div>

        {/* Memory cards */}
        <div className="relative z-10 mt-28 grid grid-cols-1 gap-10 lg:mt-40 lg:grid-cols-3 lg:gap-16">
          {memoryItems.map((item, index) => (
            <div
              key={item.keyword}
              className={
                index === 0
                  ? "lg:translate-y-0"
                  : index === 1
                  ? "lg:translate-y-36"
                  : "lg:translate-y-12"
              }
            >
              {/* Search keyword */}
              <div className="mb-12 flex h-[58px] items-center gap-4 rounded-[16px] bg-[#F8F6F1] px-5 shadow-[0_6px_16px_rgba(72,61,51,0.04)]">
                <span className="text-[20px] text-[#12A665]">⌕</span>

                <span className="text-[17px] font-semibold tracking-[-0.03em] text-[#3F4541]">
                  {item.keyword}
                </span>
              </div>

              <MemoryCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MemoriesSection;
