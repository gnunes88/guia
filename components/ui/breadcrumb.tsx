'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Guia de bairro', href: '/guia-de-bairro' },
  { label: 'São Paulo', href: '/guia-de-bairro/sao-paulo' },
  { label: 'Moema', href: '/guia-de-bairro/sao-paulo/moema' },
];

export function Breadcrumb() {
  return (
    <nav className="container mx-auto px-4 py-4">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
            <Link
              href={item.href}
              className={`hover:text-[#EB194B] ${
                index === breadcrumbItems.length - 1
                  ? 'text-[#EB194B] font-medium'
                  : 'text-gray-600'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}