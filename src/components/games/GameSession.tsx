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

import { SignInDialog } from '@/components/auth/SignInDialog';
import { GameArtwork } from '@/components/games/GameArtwork';
import { GameRecommendations } from '@/components/games/GameRecommendations';
import { QuestionVisual } from '@/components/games/QuestionVisual';
import { TimeTravelerChoices } from '@/components/games/TimeTravelerChoices';
import { AdSlot } from '@/components/shared/AdSlot';
import Link from '@/components/shared/LocalizedLink';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

import { ROUTES } from '@/config/routes.config';

import { currentRulesVersion } from '@/constants/game-rules.constants';

import { useDemoProfile } from '@/hooks/useDemoProfile';
import { useLocalePreservedState } from '@/hooks/useLocalePreservedState';
import {
  VERIFIED_PROGRESS_EVENT,
  useVerifiedProgress,
} from '@/hooks/useVerifiedProgress';

import { useLocale } from '@/i18n/LocaleProvider';
import { seoCopy } from '@/i18n/dictionaries';

import { cn } from '@/lib/utils';

import { createFlagQuestions } from '@/services/demo/flags/flag-questions';
import { createNumberQuestions } from '@/services/demo/number-questions';
import {
  type TimeTravelerQuestion,
  createTimeTravelerQuestions,
  timeTravelerQuestionsFromIds,
} from '@/services/demo/time-traveler';
import {
  completeFlagRound,
  serverRoundToQuestions,
  startFlagRound,
} from '@/services/flag-master.service';
import {
  completeQuizRound,
  numberQuestionsFromIds,
  startQuizRound,
} from '@/services/quiz-rounds.service';

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
  const Heading = dailyDate ? 'h2' : 'h1';
  const { profile, complete } = useDemoProfile();
  const { history: savedHistory } = useVerifiedProgress();
  const [round, updateRound, transient] = useLocalePreservedState(
    game.code + ':' + (dailyDate ?? 'classic'),
    {
      phase: 'intro' as 'intro' | 'playing' | 'result',
      index: 0,
      selected: null as number | null,
      correct: 0,
      result: null as DemoAttempt | null,
      flagQuestions: [] as DemoQuestion[],
      numberQuestions: [] as DemoQuestion[],
      geoQuestions: [] as GeoQuestion[],
      timeQuestions: [] as TimeTravelerQuestion[],
      numberLevel: 'mixed' as NumberLevel,
      roundStorage: 'demo' as 'cloud' | 'demo',
      starting: false,
      saving: false,
      saveError: false,
    },
    {
      sessionId: { current: '' },
      answers: { current: [] as number[] },
      saved: { current: false },
    },
  );
  const {
    phase,
    index,
    selected,
    correct,
    result,
    flagQuestions,
    numberQuestions,
    geoQuestions,
    timeQuestions,
    numberLevel,
    roundStorage,
    starting,
    saving,
    saveError,
  } = round;
  const {
    sessionId: sessionIdRef,
    answers: answersRef,
    saved: savedRef,
  } = transient;
  const setPhase = (value: typeof round.phase) => updateRound({ phase: value });
  const setIndex = (value: typeof round.index) => updateRound({ index: value });
  const setSelected = (value: typeof round.selected) =>
    updateRound({ selected: value });
  const setCorrect = (value: typeof round.correct) =>
    updateRound({ correct: value });
  const setResult = (value: typeof round.result) =>
    updateRound({ result: value });
  const setFlagQuestions = (value: typeof round.flagQuestions) =>
    updateRound({ flagQuestions: value });
  const setNumberQuestions = (value: typeof round.numberQuestions) =>
    updateRound({ numberQuestions: value });
  const setGeoQuestions = (value: typeof round.geoQuestions) =>
    updateRound({ geoQuestions: value });
  const setTimeQuestions = (value: typeof round.timeQuestions) =>
    updateRound({ timeQuestions: value });
  const setNumberLevel = (value: typeof round.numberLevel) =>
    updateRound({ numberLevel: value });
  const setRoundStorage = (value: typeof round.roundStorage) =>
    updateRound({ roundStorage: value });
  const setStarting = (value: typeof round.starting) =>
    updateRound({ starting: value });
  const setSaving = (value: typeof round.saving) =>
    updateRound({ saving: value });
  const setSaveError = (value: typeof round.saveError) =>
    updateRound({ saveError: value });
  const questions =
    game.code === 'flag-master'
      ? flagQuestions
      : game.code === 'number-iq'
        ? numberQuestions
        : game.code === 'geo-challenge'
          ? geoQuestions
          : timeQuestions;
  const question = questions[index];
  const geoQuestion =
    game.code === 'geo-challenge' ? (question as GeoQuestion) : null;
  const timeQuestion =
    game.code === 'time-traveler' ? (question as TimeTravelerQuestion) : null;
  const localDailyResult = dailyDate
    ? profile.attempts.find(
        (a) => a.mode === 'daily' && a.dailyDate === dailyDate,
      )
    : undefined;
  const savedDaily = dailyDate
    ? savedHistory.find(
        (attempt) =>
          attempt.mode.game.code === game.code &&
          attempt.mode.code === 'daily' &&
          attempt.completedAt.slice(0, 10) === dailyDate,
      )
    : undefined;
  const dailyResult: DemoAttempt | undefined = savedDaily
    ? {
        id: savedDaily.id,
        game: game.code,
        mode: 'daily',
        dailyDate,
        correct: savedDaily.correctAnswers,
        total: savedDaily.totalRounds,
        score: savedDaily.score,
        completedAt: savedDaily.completedAt,
        rulesVersion: currentRulesVersion(game.code),
      }
    : localDailyResult;
  const isCompletedDaily = !!dailyResult && phase === 'intro';
  const shownResult = result || dailyResult;
  const isCloudResult = roundStorage === 'cloud' || Boolean(savedDaily);

  async function start() {
    if (starting) return;
    setStarting(true);
    let nextId = crypto.randomUUID();
    if (game.code === 'flag-master') {
      try {
        const round = await startFlagRound(dailyDate ? 'daily' : 'classic');
        setFlagQuestions(serverRoundToQuestions(round));
        setRoundStorage('cloud');
        nextId = round.roundId;
      } catch {
        setFlagQuestions(createFlagQuestions(dailyDate));
        setRoundStorage('demo');
      }
    }
    if (
      game.code === 'number-iq' ||
      game.code === 'geo-challenge' ||
      game.code === 'time-traveler'
    ) {
      try {
        const mode = dailyDate
          ? 'daily'
          : game.code === 'number-iq' && numberLevel !== 'mixed'
            ? numberLevel
            : 'classic';
        const round = await startQuizRound(game.code, mode);
        if (
          round.rulesVersion !== currentRulesVersion(game.code) ||
          round.contentVersion !== '1'
        )
          throw new Error('Unsupported game round.');
        if (game.code === 'number-iq')
          setNumberQuestions(
            numberQuestionsFromIds(round.questions.map((item) => item.id)),
          );
        else if (game.code === 'geo-challenge') {
          const { geoQuestionsFromIds } =
            await import('@/services/demo/geo-questions');
          setGeoQuestions(
            geoQuestionsFromIds(round.questions.map((item) => item.id)),
          );
        } else
          setTimeQuestions(
            timeTravelerQuestionsFromIds(
              round.questions.map((item) => item.id),
              dailyDate,
            ),
          );
        setRoundStorage('cloud');
        nextId = round.roundId;
      } catch {
        if (game.code === 'number-iq')
          setNumberQuestions(
            createNumberQuestions(dailyDate ? 'mixed' : numberLevel, dailyDate),
          );
        else if (game.code === 'geo-challenge') {
          const { createGeoQuestions } =
            await import('@/services/demo/geo-questions');
          setGeoQuestions(createGeoQuestions(dailyDate));
        } else setTimeQuestions(createTimeTravelerQuestions(dailyDate));
        setRoundStorage('demo');
      }
    }
    sessionIdRef.current = nextId;
    answersRef.current = [];
    savedRef.current = false;
    setSaveError(false);
    setIndex(0);
    setCorrect(0);
    setSelected(null);
    setResult(null);
    setPhase('playing');
    setStarting(false);
  }
  async function advance() {
    if (selected === null || saving || savedRef.current) return;
    answersRef.current[index] = selected;
    const nextCorrect = correct + Number(selected === question.answer);
    if (index < questions.length - 1) {
      setCorrect(nextCorrect);
      setIndex(index + 1);
      setSelected(null);
    } else {
      setSaving(true);
      let verifiedResult;
      if (roundStorage === 'cloud') {
        try {
          if (game.code === 'flag-master')
            verifiedResult = await completeFlagRound(
              sessionIdRef.current,
              answersRef.current,
            );
          if (game.code === 'number-iq')
            verifiedResult = await completeQuizRound(
              game.code,
              sessionIdRef.current,
              answersRef.current,
            );
          if (game.code === 'geo-challenge') {
            const { getGeoAreas } =
              await import('@/services/demo/geo-map-data');
            const geoAnswers = geoQuestions.map(
              (item, questionIndex) =>
                getGeoAreas(item.mapRegion, item.viewport)[
                  answersRef.current[questionIndex]
                ]?.id ?? '',
            );
            verifiedResult = await completeQuizRound(
              game.code,
              sessionIdRef.current,
              geoAnswers,
            );
          }
          if (game.code === 'time-traveler')
            verifiedResult = await completeQuizRound(
              game.code,
              sessionIdRef.current,
              timeQuestions.map(
                (item, questionIndex) =>
                  item.cardIds[answersRef.current[questionIndex]],
              ),
            );
          window.dispatchEvent(new Event(VERIFIED_PROGRESS_EVENT));
        } catch {
          setSaveError(true);
          setSaving(false);
          return;
        }
      }
      savedRef.current = true;
      const attempt: DemoAttempt = {
        id: sessionIdRef.current,
        game: game.code,
        mode: dailyDate ? 'daily' : 'practice',
        ...(dailyDate ? { dailyDate } : {}),
        correct: verifiedResult?.correctAnswers ?? nextCorrect,
        total: verifiedResult?.totalRounds ?? questions.length,
        score: verifiedResult?.score ?? nextCorrect * 100,
        completedAt: verifiedResult?.completedAt ?? new Date().toISOString(),
        ...(currentRulesVersion(game.code) > 1
          ? { rulesVersion: currentRulesVersion(game.code) }
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
            {phase === 'intro' && !isCompletedDaily
              ? game.code === 'flag-master'
                ? t.flagRoundSize
                : game.code === 'number-iq'
                  ? t.numberRoundSize
                  : game.code === 'geo-challenge'
                    ? t.geoRoundSize
                    : game.code === 'time-traveler'
                      ? t.timeRoundSize
                      : t.demoNotice
              : isCloudResult
                ? phase === 'playing'
                  ? t.cloudRound
                  : t.resultSaved
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
              <Heading className="text-4xl font-semibold tracking-tight">
                {game.title}
              </Heading>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {game.code === 'flag-master'
                  ? t.flagGameIntro
                  : game.code === 'number-iq'
                    ? t.numberIntro
                    : game.code === 'geo-challenge'
                      ? t.geoIntro
                      : game.code === 'time-traveler'
                        ? t.timeIntro
                        : t.gameIntro}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {game.code === 'flag-master'
                  ? t.flagRules
                  : game.code === 'number-iq'
                    ? t.numberRules
                    : game.code === 'geo-challenge'
                      ? t.geoRules
                      : game.code === 'time-traveler'
                        ? t.timeRules
                        : t.demoRules}
              </p>
              <h2 className="mt-6 text-lg font-semibold">
                {seoCopy[locale].games[game.code].heading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {seoCopy[locale].games[game.code].body}
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
              <div className="mt-4">
                <Link
                  href={`${ROUTES.faq}#${game.code}`}
                  className="inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  {t.faq}
                </Link>
              </div>
            </div>
          </section>
        )}
        {phase === 'playing' && (
          <section className="surface-card p-6 sm:p-9" aria-label={game.title}>
            <div className="mb-4 flex items-center justify-between gap-3">
              <Heading className="text-lg font-semibold">{game.title}</Heading>
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
              ) : !timeQuestion ? (
                <QuestionVisual visual={question.visual} />
              ) : null}
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
            {selected === null && !geoQuestion && !timeQuestion && (
              <p className="mt-3 text-sm text-muted-foreground">
                {t.roundsHint}
              </p>
            )}
            {roundStorage === 'demo' && (
              <p className="mt-2 text-xs text-muted-foreground">
                {t.offlineNotice}
              </p>
            )}
            {timeQuestion ? (
              <TimeTravelerChoices
                key={timeQuestion.id}
                question={timeQuestion}
                selected={selected}
                onSelect={setSelected}
              />
            ) : !geoQuestion ? (
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
            ) : null}
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
                  {timeQuestion?.factAfter && (
                    <div className="mb-4 rounded-2xl bg-time/70 px-5 py-4 text-left text-time-ink">
                      <p className="mb-1 text-sm font-semibold">{t.timeFact}</p>
                      <p className="text-sm leading-relaxed">
                        {timeQuestion.factAfter[locale]}
                      </p>
                      {timeQuestion.source && (
                        <a
                          href={timeQuestion.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-xs font-semibold underline underline-offset-2"
                        >
                          {t.flagSource}
                        </a>
                      )}
                    </div>
                  )}
                  {saveError && (
                    <p className="mb-2 text-sm text-destructive">
                      {t.saveError}
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
            <Heading className="text-3xl font-semibold tracking-tight">
              {isCompletedDaily ? t.dailyCompleted : t.resultTitle}
            </Heading>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {isCloudResult
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
            {!isCloudResult && (
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
