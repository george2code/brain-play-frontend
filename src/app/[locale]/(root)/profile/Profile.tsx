'use client';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Flame,
  Gamepad2,
  Sprout,
  Target,
  Trophy,
} from 'lucide-react';
import { useState } from 'react';

import { AccountStatus } from '@/components/auth/AccountStatus';
import { DailyCard } from '@/components/games/DailyCard';
import { GameCard } from '@/components/games/GameCard';
import { ProfileSettings } from '@/components/profile/ProfileSettings';
import { AdSlot } from '@/components/shared/AdSlot';
import Link from '@/components/shared/LocalizedLink';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { GAMES, getGame } from '@/constants/games.constants';

import { useAuth } from '@/hooks/useAuth';
import { useDemoProfile } from '@/hooks/useDemoProfile';
import { useVerifiedProgress } from '@/hooks/useVerifiedProgress';

import { useLocale } from '@/i18n/LocaleProvider';

import type { DemoAttempt } from '@/shared/types/game.types';

import {
  combinedGameStats,
  numberTrophy,
  progressStats,
} from '@/utils/progress.utils';
import {
  verifiedAttempts,
  verifiedStatsForGame,
  verifiedTotals,
} from '@/utils/verified-progress.utils';

const HISTORY_LIMIT = 50;
const HISTORY_PAGE_SIZE = 8;

export default function Profile() {
  const [historyPage, setHistoryPage] = useState(1);
  const { t, locale } = useLocale();
  const { user, registered, loading: authLoading } = useAuth();
  const { profile, hasPlayed: hasLocalPlayed, hydrated } = useDemoProfile();
  const {
    stats: verifiedStats,
    history: verifiedHistory,
    loading: verifiedLoading,
  } = useVerifiedProgress();
  const remote = verifiedTotals(verifiedStats);
  const hasPlayed = hasLocalPlayed || remote.played > 0;
  const remoteAttempts: DemoAttempt[] = verifiedAttempts(verifiedHistory);
  const history = [...profile.attempts, ...remoteAttempts].sort((a, b) =>
    b.completedAt.localeCompare(a.completedAt),
  );
  const recentHistory = history.slice(0, HISTORY_LIMIT);
  const historyPageCount = Math.ceil(recentHistory.length / HISTORY_PAGE_SIZE);
  const currentHistoryPage = Math.min(historyPage, historyPageCount || 1);
  const visibleHistory = recentHistory.slice(
    (currentHistoryPage - 1) * HISTORY_PAGE_SIZE,
    currentHistoryPage * HISTORY_PAGE_SIZE,
  );
  const localTotals = Object.values(profile.totals || {});
  const localPlayed = localTotals.reduce((sum, item) => sum + item.played, 0);
  const localCorrect = localTotals.reduce((sum, item) => sum + item.correct, 0);
  const localQuestions = localTotals.reduce((sum, item) => sum + item.total, 0);
  const played = localPlayed + remote.played;
  const correct = localCorrect + remote.correct;
  const total = localQuestions + remote.total;
  const stats = {
    played,
    correct,
    accuracy: total ? Math.round((correct / total) * 100) : 0,
    streak: progressStats(history).streak,
  };
  if (!hydrated || (!hasLocalPlayed && (authLoading || verifiedLoading)))
    return (
      <div className="page-container py-12">
        <Skeleton className="h-80 w-full" />
      </div>
    );
  if (!hasPlayed && !registered)
    return (
      <div className="page-container py-16">
        <section className="surface-card mx-auto max-w-xl px-7 py-12 text-center">
          <Sprout size={45} className="mx-auto mb-6 text-primary" />
          <h1 className="section-title">{t.firstTitle}</h1>
          <p className="my-5 leading-relaxed text-muted-foreground">
            {t.firstDescription}
          </p>
          <Link className="action-link" href="/#games">
            {t.pickGame}
            <ArrowRight size={16} />
          </Link>
          <div className="mt-8 text-left">
            <AccountStatus />
          </div>
        </section>
      </div>
    );
  return (
    <div className="page-container py-10">
      <div className="mb-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="eyebrow mb-3 text-primary">
            {registered
              ? t.googleConnected
              : remote.played
                ? t.resultSaved
                : t.localOnly}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            {user?.nickname || profile.nickname || t.guest}
            <span className="text-peach">.</span>
          </h1>
          <p className="mt-3 text-muted-foreground">{t.profileTitle}</p>
        </div>
        <ProfileSettings />
      </div>
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { icon: Gamepad2, label: t.played, value: stats.played },
          { icon: Target, label: t.accuracy, value: `${stats.accuracy}%` },
          { icon: Flame, label: t.streak, value: stats.streak },
          { icon: Trophy, label: t.correctAnswers, value: stats.correct },
        ].map(({ icon: Icon, label, value }) => (
          <div className="surface-card p-5" key={label}>
            <Icon size={20} className="mb-5 text-primary" />
            <strong className="text-3xl font-semibold">{value}</strong>
            <p className="mt-1 text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
      <h2 className="section-title mb-5">{t.progress}</h2>
      <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0">
          <div className="grid gap-5 sm:grid-cols-2">
            {GAMES.map((game) => {
              const summary = combinedGameStats(
                profile,
                game.code,
                verifiedStatsForGame(verifiedStats, game.code),
              );
              const accuracy = summary.total
                ? Math.round((summary.correct / summary.total) * 100)
                : 0;
              return (
                <div key={game.code}>
                  <GameCard
                    game={game}
                    best={summary.played ? summary.bestScore : undefined}
                    played={summary.played}
                    accuracy={accuracy}
                    numberBestLevel={
                      game.code === 'number-iq'
                        ? numberTrophy(
                            profile,
                            verifiedStats['number-iq']?.bestByLevel,
                          )?.level
                        : undefined
                    }
                  />
                  <div className="px-2 pt-3">
                    <div className="mb-2 flex justify-between text-[11px] text-muted-foreground">
                      <span>{t.accuracy}</span>
                      <span>{accuracy}%</span>
                    </div>
                    <Progress
                      value={accuracy}
                      aria-label={`${game.title} ${t.accuracy}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <section className="surface-card mt-10 overflow-hidden p-5 sm:p-7">
            <h2 className="mb-5 text-xl font-semibold">{t.history}</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t.game}</TableHead>
                  <TableHead>{t.score}</TableHead>
                  <TableHead>{t.date}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {visibleHistory.map((attempt) => (
                  <TableRow key={attempt.id}>
                    <TableCell className="py-4 font-medium">
                      {getGame(attempt.game)?.title}
                      <span className="mt-1 block text-[11px] font-normal text-muted-foreground">
                        {attempt.mode === 'daily' ? t.dailyMode : t.practice} ·{' '}
                        {remoteAttempts.some((saved) => saved.id === attempt.id)
                          ? t.resultSaved
                          : t.demoNotice}
                      </span>
                    </TableCell>
                    <TableCell>
                      {attempt.score} {t.points}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {new Intl.DateTimeFormat(locale, {
                        day: 'numeric',
                        month: 'short',
                        timeZone: 'UTC',
                      }).format(new Date(attempt.completedAt))}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {historyPageCount > 1 && (
              <nav
                aria-label={t.historyPages}
                className="mt-5 flex items-center justify-center gap-3 border-t border-border pt-5"
              >
                <Button
                  type="button"
                  variant="outline"
                  className="size-11"
                  aria-label={t.previousPage}
                  disabled={currentHistoryPage === 1}
                  onClick={() => setHistoryPage(currentHistoryPage - 1)}
                >
                  <ChevronLeft aria-hidden="true" />
                </Button>
                <span className="min-w-20 text-center text-sm text-muted-foreground">
                  {t.page} {currentHistoryPage} {t.of} {historyPageCount}
                </span>
                <Button
                  type="button"
                  variant="outline"
                  className="size-11"
                  aria-label={t.nextPage}
                  disabled={currentHistoryPage === historyPageCount}
                  onClick={() => setHistoryPage(currentHistoryPage + 1)}
                >
                  <ChevronRight aria-hidden="true" />
                </Button>
              </nav>
            )}
          </section>
          <div className="mt-8">
            <AdSlot />
          </div>
        </div>
        <aside className="min-w-0 space-y-5">
          <AccountStatus />
          <AdSlot format="rectangle" />
          <DailyCard />
        </aside>
      </div>
    </div>
  );
}
