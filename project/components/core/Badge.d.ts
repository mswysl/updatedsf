import * as React from 'react';

export type BadgeVariant = 'new' | 'limited' | 'sale' | 'soldout' | 'preorder' | 'blood';

/**
 * Status flag stamped on products and listings. Mono, uppercase, hard border.
 * `new`/`sale` are lime, `limited` is pink, `soldout` is black, `blood` is red.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Status style. @default 'new' */
  variant?: BadgeVariant;
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
