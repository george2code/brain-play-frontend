'use client';
import { Menu, Sparkles, UserRound } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { SignInDialog } from '@/components/auth/SignInDialog';
import Link from '@/components/shared/LocalizedLink';
import { Logo } from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { ROUTES } from '@/config/routes.config';

import { useAuth } from '@/hooks/useAuth';
import { useDemoProfile } from '@/hooks/useDemoProfile';

import { useLocale } from '@/i18n/LocaleProvider';
import { brand } from '@/i18n/dictionaries';
import { withoutLocale } from '@/i18n/routing';

import { cn } from '@/lib/utils';

export function Header() {
  const { locale, setLocale, t } = useLocale();
  const { hasPlayed: localPlayed } = useDemoProfile();
  const { user } = useAuth();
  const hasPlayed = localPlayed || Boolean(user);
  const pathname = withoutLocale(usePathname());
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: ROUTES.home, label: t.games },
    { href: ROUTES.daily, label: t.daily },
    { href: ROUTES.leaderboard, label: t.leaderboard },
  ];
  return (
    <>
      <a
        href="#main-content"
        className="fixed top-2 left-2 z-[100] -translate-y-24 rounded-lg bg-primary p-3 text-white focus:translate-y-0"
      >
        {t.skip}
      </a>
      <header className="border-b border-border/80 bg-card/90">
        <div className="page-container flex min-h-20 items-center justify-between gap-3">
          <Logo />
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label={t.games}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className={cn(
                  'flex min-h-11 items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary',
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground',
                )}
              >
                {link.href === ROUTES.daily && <Sparkles size={14} />}
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <Select
              value={locale}
              onValueChange={(value) => {
                if (value === 'en' || value === 'uk' || value === 'ru')
                  setLocale(value);
              }}
            >
              <SelectTrigger
                aria-label={t.language}
                className="h-11 border-0 px-2"
              >
                <SelectValue>{locale.toUpperCase()}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="uk">Українська</SelectItem>
                <SelectItem value="ru">Русский</SelectItem>
              </SelectContent>
            </Select>
            <div className="hidden sm:block">
              {hasPlayed ? (
                <Link href={ROUTES.profile} className="quiet-link px-3">
                  <UserRound size={16} />
                  {t.profile}
                </Link>
              ) : (
                <SignInDialog compact />
              )}
            </div>
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    className="size-11 lg:hidden"
                    aria-label={t.menu}
                  />
                }
              >
                <Menu size={21} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>{brand.name}</SheetTitle>
                  <SheetDescription>{t.footer}</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-2 px-4">
                  {[
                    ...links,
                    ...(hasPlayed
                      ? [{ href: ROUTES.profile, label: t.profile }]
                      : []),
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-xl px-4 py-3 hover:bg-accent"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="px-8">
                  <SignInDialog compact />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
