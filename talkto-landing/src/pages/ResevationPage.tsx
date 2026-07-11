import talkToLogo from "../assets/logo/talkto-logo.svg";

import {
  useMemo,
  useState,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";
import Header from "../components/Header";

type ParticipationType = "preview" | "survey" | "interview";

type ParticipationOption = {
  id: ParticipationType;
  title: string;
  description: string;
  tags: string[];
};

type InterviewTime =
  | "weekday-day"
  | "weekday-evening"
  | "weekend-day"
  | "weekend-evening";

type ContactMethod = "phone" | "kakao" | "email" | "video";

type RecordingAmount = "none" | "under-10" | "10-to-30" | "over-30";

const participationOptions: ParticipationOption[] = [
  {
    id: "preview",
    title: "체험 안내 먼저 받기",
    description: "사전등록 후 정식 서비스 출시 전 체험 안내를 먼저 받아요.",
    tags: ["사전 등록만"],
  },
  {
    id: "survey",
    title: "첫 이용 10% 할인",
    description: "짧은 설문에 답하고 체험 서비스에 더 빠르게 초대받아요.",
    tags: ["사전 등록", "1분 설문"],
  },
  {
    id: "interview",
    title: "첫 이용 20% 할인",
    description:
      "TalkTo 팀과 이야기하고 20% 할인된 가격으로 베타 버전을 지금 바로 사용해봐요.",
    tags: ["사전 등록", "30분 인터뷰 신청", "베타 버전 이용"],
  },
];

type SurveyChoiceProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

function SurveyChoice({ label, selected, onClick }: SurveyChoiceProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex min-h-[48px] w-full items-center gap-3 rounded-[8px] border px-5 py-3 text-left text-[15px] font-medium transition-all ${
        selected
          ? "border-[#20C986] bg-[#F1FCF7] text-[#098F57]"
          : "border-[#D5DBD6] bg-white text-[#777E78] hover:border-[#9DDFC2]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-5 w-5 shrink-0 rounded-full border-[3px] ${
          selected
            ? "border-[#20C986] bg-[#20C986] shadow-[inset_0_0_0_3px_white]"
            : "border-[#D2D7D3] bg-white"
        }`}
      />

      {label}
    </button>
  );
}

type InterviewChoiceProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

function InterviewChoice({ label, selected, onClick }: InterviewChoiceProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-[48px] w-full items-center gap-3 rounded-[8px] border px-5 py-3 text-left text-[15px] font-medium transition-all ${
        selected
          ? "border-[#20C986] bg-[#F1FCF7] text-[#098F57]"
          : "border-[#D5DBD6] bg-white text-[#777E78] hover:border-[#9DDFC2]"
      }`}
    >
      <span
        className={`h-5 w-5 shrink-0 rounded-full border-[3px] ${
          selected
            ? "border-[#20C986] bg-[#20C986] shadow-[inset_0_0_0_3px_white]"
            : "border-[#D2D7D3] bg-white"
        }`}
      />

      {label}
    </button>
  );
}

function ReservationPage() {
  const [participationType, setParticipationType] =
    useState<ParticipationType>("preview");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [reason, setReason] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [firstSituation, setFirstSituation] = useState("");

  const [voiceRecordingAmount, setVoiceRecordingAmount] = useState("");

  const [pastDifficulty, setPastDifficulty] = useState("");

  const [missingFeeling, setMissingFeeling] = useState("");

  const [wantedFeatures, setWantedFeatures] = useState<string[]>([]);

  const [voicePersonaOpinion, setVoicePersonaOpinion] = useState("");

  const [mainConcerns, setMainConcerns] = useState<string[]>([]);
  const [interviewTimes, setInterviewTimes] = useState<InterviewTime[]>([]);
  const [preferredContactMethod, setPreferredContactMethod] = useState<
    ContactMethod | ""
  >("");
  const [recordingAmount, setRecordingAmount] = useState<RecordingAmount | "">(
    ""
  );

  const toggleMultipleChoice = (
    value: string,
    setter: Dispatch<SetStateAction<string[]>>
  ) => {
    setter((currentValues) =>
      currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value]
    );
  };
  const toggleInterviewTime = (time: InterviewTime) => {
    setInterviewTimes((currentTimes) =>
      currentTimes.includes(time)
        ? currentTimes.filter((item) => item !== time)
        : [...currentTimes, time]
    );
  };

  const handleParticipationTypeChange = (type: ParticipationType) => {
    setParticipationType(type);

    if (type !== "survey") {
      setFirstSituation("");
      setVoiceRecordingAmount("");
      setPastDifficulty("");
      setMissingFeeling("");
      setWantedFeatures([]);
      setVoicePersonaOpinion("");
      setMainConcerns([]);
    }

    if (type !== "interview") {
      setInterviewTimes([]);
      setPreferredContactMethod("");
      setRecordingAmount("");
    }
  };

  const isSurveyValid = useMemo(() => {
    if (participationType !== "survey") {
      return true;
    }

    return (
      firstSituation !== "" &&
      voiceRecordingAmount !== "" &&
      pastDifficulty !== "" &&
      missingFeeling !== "" &&
      wantedFeatures.length > 0 &&
      voicePersonaOpinion !== "" &&
      mainConcerns.length > 0
    );
  }, [
    participationType,
    firstSituation,
    voiceRecordingAmount,
    pastDifficulty,
    missingFeeling,
    wantedFeatures,
    voicePersonaOpinion,
    mainConcerns,
  ]);

  const isInterviewValid = useMemo(() => {
    if (participationType !== "interview") {
      return true;
    }

    return (
      interviewTimes.length > 0 &&
      preferredContactMethod !== "" &&
      recordingAmount !== ""
    );
  }, [
    participationType,
    interviewTimes,
    preferredContactMethod,
    recordingAmount,
  ]);

  const isFormValid = useMemo(() => {
    return (
      name.trim().length > 0 &&
      contact.trim().length > 0 &&
      reason.length > 0 &&
      agreed &&
      isSurveyValid &&
      isInterviewValid
    );
  }, [name, contact, reason, agreed, isSurveyValid, isInterviewValid]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    const formData = {
      participationType,
      name,
      contact,
      reason,
      agreed,

      survey:
        participationType === "survey"
          ? {
              firstSituation,
              voiceRecordingAmount,
              pastDifficulty,
              missingFeeling,
              wantedFeatures,
              voicePersonaOpinion,
              mainConcerns,
            }
          : null,

      interview:
        participationType === "interview"
          ? {
              interviewTimes,
              preferredContactMethod,
              recordingAmount,
            }
          : null,
    };

    console.log("사전예약 신청:", formData);

    alert("사전등록 신청이 완료되었습니다.");
  };

  return (
    <div className="min-h-screen bg-[#FBFCFA]">
      <Header />

      <main className="px-6 pb-36 pt-[130px] lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          {/* Intro */}
          <section>
            <h1 className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[38px] font-extrabold leading-[1.25] tracking-[-0.05em] text-[#35433E] sm:text-[48px] lg:text-[58px]">
              <img
                src={talkToLogo}
                alt="TalkTo"
                className="h-[42px] w-auto sm:h-[52px] lg:h-[58px]"
              />

              <span>를 가장 먼저 체험해보세요</span>
            </h1>

            <p className="mt-7 text-[17px] font-medium leading-[1.8] tracking-[-0.025em] text-[#4D5550] sm:text-[19px]">
              사전 신청만 해도 출시 전 체험 안내를 받을 수 있어요
              <br />
              짧은 설문이나 인터뷰에 참여하면 더 먼저 초대받을 수 있어요
            </p>
          </section>

          <form onSubmit={handleSubmit} className="mt-20">
            {/* Participation method */}
            <section>
              <div className="flex flex-wrap items-center gap-4">
                <h2 className="text-[26px] font-bold tracking-[-0.04em] text-[#313633] sm:text-[30px]">
                  1. 참여 방법을 선택해주세요
                </h2>

                <span className="text-[13px] font-medium text-[#858B86]">
                  중복 선택 불가
                </span>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {participationOptions.map((option) => {
                  const isSelected = participationType === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleParticipationTypeChange(option.id)}
                      className={`min-h-[190px] rounded-[20px] border-2 p-8 text-left transition-all ${
                        isSelected
                          ? "border-[#20C986] bg-[#F2FCF7]"
                          : "border-[#E5E8E4] bg-white hover:border-[#A8E6CA]"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`mt-1 h-6 w-6 shrink-0 rounded-full border-[3px] ${
                            isSelected
                              ? "border-[#20C986] bg-[#20C986] shadow-[inset_0_0_0_4px_white]"
                              : "border-[#D5D9D5] bg-white"
                          }`}
                        />

                        <div>
                          <h3 className="text-[22px] font-bold tracking-[-0.03em] text-[#098F57]">
                            {option.title}
                          </h3>

                          <p className="mt-3 text-[15px] leading-[1.6] text-[#777E78]">
                            {option.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-7 flex flex-wrap items-center gap-2">
                        {option.tags.map((tag, index) => (
                          <span key={tag} className="flex items-center gap-2">
                            {index > 0 && (
                              <span className="text-[#A7AAA7]">+</span>
                            )}

                            <span className="rounded-[8px] bg-[#FFF1EE] px-3 py-2 text-[12px] font-bold text-[#9B514A]">
                              {tag}
                            </span>
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {participationType === "survey" && (
              <section className="mt-20">
                <h2 className="text-[26px] font-bold tracking-[-0.04em] text-[#313633] sm:text-[30px]">
                  2. 1분 설문
                </h2>

                <p className="mt-3 text-[15px] font-medium text-[#777E78]">
                  모든 필수 문항에 답하면 사전 등록을 완료할 수 있습니다.
                </p>

                <div className="mx-auto mt-10 max-w-[900px] rounded-[20px] border border-[#CFE9DA] bg-[#EAFBF2] px-5 py-8 sm:px-10">
                  {/* Question 1 */}
                  <div className="rounded-[16px] bg-white px-6 py-6 sm:px-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[18px] font-bold leading-[1.5] tracking-[-0.03em] text-[#2F3531]">
                        1. TalkTo를 보고 가장 먼저 떠오른 상황은 무엇인가요?
                      </h3>

                      <span className="text-[12px] font-medium text-[#E76E63]">
                        단일 선택 · 필수
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                      {[
                        "살아계신 부모님/조부모님의 목소리와 이야기를 남기고 싶다",
                        "돌아가신 가족의 목소리나 대화를 다시 찾고 싶다",
                        "돌아가신 가족의 기록이 거의 없어 아쉽다",
                        "내 목소리와 이야기를 가족에게 남기고 싶다",
                        "서비스가 궁금하다",
                      ].map((item) => (
                        <SurveyChoice
                          key={item}
                          label={item}
                          selected={firstSituation === item}
                          onClick={() => setFirstSituation(item)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div className="mt-5 rounded-[16px] bg-white px-6 py-6 sm:px-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[18px] font-bold leading-[1.5] tracking-[-0.03em] text-[#2F3531]">
                        2. 가족의 통화 녹음이나 음성 파일이 있나요?
                      </h3>

                      <span className="text-[12px] font-medium text-[#E76E63]">
                        단일 선택 · 필수
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                      {[
                        "10개 이상 있다",
                        "3~9개 있다",
                        "1~2개 있다",
                        "있을 것 같지만 아직 찾아보지 않았다",
                        "사진/영상/문자는 있지만 음성은 없다",
                        "전혀 없다",
                      ].map((item) => (
                        <SurveyChoice
                          key={item}
                          label={item}
                          selected={voiceRecordingAmount === item}
                          onClick={() => setVoiceRecordingAmount(item)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className="mt-5 rounded-[16px] bg-white px-6 py-6 sm:px-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[18px] font-bold leading-[1.5] tracking-[-0.03em] text-[#2F3531]">
                        3. 가족 목소리나 대화를 다시 찾거나 정리할 때 불편했던
                        적이 있나요?
                      </h3>

                      <span className="text-[12px] font-medium text-[#E76E63]">
                        단일 선택 · 필수
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                      {[
                        "원하는 녹음이나 영상을 찾기 어려웠다",
                        "기록이 여러 곳에 흩어져 있어 정리하기 어려웠다",
                        "다시 듣고 싶었지만 따로 찾아보지는 않았다",
                        "애초에 찾거나 정리해야겠다는 생각을 해본 적이 없다",
                        "특별히 불편함을 느낀 적은 없다",
                        "잘 모르겠다",
                      ].map((item) => (
                        <SurveyChoice
                          key={item}
                          label={item}
                          selected={pastDifficulty === item}
                          onClick={() => setPastDifficulty(item)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Question 4 */}
                  <div className="mt-5 rounded-[16px] bg-white px-6 py-6 sm:px-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[18px] font-bold leading-[1.5] tracking-[-0.03em] text-[#2F3531]">
                        4. 가족의 목소리나 평소 대화가 사라진다면 얼마나 아쉬울
                        것 같나요?
                      </h3>

                      <span className="text-[12px] font-medium text-[#E76E63]">
                        5점 척도 · 필수
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-5">
                      {[
                        "1 전혀 아쉽지 않다",
                        "2 별로 아쉽지 않다",
                        "3 보통이다",
                        "4 꽤 아쉽다",
                        "5 매우 아쉽다",
                      ].map((item) => (
                        <SurveyChoice
                          key={item}
                          label={item}
                          selected={missingFeeling === item}
                          onClick={() => setMissingFeeling(item)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Question 5 */}
                  <div className="mt-5 rounded-[16px] bg-white px-6 py-6 sm:px-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[18px] font-bold leading-[1.5] tracking-[-0.03em] text-[#2F3531]">
                        5. 가장 써보고 싶은 기능은 무엇인가요?
                      </h3>

                      <span className="text-[12px] font-medium text-[#E76E63]">
                        복수 선택 · 필수
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                      {[
                        "보관하기: 흩어진 통화 녹음과 음성파일을 한 곳에 모아두는 것",
                        "정리하기: 나중에 다시 찾기 쉽게 정리해두는 것",
                        "검색하기: 원하는 기억이나 대화 내용을 쉽게 찾는 것",
                        "공유하기: 가족과 기록을 함께 보고 나누는 것",
                        "Voice Persona: 기록을 바탕으로 AI 음성 대화를 만드는 것",
                        "아직 특별히 필요한 도움은 없다",
                      ].map((item) => (
                        <SurveyChoice
                          key={item}
                          label={item}
                          selected={wantedFeatures.includes(item)}
                          onClick={() =>
                            toggleMultipleChoice(item, setWantedFeatures)
                          }
                        />
                      ))}
                    </div>
                  </div>

                  {/* Question 6 */}
                  <div className="mt-5 rounded-[16px] bg-white px-6 py-6 sm:px-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[18px] font-bold leading-[1.5] tracking-[-0.03em] text-[#2F3531]">
                        6. 그리운 분의 목소리로 전화하듯 대화하는 기능인 Voice
                        Persona에 대한 첫 느낌은 어떤가요?
                      </h3>

                      <span className="text-[12px] font-medium text-[#E76E63]">
                        단일 선택 · 필수
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                      {[
                        "꼭 써보고 싶다",
                        "관심은 있지만 조금 조심스럽다",
                        "보관/검색 기능은 좋지만 Voice Persona는 부담스럽다",
                        "윤리적, 감정적으로 불편하다",
                        "무섭거나 거부감이 든다",
                        "잘 모르겠다",
                      ].map((item) => (
                        <SurveyChoice
                          key={item}
                          label={item}
                          selected={voicePersonaOpinion === item}
                          onClick={() => setVoicePersonaOpinion(item)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Question 7 */}
                  <div className="mt-5 rounded-[16px] bg-white px-6 py-6 sm:px-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[18px] font-bold leading-[1.5] tracking-[-0.03em] text-[#2F3531]">
                        7. 가장 걱정되는 점은 어떤 것인가요?
                      </h3>

                      <span className="text-[12px] font-medium text-[#E76E63]">
                        복수 선택 · 필수
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                      {[
                        "목소리와 개인정보 보관",
                        "그리운 분과는 다른 말을 할까봐",
                        "슬픈 감정이 커질까봐",
                        "가격이 너무 비쌀까봐",
                      ].map((item) => (
                        <SurveyChoice
                          key={item}
                          label={item}
                          selected={mainConcerns.includes(item)}
                          onClick={() =>
                            toggleMultipleChoice(item, setMainConcerns)
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {participationType === "interview" && (
              <section className="mt-20">
                <h2 className="text-[26px] font-bold tracking-[-0.04em] text-[#313633] sm:text-[30px]">
                  2. 30분 인터뷰 신청
                </h2>

                <p className="mt-3 text-[15px] font-medium text-[#777E78]">
                  가능한 시간대를 골라주세요.
                </p>

                <div className="mx-auto mt-10 max-w-[900px] rounded-[20px] border border-[#CFE9DA] bg-[#EAFBF2] px-5 py-8 sm:px-10">
                  {/* Interview Question 1 */}
                  <div className="rounded-[16px] bg-white px-6 py-6 sm:px-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[18px] font-bold tracking-[-0.03em] text-[#2F3531]">
                        1. 인터뷰 시간대
                      </h3>

                      <span className="text-[12px] font-medium text-[#737A74]">
                        복수 선택 가능
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <InterviewChoice
                        label="평일 낮"
                        selected={interviewTimes.includes("weekday-day")}
                        onClick={() => toggleInterviewTime("weekday-day")}
                      />

                      <InterviewChoice
                        label="평일 저녁"
                        selected={interviewTimes.includes("weekday-evening")}
                        onClick={() => toggleInterviewTime("weekday-evening")}
                      />

                      <InterviewChoice
                        label="주말 낮"
                        selected={interviewTimes.includes("weekend-day")}
                        onClick={() => toggleInterviewTime("weekend-day")}
                      />

                      <InterviewChoice
                        label="주말 저녁"
                        selected={interviewTimes.includes("weekend-evening")}
                        onClick={() => toggleInterviewTime("weekend-evening")}
                      />
                    </div>
                  </div>

                  {/* Interview Question 2 */}
                  <div className="mt-5 rounded-[16px] bg-white px-6 py-6 sm:px-10">
                    <label>
                      <span className="text-[18px] font-bold tracking-[-0.03em] text-[#2F3531]">
                        2. 가장 편한 연락 방법
                      </span>

                      <div className="relative mt-5">
                        <select
                          value={preferredContactMethod}
                          onChange={(event) =>
                            setPreferredContactMethod(
                              event.target.value as ContactMethod | ""
                            )
                          }
                          className="h-[52px] w-full appearance-none rounded-[8px] border border-[#CBD3CC] bg-white px-5 pr-12 text-[15px] text-[#656D67] outline-none transition-colors focus:border-[#20C986]"
                        >
                          <option value="">선택해주세요</option>
                          <option value="phone">전화</option>
                          <option value="kakao">카카오톡</option>
                          <option value="email">이메일</option>
                          <option value="video">화상 미팅</option>
                        </select>

                        <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#778078]">
                          ⌄
                        </span>
                      </div>
                    </label>
                  </div>

                  {/* Interview Question 3 */}
                  <div className="mt-5 rounded-[16px] bg-white px-6 py-6 sm:px-10">
                    <label>
                      <span className="text-[18px] font-bold tracking-[-0.03em] text-[#2F3531]">
                        3. 가지고 있는 통화 녹음 분량
                      </span>

                      <div className="relative mt-5">
                        <select
                          value={recordingAmount}
                          onChange={(event) =>
                            setRecordingAmount(
                              event.target.value as RecordingAmount | ""
                            )
                          }
                          className="h-[52px] w-full appearance-none rounded-[8px] border border-[#CBD3CC] bg-white px-5 pr-12 text-[15px] text-[#656D67] outline-none transition-colors focus:border-[#20C986]"
                        >
                          <option value="">선택해주세요</option>
                          <option value="none">아직 없어요</option>
                          <option value="under-10">10분 미만</option>
                          <option value="10-to-30">10분 이상 30분 미만</option>
                          <option value="over-30">30분 이상</option>
                        </select>

                        <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#778078]">
                          ⌄
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </section>
            )}

            {/* Contact information */}
            <section className="mt-20">
              <h2 className="text-[26px] font-bold tracking-[-0.04em] text-[#313633] sm:text-[30px]">
                {participationType === "preview" ? "2." : "3."} 연락 받을 정보를
                남겨주세요
              </h2>

              <div className="mx-auto mt-10 max-w-[1000px] rounded-[24px] border border-[#DDDCD4] bg-[#FFFCF5] px-7 py-9 sm:px-12 sm:py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <label>
                    <span className="text-[17px] font-bold text-[#383D39]">
                      이름
                    </span>

                    <input
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="홍길동"
                      className="mt-3 h-[52px] w-full rounded-[8px] border border-[#BFC8C1] bg-white px-5 text-[16px] outline-none transition-colors placeholder:text-[#999F9A] focus:border-[#20C986]"
                    />
                  </label>

                  <label>
                    <span className="flex flex-wrap items-baseline gap-3">
                      <span className="text-[17px] font-bold text-[#383D39]">
                        연락처
                      </span>

                      <span className="text-[12px] text-[#6F756F]">
                        휴대폰 번호 혹은 이메일
                      </span>
                    </span>

                    <input
                      type="text"
                      value={contact}
                      onChange={(event) => setContact(event.target.value)}
                      placeholder="010-0000-0000 / email@talkto.com"
                      className="mt-3 h-[52px] w-full rounded-[8px] border border-[#BFC8C1] bg-white px-5 text-[16px] outline-none transition-colors placeholder:text-[#999F9A] focus:border-[#20C986]"
                    />
                  </label>
                </div>

                <label className="mt-9 block">
                  <span className="text-[17px] font-bold text-[#383D39]">
                    신청 이유
                  </span>

                  <select
                    value={reason}
                    onChange={(event) => setReason(event.target.value)}
                    className="mt-3 h-[52px] w-full appearance-none rounded-[8px] border border-[#BFC8C1] bg-white px-5 text-[16px] text-[#676E68] outline-none focus:border-[#20C986]"
                  >
                    <option value="">선택해주세요</option>
                    <option value="parent-memory">
                      부모님의 목소리와 기억을 남기고 싶어요
                    </option>
                    <option value="deceased-family">
                      돌아가신 가족의 기록을 보존하고 싶어요
                    </option>
                    <option value="service-interest">
                      Voice Persona 서비스가 궁금해요
                    </option>
                    <option value="other">기타</option>
                  </select>
                </label>

                <label className="mt-14 flex cursor-pointer items-start gap-4">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(event) => setAgreed(event.target.checked)}
                    className="mt-0.5 h-6 w-6 shrink-0 accent-[#20C986]"
                  />

                  <span className="text-[15px] leading-[1.7] text-[#7A817B]">
                    베타 초대와 참여 안내를 위한 연락처 사용에 동의합니다.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`mt-6 flex h-[58px] w-full items-center justify-center rounded-[8px] text-[18px] font-bold transition-all ${
                    isFormValid
                      ? "bg-gradient-to-r from-[#28D1B6] to-[#78D55E] text-white hover:-translate-y-0.5"
                      : "cursor-not-allowed bg-[#D6D6D6] text-white"
                  }`}
                >
                  사전등록 완료하기
                </button>
              </div>

              <div className="mx-auto mt-8 flex max-w-[1000px] flex-col items-center justify-between gap-5 rounded-[18px] border border-[#D8EEE1] bg-[#F3FCF7] px-6 py-6 sm:flex-row sm:px-8">
                <div>
                  <p className="text-[16px] font-bold tracking-[-0.03em] text-[#343A36] sm:text-[18px]">
                    카카오톡 채널 이용 시 더 원활한 소통이 가능합니다.
                  </p>

                  <p className="mt-2 text-[13px] leading-[1.6] text-[#7A817B] sm:text-[14px]">
                    인터뷰 일정 조율과 베타 버전 이용 안내를 카카오톡으로 빠르게
                    받아보세요.
                  </p>
                </div>

                <a
                  href="https://pf.kakao.com/_nNwwX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[48px] w-full shrink-0 items-center justify-center rounded-[10px] bg-[#FEE500] px-6 text-[15px] font-bold text-[#191919] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_14px_rgba(0,0,0,0.10)] sm:w-auto"
                >
                  카카오톡 채널 추가하기
                </a>
              </div>
            </section>
          </form>
        </div>
      </main>

      <footer className="border-t border-[#E5E8E3] bg-white/60">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-6 py-7 sm:flex-row sm:items-center sm:justify-between lg:px-12 xl:px-20">
          <img src={talkToLogo} alt="TalkTo" className="h-7 w-auto" />

          <p className="text-[13px] text-[#777D75] sm:text-right">
            © 2026 TalkTo 베타 화면과 혜택은 운영 과정에서 일부 조정될 수
            있습니다.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ReservationPage;
