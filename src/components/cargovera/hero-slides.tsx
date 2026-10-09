import { useEffect, useState } from 'react';
import { tradeImages } from '@/lib/trade-images';
import { TradeImage } from './trade-image';
import { Button, Icon } from './ui';

export function HeroSlides({ image }: { image: string }) {
  const slides = [
    { url: image || tradeImages.hero.url, alt: tradeImages.hero.alt },
    tradeImages.vessel,
    tradeImages.containers,
    tradeImages.warehouse,
  ].filter((slide, index, list) => list.findIndex((other) => other.url === slide.url) === index);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hidden, setHidden] = useState(false);
  const current = index % slides.length;

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setHidden(document.hidden);
    updatePreference();
    updateVisibility();
    preference.addEventListener('change', updatePreference);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      preference.removeEventListener('change', updatePreference);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (paused || interacting || reducedMotion || hidden || slides.length < 2) return;
    const timer = window.setInterval(() => setIndex((previous) => (previous + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused, interacting, reducedMotion, hidden, slides.length]);

  return (
    <>
      <div className="hero-slides" aria-hidden="true">
        {slides.map((slide, position) => (
          <TradeImage key={slide.url} className={`hero-image hero-slide ${position === current ? 'is-active' : ''}`}
            src={slide.url} alt={slide.alt} fallback={tradeImages.hero.url} width={1920} height={1024}
            loading="eager" />
        ))}
      </div>
      <div className="hero-bottom hero-slide-controls" role="group" aria-label="Banner slides"
        onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)}
        onFocus={() => setInteracting(true)} onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false);
        }}>
        <Button variant="outline" className="slide-control" aria-label="Previous banner slide" title="Previous slide"
          onClick={() => setIndex((current + slides.length - 1) % slides.length)}><Icon name="previous" size={16} /></Button>
        {slides.map((slide, position) => (
          <Button key={slide.url} variant="ghost" className={`slide-dot ${position === current ? 'is-active' : ''}`}
            aria-label={`Show banner slide ${position + 1}`} aria-pressed={position === current}
            title={`Slide ${position + 1}`} onClick={() => setIndex(position)}><span /></Button>
        ))}
        <Button variant="outline" className="slide-control" aria-label="Next banner slide" title="Next slide"
          onClick={() => setIndex((current + 1) % slides.length)}><Icon name="arrow" size={16} /></Button>
        {!reducedMotion && <Button variant="outline" className="slide-control"
          aria-label={paused ? 'Play banner slideshow' : 'Pause banner slideshow'} title={paused ? 'Play slideshow' : 'Pause slideshow'}
          onClick={() => setPaused(!paused)}><Icon name={paused ? 'play' : 'pause'} size={16} /></Button>}
        <span className="slide-count">{String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
      </div>
    </>
  );
}