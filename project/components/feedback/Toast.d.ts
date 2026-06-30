import * as React from 'react';

/**
 * Transient confirmation/alert card — "Added to cart", errors, info. Hard
 * border + offset shadow, colored icon chip per variant.
 */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default 'success' */
  variant?: 'success' | 'error' | 'info';
  /** Bold first line. */
  title?: string;
  /** Secondary line (or pass children). */
  message?: React.ReactNode;
  /** Dismiss handler; renders a ✕ when provided. */
  onClose?: () => void;
}

export function Toast(props: ToastProps): JSX.Element;
