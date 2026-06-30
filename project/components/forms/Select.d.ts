import * as React from 'react';

export interface SelectOption { value: string; label: string; }

/**
 * Native select with the brand's hard border and a heavy custom caret.
 * Pass `options` (strings or {value,label}) or raw <option> children.
 * Used for size / sort / quantity-of-many pickers.
 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Height. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Convenience options instead of children. */
  options?: Array<string | SelectOption>;
  /** Disabled first option shown until a value is chosen. */
  placeholder?: string;
}

export function Select(props: SelectProps): JSX.Element;
