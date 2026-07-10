import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "Voice Persona 는 실제 고인인가요?",
    answer:
      "아니요. 남겨진 기록과 목소리를 바탕으로 응답하는 기록 기반 AI예요.",
  },
  {
    question: "업로드한 목소리와 개인정보는 안전한가요?",
    answer:
      "네. 파일은 암호화되어 안전하게 보관되고, 외부에 제공되거나 판매되지 않아요.",
  },
  {
    question: "데이터는 언제든 삭제할 수 있나요?",
    answer: "네. 원하실 때 데이터 전체를 삭제할 수 있어요.",
  },
  {
    question: "AI가 만든 말은 구분되나요?",
    answer: "네. 원본 기록과 AI가 만든 응답은 명확히 구분돼요.",
  },
  {
    question: "통화 녹음 없이도 신청할 수 있나요?",
    answer:
      "네. 보유한 음성 파일이나 대화 기록만 있어도 신청할 수 있어요.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#FFFCF5] px-6 py-24 sm:py-28 lg:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[14%] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#FFF8F1] opacity-70" />

      <div className="relative mx-auto max-w-[1320px]">
        <h2 className="text-[36px] font-extrabold tracking-[-0.05em] text-[#078F57] sm:text-[44px] lg:text-[52px]">
          자주 묻는 질문
        </h2>

        <div className="mt-16 space-y-5 lg:mt-20">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className={`overflow-hidden rounded-[20px] border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#20C986]"
                    : "border-[#E5EEE7]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start gap-7 px-7 py-8 text-left sm:px-10 lg:gap-12 lg:px-14 lg:py-10"
                >
                  <span className="shrink-0 text-[28px] font-extrabold tracking-[-0.04em] text-[#07945B] sm:text-[32px] lg:text-[36px]">
                    Q{index + 1}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[22px] font-semibold leading-[1.45] tracking-[-0.04em] text-[#202322] sm:text-[26px] lg:text-[30px]">
                      {item.question}
                    </span>

                    <span
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "mt-7 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span className="block text-[17px] font-medium leading-[1.7] tracking-[-0.03em] text-[#7D847A] sm:text-[19px] lg:text-[21px]">
                          A. {item.answer}
                        </span>
                      </span>
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-8 w-8"
                    >
                      <path
                        d="M5 8.5L12 15.5L19 8.5"
                        stroke="#7E877B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;