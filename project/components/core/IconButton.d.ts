import * as React from 'react';

export type IconButtonVariant = 'outline' | 'primary' | 'ghost';
export type IconButtonSize = 'sm' | 'md' | 'lg';

/**
 * Square, icon-only button (search, cart, menu, wishlist). Same press
 * mechanics as Button. Pass a single icon node as children. Optional `count`
 * renders a lime notification badge — use it for the cart item count.
 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual role. @default 'outline' */
  variant?: IconButtonVariant;
  /** Square size. @default 'md' */
  size?: IconButtonSize;
  /** Badge count rendered top-right (hidden when null/0). */
  count?: number | null;
  /** Accessible label — required since there is no visible text. */
  label: string;
  /** A single icon node (e.g. a Lucide <svg>). */
  children: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
