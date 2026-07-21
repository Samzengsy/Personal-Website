import React, { useEffect, useRef, useState } from 'react';
import { LIFESTYLE_PAGES, LIFESTYLE_SLUGS } from '../constants';
import { LifestyleSlug } from '../types';
import { getNextLifestyleIndex } from './lifestyleNavigation';

interface LifestyleProps {
  onNavigate?: (path: string) => void;
}

type TransitionPhase = 'idle' | 'leaving' | 'entering';

const transitionExitMs = 140;

export const Lifestyle: React.FC<LifestyleProps> = ({ onNavigate }) => {
  const [activeSlug, setActiveSlug] = useState<LifestyleSlug>('photography');
  const [displayedSlug, setDisplayedSlug] = useState<LifestyleSlug>('photography');
  const [transitionPhase, setTransitionPhase] = useState<TransitionPhase>('idle');
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const transitionTimer = useRef<number | null>(null);
  const animationFrame = useRef<number | null>(null);

  const page = LIFESTYLE_PAGES[displayedSlug];

  const clearTransition = () => {
    if (transitionTimer.current !== null) {
      window.clearTimeout(transitionTimer.current);
      transitionTimer.current = null;
    }
    if (animationFrame.current !== null) {
      window.cancelAnimationFrame(animationFrame.current);
      animationFrame.current = null;
    }
  };

  useEffect(() => clearTransition, []);

  const selectLifestyle = (nextSlug: LifestyleSlug) => {
    if (nextSlug === activeSlug && nextSlug === displayedSlug) return;

    clearTransition();
    setActiveSlug(nextSlug);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedSlug(nextSlug);
      setTransitionPhase('idle');
      return;
    }

    setTransitionPhase('leaving');
    transitionTimer.current = window.setTimeout(() => {
      setDisplayedSlug(nextSlug);
      setTransitionPhase('entering');
      animationFrame.current = window.requestAnimationFrame(() => {
        animationFrame.current = window.requestAnimationFrame(() => {
          setTransitionPhase('idle');
          animationFrame.current = null;
        });
      });
      transitionTimer.current = null;
    }, transitionExitMs);
  };

  const handleTabKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) => {
    const nextIndex = getNextLifestyleIndex(
      currentIndex,
      event.key,
      LIFESTYLE_SLUGS.length
    );

    if (nextIndex === currentIndex && !['Home', 'End'].includes(event.key)) return;

    event.preventDefault();
    const nextSlug = LIFESTYLE_SLUGS[nextIndex];
    selectLifestyle(nextSlug);
    tabRefs.current[nextIndex]?.focus();
  };

  const archiveHref = `/lifestyle/${displayedSlug}`;

  return (
    <section id="life" className="section-block section-block--lifestyle">
      <div className="section-frame fade-up fade-up-delay-5">
        <h2 className="section-title">Lifestyle</h2>
        <p className="section-prose">
          Beyond research, I stay grounded through photography, travel, music and wine tasting.
        </p>

        <div className="lifestyle-folio" data-active={activeSlug}>
          <div className="lifestyle-folio__stage">
            <article
              id="lifestyle-panel"
              className={`lifestyle-folio__page is-${transitionPhase}`}
              role="tabpanel"
              aria-labelledby={`lifestyle-tab-${displayedSlug}`}
              tabIndex={0}
            >
              <div className="lifestyle-folio__copy">
                <p className="lifestyle-folio__index">
                  {String(LIFESTYLE_SLUGS.indexOf(displayedSlug) + 1).padStart(2, '0')} / 04
                </p>
                <h3 className="lifestyle-folio__title">{page.title}</h3>
                {page.subtitle ? (
                  <p className="lifestyle-folio__subtitle">{page.subtitle}</p>
                ) : null}

                {page.intro?.length ? (
                  <div className="lifestyle-folio__intro">
                    {page.intro.map((line, index) => (
                      <p
                        key={`${displayedSlug}-intro-${index}`}
                        className={index === 0 ? 'lifestyle-folio__kicker' : undefined}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                ) : null}

                <a
                  href={archiveHref}
                  className="lifestyle-folio__archive-link"
                  onClick={(event) => {
                    if (!onNavigate) return;
                    event.preventDefault();
                    onNavigate(archiveHref);
                  }}
                >
                  View full {page.title} archive <span aria-hidden="true">→</span>
                </a>
              </div>

              <div
                className="lifestyle-folio__gallery"
                aria-label={`${page.title} gallery preview`}
              >
                {page.items.map((item) => {
                  const imageKey = `${displayedSlug}-${item.id}`;
                  return (
                    <figure className="lifestyle-folio__media" key={item.id}>
                      {item.src && !brokenImages[imageKey] ? (
                        <img
                          src={item.src}
                          alt={item.alt || page.title}
                          width={item.width}
                          height={item.height}
                          loading="lazy"
                          decoding="async"
                          onError={() => {
                            setBrokenImages((previous) => ({
                              ...previous,
                              [imageKey]: true
                            }));
                          }}
                        />
                      ) : (
                        <div className="lifestyle-folio__image-fallback" role="status">
                          Preview unavailable
                        </div>
                      )}
                      <figcaption>
                        <span>{item.location || 'Archive'}</span>
                        <span>{item.year || 'Undated'}</span>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </article>
          </div>

          <div
            className="lifestyle-folio__tabs no-scrollbar"
            role="tablist"
            aria-label="Lifestyle dimensions"
            aria-orientation="horizontal"
          >
            {LIFESTYLE_SLUGS.map((slug, index) => {
              const item = LIFESTYLE_PAGES[slug];
              const selected = slug === activeSlug;
              return (
                <button
                  key={slug}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  id={`lifestyle-tab-${slug}`}
                  type="button"
                  role="tab"
                  className="lifestyle-folio__tab"
                  aria-selected={selected}
                  aria-controls="lifestyle-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectLifestyle(slug)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  <span className="lifestyle-folio__tab-number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
