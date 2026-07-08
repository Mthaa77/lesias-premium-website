"use client";

import { useMemo, useState } from "react";

type AnswerKey = "starter" | "teacher" | "owner" | "unsure";

const questions = [
  {
    title: "What future are you building toward?",
    caption: "Choose the answer that feels closest to your goal.",
    answers: [
      { key: "starter" as AnswerKey, label: "Start my ECD career", note: "Beginner / first qualification" },
      { key: "teacher" as AnswerKey, label: "Become a Grade R teacher", note: "Teaching confidence" },
      { key: "owner" as AnswerKey, label: "Open or formalise a daycare", note: "Business + compliance" },
      { key: "unsure" as AnswerKey, label: "I need guidance", note: "Admissions support" },
    ],
  },
  {
    title: "Which support matters most to you?",
    caption: "This helps position the right benefit in the final recommendation.",
    answers: [
      { key: "starter" as AnswerKey, label: "A clear starting point", note: "Foundation skills" },
      { key: "teacher" as AnswerKey, label: "Classroom leadership", note: "Advanced teaching" },
      { key: "owner" as AnswerKey, label: "Business management", note: "Daycare ownership" },
      { key: "unsure" as AnswerKey, label: "Someone to explain everything", note: "Personal guidance" },
    ],
  },
  {
    title: "How do you want to study?",
    caption: "Lesia's Saturday-only learning model is built for real life.",
    answers: [
      { key: "starter" as AnswerKey, label: "Saturdays while I build confidence", note: "Flexible foundation" },
      { key: "teacher" as AnswerKey, label: "Saturdays while preparing to teach", note: "Career progression" },
      { key: "owner" as AnswerKey, label: "Saturdays while running responsibilities", note: "Business-friendly" },
      { key: "unsure" as AnswerKey, label: "I want admissions to advise me", note: "Human support" },
    ],
  },
];

const results = {
  starter: {
    result: "Level 4 FET Certificate",
    match: "94% pathway match",
    tone: "Foundation route",
    description:
      "Best for beginners, aspiring daycare assistants, childcare workers, and students who want a strong recognised foundation before progressing into advanced ECD roles.",
    highlights: ["12 months", "NQF Level 4", "140 credits", "Saturday classes"],
  },
  teacher: {
    result: "Level 5 National Diploma",
    match: "91% pathway match",
    tone: "Teaching route",
    description:
      "Best for aspiring Grade R teachers and educators who want to lead classrooms independently with stronger curriculum, assessment, and teaching confidence.",
    highlights: ["18–24 months", "NQF Level 5", "240 credits", "Advanced pedagogy"],
  },
  owner: {
    result: "Level 5 National Diploma",
    match: "96% pathway match",
    tone: "Daycare ownership route",
    description:
      "The diploma route is powerful for daycare ownership because it includes business management, financial planning, marketing, compliance, staff supervision, and centre operations.",
    highlights: ["Business skills", "Compliance", "Leadership", "Centre management"],
  },
  unsure: {
    result: "Speak to Admissions",
    match: "Personal guidance recommended",
    tone: "Guided route",
    description:
      "Lesia's admissions team can help you choose between Level 4 and Level 5 based on your background, experience, documents, and career goals.",
    highlights: ["WhatsApp support", "Programme guidance", "Campus advice", "Application help"],
  },
};

export default function PathwayQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerKey[]>(["starter"]);

  const selected = useMemo(() => {
    const counts = answers.reduce<Record<AnswerKey, number>>(
      (acc, key) => ({ ...acc, [key]: acc[key] + 1 }),
      { starter: 0, teacher: 0, owner: 0, unsure: 0 }
    );

    return (Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] || "starter") as AnswerKey;
  }, [answers]);

  const result = results[selected];
  const current = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  const answerQuestion = (answer: AnswerKey) => {
    setAnswers((currentAnswers) => {
      const next = [...currentAnswers];
      next[step] = answer;
      return next;
    });
    if (step < questions.length - 1) setStep((value) => value + 1);
  };

  return (
    <section className="section pathway" id="pathway">
      <div className="container pathway-grid">
        <div className="section-copy sticky-copy">
          <p className="eyebrow">Advanced onboarding</p>
          <h2>Find your best ECD pathway with a luxury admissions quiz.</h2>
          <p>
            This component makes the website feel like a digital admissions advisor — guiding students to the right qualification before they even send a WhatsApp message.
          </p>
          <div className="quiz-result">
            <span>{result.match}</span>
            <h3>{result.result}</h3>
            <p>{result.description}</p>
            <div className="mini-tags">
              {result.highlights.map((tag) => (
                <strong key={tag}>{tag}</strong>
              ))}
            </div>
            <a className="btn btn-primary" href="#contact">
              Start my application
            </a>
          </div>
        </div>

        <div className="quiz-panel advanced-quiz">
          <div className="quiz-progress">
            <div><span style={{ width: `${progress}%` }} /></div>
            <strong>Step {step + 1} of {questions.length}</strong>
          </div>
          <p className="eyebrow">{result.tone}</p>
          <h3>{current.title}</h3>
          <p>{current.caption}</p>
          <div className="pathway-options">
            {current.answers.map((answer) => (
              <button
                key={`${step}-${answer.key}-${answer.label}`}
                className={`pathway-option ${answers[step] === answer.key ? "active" : ""}`}
                onClick={() => answerQuestion(answer.key)}
                type="button"
              >
                <span>{answer.note}</span>
                <strong>{answer.label}</strong>
              </button>
            ))}
          </div>
          <div className="quiz-controls">
            <button type="button" onClick={() => setStep((value) => Math.max(0, value - 1))} disabled={step === 0}>
              Back
            </button>
            <button type="button" onClick={() => setStep((value) => Math.min(questions.length - 1, value + 1))} disabled={step === questions.length - 1}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
