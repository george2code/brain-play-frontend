'use client';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  PartyPopper,
  RotateCcw,
  Trophy,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { SignInDialog } from '@/components/auth/SignInDialog';
import { GameArtwork } from '@/components/games/GameArtwork';
import { GameRecommendations } from '@/components/games/GameRecommendations';
import { QuestionVisual } from '@/components/games/QuestionVisual';
import { AdSlot } from '@/components/shared/AdSlot';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

import { ROUTES } from '@/config/routes.config';

import { useDemoProfile } from '@/hooks/useDemoProfile';
import { FLAG_PROGRESS_EVENT, useFlagProgress } from '@/hooks/useFlagProgress';

import { useLocale } from '@/i18n/LocaleProvider';

import { cn } from '@/lib/utils';

import { DEMO_QUESTIONS } from '@/services/demo/demo.questions';
import { createFlagQuestions } from '@/services/demo/flags/flag-questions';
import { createNumberQuestions } from '@/services/demo/number-questions';
import {
  completeFlagRound,
  serverRoundToQuestions,
  startFlagRound,
} from '@/services/flag-master.service';

import type {
  DemoAttempt,
  DemoQuestion,
  GameDefinition,
  GeoQuestion,
  NumberLevel,
} from '@/shared/types/game.types';

const GeoMap = dynamic(() =>
  import('@/components/games/GeoMap').then((module) => module.GeoMap),
);

export function GameSession({
  game,
  dailyDate,
}: {
  game: GameDefinition;
  dailyDate?: string;
}) {
  const { locale, t } = useLocale();
  const { profile, complete } = useDemoProfile();
  const { history: savedFlagHistory } = useFlagProgress();
  const [phase, setPhase] = useState<'intro' | 'playing' | 'result'>('intro');
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [result, setResult] = useState<DemoAttempt | null>(null);
  const [flagQuestions, setFlagQuestions] = useState<DemoQuestion[]>([]);
  const [numberQuestions, setNumberQuestions] = useState<DemoQuestion[]>([]);
  const [geoQuestions, setGeoQuestions] = useState<GeoQuestion[]>([]);
  const [numberLevel, setNumberLevel] = useState<NumberLevel>('mixed');
  const [flagStorage, setFlagStorage] = useState<'cloud' | 'demo'>('demo');
  const [starting, setStarting] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const sessionId = useRef('');
  const answers = useRef<number[]>([]);
  const saved = useRef(false);
  const questions =
    game.code === 'flag-master'
      ? flagQuestions
      : game.code === 'number-iq'
        ? numberQuestions
        : game.code === 'geo-challenge'
          ? geoQuestions
          : DEMO_QUESTIONS[game.code];
  const question = questions[index];
  const geoQuestion =
    game.code === 'geo-challenge' ? (question as GeoQuestion) : null;
  const localDailyResult = dailyDate
    ? profile.attempts.find(
        (a) => a.mode === 'daily' && a.dailyDate === dailyDate,
      )
    : undefined;
  const savedDaily =
    dailyDate && game.code === 'flag-master'
      ? savedFlagHistory.find(
          (attempt) =>
            attempt.mode.code === 'daily' &&
            attempt.completedAt.slice(0, 10) === dailyDate,
        )
      : undefined;
  const dailyResult: DemoAttempt | undefined = savedDaily
    ? {
        id: savedDaily.id,
        game: 'flag-master',
        mode: 'daily',
        dailyDate,
        correct: savedDaily.correctAnswers,
        total: savedDaily.totalRounds,
        score: savedDaily.score,
        completedAt: savedDaily.completedAt,
        rulesVersion: 2,
      }
    : localDailyResult;
  const isCompletedDaily = !!dailyResult && phase === 'intro';
  const shownResult = result || dailyResult;
  const isCloudFlagResult =
    game.code === 'flag-master' &&
    (flagStorage === 'cloud' || Boolean(savedDaily));

  async function start() {
    if (starting) return;
    setStarting(true);
    let nextId = crypto.randomUUID();
    if (game.code === 'flag-master') {
      try {
        const round = await startFlagRound(dailyDate ? 'daily' : 'classic');
        setFlagQuestions(serverRoundToQuestions(round));
        setFlagStorage('cloud');
        nextId = round.roundId;
      } catch {
        setFlagQuestions(createFlagQuestions(dailyDate));
        setFlagStorage('demo');
      }
    }
    if (game.code === 'number-iq')
      setNumberQuestions(
        createNumberQuestions(dailyDate ? 'mixed' : numberLevel, dailyDate),
      );
    if (game.code === 'geo-challenge') {
      const { createGeoQuestions } =
        await import('@/services/demo/geo-questions');
      setGeoQuestions(createGeoQuestions(dailyDate));
    }
    sessionId.current = nextId;
    answers.current = [];
    saved.current = false;
    setSaveError(false);
    setIndex(0);
    setCorrect(0);
    setSelected(null);
    setResult(null);
    setPhase('playing');
    setStarting(false);
  }
  async function advance() {
    if (selected === null || saving || saved.current) return;
    answers.current[index] = selected;
    const nextCorrect = correct + Number(selected === question.answer);
    if (index < questions.length - 1) {
      setCorrect(nextCorrect);
      setIndex(index + 1);
      setSelected(null);
    } else {
      setSaving(true);
      let verifiedResult;
      if (game.code === 'flag-master' && flagStorage === 'cloud') {
        try {
          verifiedResult = await completeFlagRound(
            sessionId.current,
            answers.current,
          );
          window.dispatchEvent(new Event(FLAG_PROGRESS_EVENT));
        } catch {
          setSaveError(true);
          setSaving(false);
          return;
        }
      }
      saved.current = true;
      const attempt: DemoAttempt = {
        id: sessionId.current,
        game: game.code,
        mode: dailyDate ? 'daily' : 'practice',
        ...(dailyDate ? { dailyDate } : {}),
        correct: verifiedResult?.correctAnswers ?? nextCorrect,
        total: verifiedResult?.totalRounds ?? questions.length,
        score: verifiedResult?.score ?? nextCorrect * 100,
        completedAt: verifiedResult?.completedAt ?? new Date().toISOString(),
        ...(game.code === 'flag-master' ||
        game.code === 'number-iq' ||
        game.code === 'geo-challenge'
          ? { rulesVersion: 2 }
          : {}),
        ...(game.code === 'number-iq'
          ? { numberLevel: dailyDate ? 'mixed' : numberLevel }
          : {}),
      };
      if (!verifiedResult) complete(attempt);
      setResult(attempt);
      setPhase('result');
      setSaving(false);
    }
  }
  return (
    <div className="page-container py-8">
      <Link
        href={ROUTES.home}
        className="mb-7 inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft size={16} />
        {t.back}
      </Link>
      <div className="mx-auto max-w-[720px]">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="eyebrow text-primary">
            {dailyDate ? `${t.dailyMode} · ${dailyDate}` : t.practice}
          </span>
          <span className="rounded-full bg-secondary px-3 py-1.5 text-[11px] text-muted-foreground">
            {game.code === 'flag-master' &&
            phase === 'intro' &&
            !isCompletedDaily
              ? t.flagRoundSize
              : game.code === 'number-iq' &&
                  phase === 'intro' &&
                  !isCompletedDaily
                ? t.numberRoundSize
                : game.code === 'geo-challenge' &&
                    phase === 'intro' &&
                    !isCompletedDaily
                  ? t.geoRoundSize
                  : isCloudFlagResult
                    ? phase === 'playing'
                      ? t.flagCloudRound
                      : t.flagSaved
                    : t.demoNotice}
          </span>
        </div>
        {phase === 'intro' && !isCompletedDaily && (
          <section className="surface-card overflow-hidden">
            <GameArtwork code={game.code} className="h-56" />
            <div className="p-6 sm:p-9">
              <p className="eyebrow mb-3 text-muted-foreground">
                {game.category[locale]}
              </p>
              <h1 className="text-4xl font-semibold tracking-tight">
                {game.title}
              </h1>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {game.code === 'flag-master'
                  ? t.flagGameIntro
                  : game.code === 'number-iq'
                    ? t.numberIntro
                    : game.code === 'geo-challenge'
                      ? t.geoIntro
                      : t.gameIntro}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {game.code === 'flag-master'
                  ? t.flagRules
                  : game.code === 'number-iq'
                    ? t.numberRules
                    : game.code === 'geo-challenge'
                      ? t.geoRules
                      : t.demoRules}
              </p>
              {game.code === 'number-iq' && !dailyDate && (
                <div className="mt-6">
                  <p className="mb-2 text-sm font-medium">{t.numberLevel}</p>
                  <div
                    className="flex flex-wrap gap-2"
                    role="group"
                    aria-label={t.numberLevel}
                  >
                    {(['mixed', 'easy', 'medium', 'hard'] as const).map(
                      (level) => (
                        <Button
                          key={level}
                          type="button"
                          variant="outline"
                          aria-pressed={numberLevel === level}
                          onClick={() => setNumberLevel(level)}
                          className={cn(
                            'rounded-xl',
                            numberLevel === level &&
                              'border-primary bg-accent text-primary',
                          )}
                        >
                          {level === 'mixed'
                            ? t.numberMixed
                            : level === 'easy'
                              ? t.numberEasy
                              : level === 'medium'
                                ? t.numberMedium
                                : t.numberHard}
                        </Button>
                      ),
                    )}
                  </div>
                </div>
              )}
              <Button
                onClick={() => void start()}
                disabled={starting}
                className="mt-7 h-12 rounded-xl px-6"
              >
                {starting
                  ? t.loading
                  : game.code === 'flag-master'
                    ? t.flagStart
                    : t.start}
                <ArrowRight />
              </Button>
            </div>
          </section>
        )}
        {phase === 'playing' && (
          <section className="surface-card p-6 sm:p-9" aria-label={game.title}>
            <div className="mb-4 flex items-center justify-between gap-3">
              <h1 className="text-lg font-semibold">{game.title}</h1>
              <span className="text-xs text-muted-foreground">
                {t.round} {index + 1} {t.of} {questions.length}
              </span>
            </div>
            <Progress
              value={(index / questions.length) * 100}
              aria-label={`${t.round} ${index + 1} ${t.of} ${questions.length}`}
              className="mb-8"
            />
            <div aria-live="polite" aria-atomic="true">
              <h2 className="text-2xl leading-snug font-semibold tracking-tight">
                {question.prompt[locale]}
              </h2>
              {geoQuestion ? (
                <GeoMap
                  key={geoQuestion.id}
                  region={geoQuestion.mapRegion}
                  viewport={geoQuestion.viewport}
                  selected={selected}
                  correct={geoQuestion.answer}
                  onSelect={setSelected}
                />
              ) : (
                <QuestionVisual visual={question.visual} />
              )}
              {question.factBefore && (
                <div className="mt-4 rounded-2xl bg-flag/70 px-5 py-4 text-sm leading-relaxed text-foreground">
                  <p>{question.factBefore[locale]}</p>
                  {selected !== null && question.factAfter && (
                    <div className="mt-3 border-t border-flag-ink/20 pt-3">
                      <p>{question.factAfter[locale]}</p>
                      {question.source && (
                        <a
                          href={question.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-xs font-semibold text-flag-ink underline underline-offset-2"
                        >
                          {t.flagSource}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            {selected === null && !geoQuestion && (
              <p className="mt-3 text-sm text-muted-foreground">
                {t.roundsHint}
              </p>
            )}
            {game.code === 'flag-master' && flagStorage === 'demo' && (
              <p className="mt-2 text-xs text-muted-foreground">
                {t.flagOfflineNotice}
              </p>
            )}
            {!geoQuestion && (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {question.options.map((option, answer) => (
                  <Button
                    key={`${question.id}-${answer}`}
                    disabled={selected !== null}
                    onClick={() => setSelected(answer)}
                    variant="outline"
                    className={cn(
                      'h-auto min-h-14 justify-start gap-3 rounded-xl p-4 text-left whitespace-normal disabled:opacity-100',
                      selected !== null &&
                        answer === question.answer &&
                        'border-primary bg-accent text-primary',
                      selected === answer &&
                        answer !== question.answer &&
                        'border-destructive bg-destructive/5',
                    )}
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-xs">
                      {String.fromCharCode(65 + answer)}
                    </span>
                    <span className="flex-1">{option[locale]}</span>
                    {selected !== null && answer === question.answer ? (
                      <Check size={16} />
                    ) : null}
                  </Button>
                ))}
              </div>
            )}
            <div
              className={cn('mt-7', !geoQuestion && 'min-h-24')}
              aria-live="polite"
            >
              {selected !== null && (
                <>
                  <p
                    className={cn(
                      'mb-2 font-semibold',
                      selected === question.answer
                        ? 'text-primary'
                        : 'text-time-ink',
                    )}
                  >
                    {selected === question.answer
                      ? t.correct
                      : geoQuestion
                        ? t.geoIncorrect
                        : t.incorrect}
                  </p>
                  {selected !== question.answer && (
                    <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                      {geoQuestion && (
                        <p>
                          {t.geoYouSelected}{' '}
                          {question.options[selected][locale]}
                        </p>
                      )}
                      <p>
                        {t.correctAnswer}{' '}
                        {question.options[question.answer][locale]}
                      </p>
                    </div>
                  )}
                  {question.explanation && (
                    <div className="mb-4 rounded-2xl bg-number/60 px-5 py-4 text-left text-number-ink">
                      <p className="mb-1 text-sm font-semibold">
                        {t.numberSolution}
                      </p>
                      <p className="whitespace-pre-line text-sm leading-relaxed">
                        {question.explanation[locale]}
                      </p>
                    </div>
                  )}
                  {saveError && (
                    <p className="mb-2 text-sm text-destructive">
                      {t.flagSaveError}
                    </p>
                  )}
                  <Button
                    onClick={() => void advance()}
                    disabled={saving}
                    className="mt-3 h-11 rounded-xl px-5"
                  >
                    {saving
                      ? t.loading
                      : index === questions.length - 1
                        ? t.finish
                        : t.next}
                    <ArrowRight />
                  </Button>
                </>
              )}
            </div>
          </section>
        )}
        {(phase === 'result' || isCompletedDaily) && shownResult && (
          <section className="surface-card p-6 text-center sm:p-10">
            <span className="mx-auto mb-6 flex size-20 items-center justify-center rounded-3xl bg-time text-time-ink">
              <PartyPopper size={38} strokeWidth={1.5} />
            </span>
            <p className="eyebrow mb-3 text-primary">{game.title}</p>
            <h1 className="text-3xl font-semibold tracking-tight">
              {isCompletedDaily ? t.dailyCompleted : t.resultTitle}
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {isCloudFlagResult
                ? t.flagResultSaved
                : isCompletedDaily
                  ? t.dailyDoneNote
                  : t.resultDescription}
            </p>
            <div className="my-8 flex justify-center gap-12">
              <div>
                <Trophy className="mx-auto mb-2 text-time-ink" size={20} />
                <strong className="text-4xl font-semibold">
                  {shownResult.score}
                </strong>
                <p className="mt-1 text-xs text-muted-foreground">{t.points}</p>
              </div>
              <div>
                <CheckCircle2 className="mx-auto mb-2 text-primary" size={20} />
                <strong className="text-4xl font-semibold">
                  {shownResult.correct}/{shownResult.total}
                </strong>
                <p className="mt-1 text-xs text-muted-foreground">
                  {t.correctAnswers}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link className="action-link" href={ROUTES.profile}>
                {t.viewProfile}
                <ArrowRight size={16} />
              </Link>
              {dailyDate ? (
                <Link className="quiet-link" href={ROUTES.game(game.code)}>
                  {t.practice}
                </Link>
              ) : (
                <Button
                  variant="outline"
                  className="h-11 rounded-xl px-5"
                  onClick={() => void start()}
                  disabled={starting}
                >
                  <RotateCcw size={16} />
                  {starting ? t.loading : t.again}
                </Button>
              )}
            </div>
            {!isCloudFlagResult && (
              <div className="mt-8 border-t pt-6">
                <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                  {t.localDescription}
                </p>
                <SignInDialog />
              </div>
            )}
          </section>
        )}
        {phase !== 'playing' && (
          <div className="mt-8">
            <AdSlot />
          </div>
        )}
        {(phase === 'result' || isCompletedDaily) && shownResult && (
          <GameRecommendations currentGame={game.code} />
        )}
      </div>
    </div>
  );
}
