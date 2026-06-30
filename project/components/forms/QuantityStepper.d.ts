import * as React from 'react';

/**
 * Quantity − / value / + stepper for product detail and cart rows. Clamps to
 * [min,max]. Controlled via `value`+`onChange` or uncontrolled via
 * `defaultValue`.
 */
export interface QuantityStepperProps {
  /** Controlled value. */
  value?: number;
  /** Initial value when uncontrolled. @default 1 */
  defaultValue?: number;
  /** @default 1 */
  min?: number;
  /** @default 99 */
  max?: number;
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Called with the new clamped quantity. */
  onChange?: (value: number) => void;
  className?: string;
}

export function QuantityStepper(props: QuantityStepperProps): JSX.Element;
