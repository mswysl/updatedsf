import * as React from 'react';
import { BadgeVariant } from '../core/Badge';

export interface ProductCardBadge { label: string; variant?: BadgeVariant; }

/**
 * The storefront's core product tile. Composes Badge, Price and SkullRating.
 * Dark media well, hard border, lifts into a hard shadow on hover. Sold-out
 * state grayscales the image and slaps on a blood "SOLD OUT" stamp.
 */
export interface ProductCardProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'title'> {
  /** Product image URL. */
  image: string;
  /** Product name. */
  title: string;
  /** Eyebrow line — usually the band/artist. */
  artist?: string;
  /** Current price (number or preformatted string). */
  price: number | string;
  /** Compare-at price for sale display. */
  compareAt?: number | null;
  /** ISO currency. @default 'USD' */
  currency?: string;
  /** Corner flags (NEW / LIMITED / SALE…). */
  badges?: ProductCardBadge[];
  /** Skull rating 0–5. */
  rating?: number | null;
  /** Review count. */
  reviews?: number | null;
  /** Sold-out treatment. @default false */
  soldOut?: boolean;
  /** Link target. @default '#' */
  href?: string;
  /** Add-to-cart handler (the inline Add button). */
  onAddToCart?: () => void;
  /** Wishlist handler (the heart). */
  onWishlist?: () => void;
}

export function ProductCard(props: ProductCardProps): JSX.Element;
