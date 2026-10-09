import { useState, type ImgHTMLAttributes } from 'react';
import bundledFallback from '@/assets/trade-hero.jpg';
import { tradeImages } from '@/lib/trade-images';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt'> & {
  alt: string;
  fallback?: string;
};

export function TradeImage({ src, alt, fallback = tradeImages.warehouse.url, ...props }: Props) {
  const [failed, setFailed] = useState<string[]>([]);
  const candidates = [src, fallback, bundledFallback].filter((url): url is string => Boolean(url));
  const resolved = candidates.find((url) => !failed.includes(url)) || bundledFallback;
  return <img {...props} src={resolved} alt={resolved === src ? alt : 'Container shipping and wholesale logistics — replacement photograph'} onError={() => setFailed((previous) => previous.includes(resolved) ? previous : [...previous, resolved])} />;
}