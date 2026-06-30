import * as React from 'react';

/**
 * Single-line text field with mono uppercase label, optional leading icon,
 * hint and error states. Hard 2px black border, lime focus ring.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Mono uppercase label above the field. */
  label?: string;
  /** Helper or error text below the field. */
  hint?: string;
  /** Error styling (red border + red hint). @default false */
  error?: boolean;
  /** Show the pink required asterisk. @default false */
  required?: boolean;
  /** Height. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Icon node rendered inside, on the left (e.g. a search glyph). */
  leadingIcon?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
