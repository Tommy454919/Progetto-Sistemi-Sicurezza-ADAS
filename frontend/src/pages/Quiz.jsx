import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X, ArrowRight, RotateCcw, Trophy, Compass } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Section from "@/components/common/Section";
import Button from "@/components/common/Button";
import ExploredBadge from "@/components/common/ExploredBadge";
import { quizQuestions, quizFeedback } from "@/data/quiz";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = quizQuestions.length;
  const q = quizQuestions[index];
  const progress = ((finished ? total : index) / total) * 100;

  const choose = (i) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (i === q.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (index + 1 >= total) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setAnswered(false);
  };

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  const percent = Math.round((score / total) * 100);
  const feedback = quizFeedback(percent);

  return (
    <>
      <ExploredBadge topic="quiz" />
      <PageHero
        eyebrow="Quiz"
        title="Metti alla prova le tue conoscenze"
        description="10 domande per scoprire quanto hai imparato su sistemi, sensori e automazione."
      />

      <Section className="pt-0 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* progress */}
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-brand-white" data-testid="quiz-progress-label">
                {finished ? "Completato" : `Domanda ${index + 1} / ${total}`}
              </span>
              <span className="text-brand-gray">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl border border-brand-gray/12 bg-brand-dark/50 p-7 sm:p-9"
              >
                <h2 className="font-display text-2xl font-semibold leading-snug text-brand-white" data-testid="quiz-question">
                  {q.question}
                </h2>

                <div className="mt-7 space-y-3">
                  {q.options.map((opt, i) => {
                    const isCorrect = i === q.correct;
                    const isSelected = i === selected;
                    let style =
                      "border-brand-gray/15 bg-white/[0.02] hover:border-brand-cyan/40 hover:bg-white/[0.04]";
                    if (answered && isCorrect)
                      style = "border-emerald-400/50 bg-emerald-400/[0.08]";
                    else if (answered && isSelected && !isCorrect)
                      style = "border-red-500/50 bg-red-500/[0.08]";
                    else if (answered) style = "border-brand-gray/10 bg-white/[0.01] opacity-60";

                    return (
                      <button
                        key={i}
                        onClick={() => choose(i)}
                        disabled={answered}
                        data-testid={`quiz-option-${i}`}
                        className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-sm font-medium text-brand-white transition-all ${style}`}
                      >
                        <span>{opt}</span>
                        {answered && isCorrect && (
                          <Check className="h-5 w-5 shrink-0 text-emerald-400" />
                        )}
                        {answered && isSelected && !isCorrect && (
                          <X className="h-5 w-5 shrink-0 text-red-400" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {answered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`mt-6 rounded-2xl border p-5 ${
                          selected === q.correct
                            ? "border-emerald-400/25 bg-emerald-400/[0.05]"
                            : "border-amber-400/25 bg-amber-400/[0.05]"
                        }`}
                        data-testid="quiz-explanation"
                      >
                        <div className="text-sm font-semibold text-brand-white">
                          {selected === q.correct ? "Risposta corretta!" : "Non proprio."}
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-brand-gray">
                          {q.explanation}
                        </p>
                      </div>
                      <div className="mt-6 flex justify-end">
                        <Button onClick={next} data-testid="quiz-continue">
                          {index + 1 >= total ? "Vedi i risultati" : "Continua"}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl border border-brand-cyan/25 bg-gradient-to-br from-brand-dark to-brand-black p-8 text-center sm:p-12"
                data-testid="quiz-result"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-cyan/15 text-brand-cyan">
                  <Trophy className="h-8 w-8" />
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-brand-cyan">
                  Missione completata
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold text-brand-white sm:text-4xl">
                  {feedback.title}
                </h2>
                <p className="mx-auto mt-3 max-w-md text-brand-gray">{feedback.message}</p>

                <div className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-brand-gray/12 bg-white/[0.02] p-5">
                    <div className="font-display text-3xl font-bold text-gradient-cyan" data-testid="quiz-score">
                      {score}/{total}
                    </div>
                    <div className="mt-1 text-xs text-brand-gray">Punteggio</div>
                  </div>
                  <div className="rounded-2xl border border-brand-gray/12 bg-white/[0.02] p-5">
                    <div className="font-display text-3xl font-bold text-gradient-cyan">
                      {percent}%
                    </div>
                    <div className="mt-1 text-xs text-brand-gray">Percentuale</div>
                  </div>
                  <div className="rounded-2xl border border-brand-gray/12 bg-white/[0.02] p-5">
                    <div className="font-display text-3xl font-bold text-gradient-cyan">
                      {score}
                    </div>
                    <div className="mt-1 text-xs text-brand-gray">Corrette</div>
                  </div>
                </div>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button onClick={restart} data-testid="quiz-retry">
                    <RotateCcw className="h-4 w-4" /> Riprova
                  </Button>
                  <Button to="/sistemi" variant="outline" data-testid="quiz-explore">
                    <Compass className="h-4 w-4" /> Esplora il sito
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>
    </>
  );
};

export default Quiz;
