"use client";

import { useMemo, useState } from "react";

type AnswerKey = "starter" | "teacher" | "owner" | "unsure";

const questions = [
  {
    title: "What do you want your ECD qualification to help you become?",
    caption: "Choose the answer that feels closest to the future you are working toward.",
    answers: [
      { key: "starter" as AnswerKey, label: "I want to start professionally", note: "First qualification" },
      { key: "teacher" as AnswerKey, label: "I want to teach with confidence", note: "Teaching pathway" },
      { key: "owner" as AnswerKey, label: "I want to run a daycare", note: "Business pathway" },
      { key: "unsure" as AnswerKey, label: "I need help choosing", note: "Admissions guidance" },
    ],
  },
  {
    title: "What support would make the biggest difference for you?",
    caption: "Your answer helps match you with the programme promise that fits your situation.",
    answers: [
      { key: "starter" as AnswerKey, label: "A simple place to begin", note: "Foundation support" },
      { key: "teacher" as AnswerKey, label: "Stronger classroom confidence", note: "Teacher growth" },
      { key: "owner" as AnswerKey, label: "Business and compliance guidance", note: "Centre ownership" },
      { key: "unsure" as AnswerKey, label: "Someone to explain the options", note: "Personal support" },
    ],
  },
  {
    title: "What kind of learning schedule fits your life?",
    caption: "Lesia's Saturday classes are designed for students with real responsibilities.",
    answers: [
      { key: "starter" as AnswerKey, label: "Saturdays while I build my foundation", note: "Flexible start" },
      { key: "teacher" as AnswerKey, label: "Saturdays while I prepare to teach", note: "Career progress" },
      { key: "owner" as AnswerKey, label: "Saturdays while I manage other duties", note: "Business-friendly" },
      { key: "unsure" as AnswerKey, label: "I want admissions to guide me", note: "Human help" },
    ],
  },
];

const results = {
  starter: {
    result: "Level 4 FET Certificate",
    match: "Strong starting point",
    tone: "Foundation route",
    description:
      "A practical starting route for new students, aspiring daycare assistants, childcare workers, and anyone ready to enter ECD with a recognised foundation.",
    highlights: ["12 months", "NQF Level 4", "140 credits", "Saturday classes"],
  },
  teacher: {
    result: "Level 5 National Diploma",
    match: "Teacher-growth route",
    tone: "Teaching route",
    description:
      "A stronger route for aspiring Grade R teachers and educators who want deeper curriculum, assessment, and classroom leadership confidence.",
    highlights: ["18–24 months", "NQF Level 5", "240 credits", "Advanced teaching"],
  },
  owner: {
    result: "Level 5 National Diploma",
    match: "Daycare leadership route",
    tone: "Daycare ownership route",
    description:
      "A powerful route for students who want to manage, formalise, or open an ECD centre with stronger business, compliance, leadership, and operational confidence.",
    highlights: ["Business skills", "Compliance", "Leadership", "Centre management"],
  },
  unsure: {
    result: "Speak to Admissions",
    match: "Personal guidance recommended",
    tone: "Guided route",
    description:
      "Not sure yet? Admissions can help you choose the right programme based on your background, goals, documents, and available schedule.",
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
          <p className="eyebrow">Find your route</p>
          <h2>A simple quiz to help you choose the right ECD path.</h2>
          <p>
            Not every student starts in the same place. This short guide helps you understand whether Level 4, Level 5, or a personal admissions conversation makes the most sense.
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
