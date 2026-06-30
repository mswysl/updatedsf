import * as React from 'react';

/**
 * Product rating — skulls instead of stars (filled pink, empty ink-300). The
 * brand's signature review motif. Optional review `count` and numeric value.
 */
export interface SkullRatingProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Rating, 0–max. @default 0 */
  value?: number;
  /** Total skulls. @default 5 */
  max?: number;
  /** Review count shown as "(123)". */
  count?: number | null;
  /** Glyph size in px. @default 18 */
  size?: number;
  /** Show the numeric value (e.g. 4.5). @default false */
  showValue?: boolean;
}

export function SkullRating(props: SkullRatingProps): JSX.Element;
