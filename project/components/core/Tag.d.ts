import * as React from 'react';

/**
 * Genre / category / filter chip (Death Metal, Grindcore, Vinyl, XL…).
 * Mono uppercase, hard border. Becomes interactive when `onClick` is passed
 * (filter pills) and removable when `onRemove` is passed (active filters).
 */
export interface TagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onClick'> {
  /** Selected/active filter state. @default false */
  selected?: boolean;
  /** When provided, renders a ✕ that calls this instead of selecting. */
  onRemove?: (e: React.MouseEvent) => void;
  /** Makes the tag a clickable filter pill. */
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
