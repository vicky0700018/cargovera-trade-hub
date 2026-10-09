import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { TradeImage } from '@/components/cargovera/trade-image';
import { tradeImages, galleryImages } from '@/lib/trade-images';
import { initialData, upgradeImages } from '@/lib/cargovera-data';

describe('Trade image coverage', () => {
  it('provides 25 or more unique meaningful photographs and 16 distinct gallery images', () => {
    expect(new Set(Object.values(tradeImages).map((p) => p.url)).size).toBeGreaterThanOrEqual(25);
    expect(new Set(galleryImages.map((p) => p.url)).size).toBe(16);
    expect(Object.values(tradeImages).every((p) => p.alt.length > 25)).toBe(true);
    expect(new Set(initialData.products.map((p) => p.image)).size).toBe(6);
    expect(new Set(initialData.services.map((p) => p.image)).size).toBe(6);
  });
  it('preserves administrator image choices and edited text during upgrades', () => {
    const saved = structuredClone(initialData);
    delete saved.imageVersion;
    const first = saved.products[0];
    if (!first) throw new Error('Missing seed');
    first.image = 'https://example.com/custom-product.jpg';
    first.title = 'Custom product';
    expect(upgradeImages(saved).products[0]).toEqual(first);
  });
  it('does not reset gallery edits or deletions after the image upgrade', () => {
    const saved = structuredClone(initialData);
    saved.gallery = saved.gallery.slice(1);
    expect(upgradeImages(saved).gallery).toEqual(saved.gallery);
  });
  it('uses a relevant fallback and then a bundled photograph when an image fails', () => {
    render(<TradeImage src="https://example.com/missing.jpg" alt="Custom product" fallback={tradeImages.warehouse.url} />);
    const image = screen.getByRole('img');
    fireEvent.error(image);
    expect(image.getAttribute('src')).toBe(tradeImages.warehouse.url);
    fireEvent.error(image);
    expect(image.getAttribute('src')).toBe(tradeImages.hero.url);
  });
});