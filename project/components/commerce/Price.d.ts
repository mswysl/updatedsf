import * as React from 'react';

/**
 * Money display in the mono price face. When `compareAt` is higher than
 * `amount`, shows the struck original price in ink-400 and a lime −N% stamp.
 */
export interface PriceProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Current price (number → formatted as currency, or pass a preformatted string). */
  amount: number | string;
  /** Original/compare-at price; renders strikethrough + save % when > amount. */
  compareAt?: number | null;
  /** ISO currency code. @default 'USD' */
  currency?: string;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Show the lime −N% save stamp on sale. @default true */
  showSave?: boolean;
}

export function Price(props: PriceProps): JSX.Element;
