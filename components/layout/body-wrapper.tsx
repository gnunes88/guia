'use client';

import { useEffect } from 'react';

interface BodyWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function BodyWrapper({ children, className }: BodyWrapperProps) {
  useEffect(() => {
    // Remove Grammarly attributes after initial render
    const body = document.querySelector('body');
    if (body) {
      body.removeAttribute('data-new-gr-c-s-check-loaded');
      body.removeAttribute('data-gr-ext-installed');
    }
  }, []);

  return (
    <body className={className} suppressHydrationWarning>
      {children}
    </body>
  );
}