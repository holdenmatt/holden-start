import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-2 hover:underline hover:underline-offset-4',
        className
      )}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
