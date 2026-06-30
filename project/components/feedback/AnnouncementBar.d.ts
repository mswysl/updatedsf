import * as React from 'react';

/**
 * Full-width announcement strip for the top of the store — shipping, drops,
 * deadlines. Static centered text, or an infinite `marquee` of `items`
 * (pauses on hover).
 */
export interface AnnouncementBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color. @default 'pink' */
  variant?: 'pink' | 'lime' | 'ink';
  /** Scroll the content as an infinite marquee. @default false */
  marquee?: boolean;
  /** Marquee duration in seconds (lower = faster). @default 22 */
  speed?: number;
  /** Marquee items (each separated by a ✶). Falls back to children. */
  items?: React.ReactNode[];
  children?: React.ReactNode;
}

export function AnnouncementBar(props: AnnouncementBarProps): JSX.Element;
