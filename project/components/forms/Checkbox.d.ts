import * as React from 'react';

/**
 * Square checkbox with a lime fill + heavy tick. Filter facets, "in stock
 * only", terms agreement. Controlled (`checked`) or uncontrolled
 * (`defaultChecked`).
 */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Text label beside the box (or pass children). */
  label?: React.ReactNode;
  disabled?: boolean;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
