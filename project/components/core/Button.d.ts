import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * The MSWYSL action button. Hard 2px black border + offset shadow that the
 * button presses into on :active. Uppercase, tracked-out. Use `display` for
 * the loud, skewed poster CTA (hero "SHOP THE DROP" energy).
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual role. @default 'primary' */
  variant?: ButtonVariant;
  /** Control height. @default 'md' (44px touch target) */
  size?: ButtonSize;
  /** Use the skewed display face for a poster-grade CTA. @default false */
  display?: boolean;
  /** Stretch to container width. @default false */
  fullWidth?: boolean;
  /** Icon node rendered before the label (e.g. a Lucide <svg>). */
  leadingIcon?: React.ReactNode;
  /** Icon node rendered after the label. */
  trailingIcon?: React.ReactNode;
  /** Render as another element/component (e.g. 'a'). @default 'button' */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
