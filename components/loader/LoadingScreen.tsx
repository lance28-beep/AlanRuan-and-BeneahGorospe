'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/content/site';
// bequta font is available globally via app fonts if needed

interface LoadingScreenProps {
  onComplete: () => void;
}

// Countdown boxes with color photos - numbers show month, day, year
const COUNTDOWN_BOXES = [
  { src: '/Couple_img/couple1.JPG' },
  { src: '/Couple_img/couple2.JPG' },
  { src: '/Couple_img/couple3.JPG' },
];

const MAIN_BW_IMAGE = '/mobile-background/couple.jpg';
const MAIN_BW_DESKTOP = '/desktop-background/couple.jpg';
const STAGGER_DELAY_MS = 4000; // Each image appears every 4 seconds
const BOX_TRANSITION_MS = 1200; // Slow, smooth transition
const TOTAL_DURATION_MS = COUNTDOWN_BOXES.length * STAGGER_DELAY_MS + 3000;

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visibleBoxes, setVisibleBoxes] = useState<number[]>([]);
  const [now, setNow] = useState(() => new Date());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Live countdown: days, hours, minutes until wedding (May 9, 2026, 7:00 PM)
  const countdown = useMemo(() => {
    const wedding = new Date('2026-05-09T19:00:00');
    const diff = wedding.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return { days, hours, minutes };
  }, [now]);

  const countdownText = useMemo(() => {
    const { days } = countdown;
    if (days === 0) return 'TODAY IS THE DAY';
    if (days === 1) return 'ONE DAY TO GO';
    if (days >= 28 && days <= 31) return 'ONE MONTH TO GO';
    if (days >= 58 && days <= 62) return 'TWO MONTHS TO GO';
    if (days >= 88 && days <= 93) return 'THREE MONTHS TO GO';
    if (days >= 118 && days <= 123) return 'FOUR MONTHS TO GO';
    if (days >= 148 && days <= 153) return 'FIVE MONTHS TO GO';
    return `${days} DAYS TO GO`;
  }, [countdown.days]);

  // Wedding date: 05.09.26 (month, day, year)
  const countdownNumbers = ['05', '09', '26'];
  const countdownLabels = ['MONTH', 'DAY', 'YEAR'];

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000); // update every minute
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    COUNTDOWN_BOXES.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleBoxes((prev) => [...prev, i]), i * STAGGER_DELAY_MS)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / TOTAL_DURATION_MS) * 100);
      setProgress(pct);
    }, 50);

    const timer = setTimeout(() => {
      setProgress(100);
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }, TOTAL_DURATION_MS);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  const coupleNames = `${siteConfig.couple.brideNickname} & ${siteConfig.couple.groomNickname}`;
  const hashtag = `#${siteConfig.couple.groomNickname}And${siteConfig.couple.brideNickname}`;

  // Palette tuned to modern imperial Chinese hues
  const palette = {
    deep: '#8B1E1E',
    medium: '#5E1414',
    accent: '#F3C66C',
    cream: '#FEF7DB',
    soft: '#FFFFFF',
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col overflow-hidden transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={isMobile ? MAIN_BW_IMAGE : MAIN_BW_DESKTOP}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Gradient overlay for readability and warmth (kept light so photo stays visible) */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 0%, rgba(254,247,219,0.2) 0%, transparent 42%), linear-gradient(180deg, ${palette.deep}88 0%, ${palette.deep}55 45%, ${palette.deep}88 100%)`,
          }}
        />
      </div>

      <div className="relative flex flex-col flex-1 min-h-0">
        {/* Top: headline + hashtag + countdown (readable over photo, no container) */}
        <div className="flex flex-col items-center justify-center w-full pt-12 sm:pt-16 md:pt-24 px-4 sm:px-6 flex-shrink-0">
          <div className="w-full max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <span
                className="hidden sm:block h-px w-12 flex-shrink-0"
                style={{ backgroundColor: palette.accent }}
              />
              <p className="text-center">
                <span
                  className="inline-block text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.22em] uppercase px-3 py-1.5 rounded-full backdrop-blur-sm border"
                  style={{
                    color: palette.deep,
                    backgroundColor: `${palette.cream}E6`,
                    borderColor: `${palette.accent}55`,
                    textShadow: '0 1px 0 rgba(255,255,255,0.8)',
                    fontFamily:
                      '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                  }}
              >
                Your invitation is on its way
              </span>
            </p>
            <span
              className="hidden sm:block h-px w-12 flex-shrink-0"
              style={{ backgroundColor: palette.accent }}
            />
          </div>

          <p className="text-center mb-4 sm:mb-5">
            <span
              className="inline-block text-xs sm:text-sm tracking-[0.18em] sm:tracking-[0.22em] px-3 py-1.5 rounded-full backdrop-blur-sm border"
              style={{
                color: palette.deep,
                backgroundColor: `${palette.cream}E6`,
                borderColor: `${palette.accent}55`,
                textShadow: '0 1px 0 rgba(255,255,255,0.8)',
                fontFamily:
                  '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
              }}
              >
                {hashtag}
              </span>
            </p>

            <h2 className="text-center">
              <span
                className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.08em] sm:tracking-[0.12em] uppercase max-w-md mx-auto leading-tight px-2"
                style={{
                  color: palette.cream,
                  textShadow:
                    '0 0 14px rgba(0,0,0,0.85), 0 0 26px rgba(0,0,0,0.9)',
                  fontFamily:
                    '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                {countdownText}
              </span>
            </h2>
          </div>
        </div>

        {/* Spacer - lets B&W image dominate (upper 2/3) */}
        <div className="flex-1 min-h-[12vh]" />

        {/* Middle: Three color countdown boxes - staggered reveal */}
        <div className="flex items-stretch justify-center gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4 py-4 flex-shrink-0">
          {COUNTDOWN_BOXES.map((item, i) => {
            const isVisible = visibleBoxes.includes(i);
            return (
              <div
                key={i}
                className="relative flex-1 max-w-[28vw] sm:max-w-[140px] md:max-w-[160px] aspect-[3/4] overflow-hidden"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.96)',
                  transition: `opacity ${BOX_TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${BOX_TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                }}
              >
                <Image
                  src={item.src}
                  alt={`${coupleNames}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 28vw, 160px"
                />
                {/* Bold wedding date number + label - right corner */}
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 flex flex-col items-end">
                  <span
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black select-none leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                    style={{
                      fontFamily: 'var(--font-granika), sans-serif',
                      color: '#FEF7DB',
                      textShadow: '0 0 10px rgba(0,0,0,0.7), 0 0 22px rgba(0,0,0,0.9)',
                    }}
                  >
                    {countdownNumbers[i]}
                  </span>
                  <span
                    className="text-[8px] sm:text-[9px] tracking-widest uppercase mt-0.5"
                    style={{ 
                      color: '#FEF7DB',
                      textShadow: '0 0 6px rgba(0,0,0,0.75)' 
                    }}
                  >
                    {countdownLabels[i]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom: Names + progress bar */}
        <div className="flex flex-col items-center justify-center w-full py-6 sm:py-8 px-4 flex-shrink-0">
          <p
            className="text-center text-sm sm:text-base tracking-[0.18em] uppercase text-[family-name:var(--font-crimson)] mb-2"
            style={{ 
              color: palette.cream,
              textShadow: '0 0 8px rgba(0,0,0,0.8)'
            }}
          >
            Almost ready for
          </p>
          <div
            className="text-center mb-2"
            style={{
              fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              color: palette.cream,
              textShadow: '0 0 10px rgba(0,0,0,0.85), 0 0 22px rgba(0,0,0,0.9)',
            }}
          >
            <span className="block text-xs sm:text-sm tracking-[0.24em] uppercase mb-1">
              The wedding of
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.1em] uppercase">
              {coupleNames}
            </span>
          </div>
          {/* Preparing message + progress bar */}
          <p
            className="text-xs sm:text-sm tracking-[0.22em] mt-6 mb-3 font-[family-name:var(--font-crimson)] uppercase"
            style={{ 
              color: palette.cream,
              textShadow: '0 0 8px rgba(0,0,0,0.8)'
            }}
          >
            Crafting your invitation experience
          </p>
          <div className="w-full max-w-xs mx-auto">
            <div
              className="h-1 rounded-full overflow-hidden"
              style={{ backgroundColor: `${palette.medium}40` }}
            >
              <div
                className="h-full rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${progress}%`,
                  backgroundColor: palette.cream,
                  boxShadow: '0 0 10px rgba(0,0,0,0.9), 0 0 18px rgba(0,0,0,0.9)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
